# tradeb0t/core 🤖

Tradebot is the library for creating trading bots for exchanges. 

Main features:
- **Standardized** - tradebot is based on common domain description for exchanges. It allows to create algorithms for different exchanges without changing them.
- **Scoped** - each tradebot instance is isolated from other instances. It allows to run multiple bots on the same machine.
- **Manageable** - tradebot have its own API based on [TRPC](https://trpc.io/). It allows to quickly create UI for managing bots.

This project is used to be my diploma project, and you can check its orginal repository [here](https://github.com/badlabs/tradebot-core). Now I'm trying to make it more useful for other people.

## Roadmap 🚗

- [ ]  Implement script for running several instances in multiple processes
- [ ]  Make `AbstractTradeAlgorithm` domain-agnostic
- [ ]  Create Binance implementation
- [ ]  Write [JSDoc](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)


## Getting started

Install core: 

```sh
npm install tradeb0t/core
```

### Describe your domain

Domain includes types of entities in the integrated exchange. 

Technically, you can provide `any` types for `DomainTemplate`. But it is not recommended, as these types will be helpful in process of creating other modules.

```ts
import {DomainTemplate} from 'tradeb0t/core'
import {
    CurrencyType,
    CurrencyBalanceType,
    SecurityType,
    SecurityBalanceType,
    OrderType
} from '@exchange/sdk'

// Order of arguments matters
export type Domain = DomainTemplate<CurrencyType, CurrencyBalanceType, SecurityType, SecurityBalanceType, OrderType>
```

### Implement ExchangeConnector

`ExchangeConnector` is layer between exchange and tradebot internal logic. 

It also includes two submodules for splitting logic:
- `InfoModule` - get different information from exchange;
- `TradeModule` - send requests to place orders to exchange;
- `DomainMapper` - for translation exchange types to tradebot types.

You can access `ExchangeConnector` instance with `this.exchangeConnector` from these modules.

Note, that you can provide object containing API methods to exchange (`API` in example). It will be available in `ExchangeConnector` instance as `api`.

#### DomainMapper

Also, you should implement `DomainMapper` to make it possible for tradebot to understand types of your exchange. 

Internal domain of tradebot is provided by `CommonDomain` type in core library.

```ts
import {OperationType, OrderStatus, CommonDomain,
    AbstractDomainMapper,
    GetCurrencyBalanceType,
    GetCurrencyType,
    GetOrderType,
    GetSecurityBalanceType,
    GetSecurityType} from 'tradeb0t/core'
import type API from '@exchange/sdk'

import {Domain} from "../Domain";
export class DomainMapper extends AbstractDomainMapper<Domain, API>{
    async currency(currency: GetCurrencyType<Domain>): Promise<GetCurrencyType<CommonDomain>>{
        //...
    }
    //...
}
```

Note, that you can extract specific domains types from `Domain` or `ExchangeConnector` with following generic types:
- `GetCurrencyType<T>`
- `GetCurrencyBalanceType<T>`
- `GetSecurityType<T>`
- `GetSecurityBalanceType<T>`
- `GetOrderType<T>`

#### InfoModule

```ts
import {AbstractInfoModule} from 'tradeb0t/core'
import type API from '@exchange/sdk'

import {Domain} from '../Domain'

export class InfoModule extends AbstractInfoModule<Domain, API>{/*...*/}
```

#### TradeModule

```ts
import {AbstractTradeModule} from 'tradeb0t/core'
import type API from '@exchange/sdk'

import {Domain} from '../Domain'

export class TradeModule extends AbstractTradeModule<Domain, API>{/*...*/}
```

#### ExchangeConnector

```ts
import {AbstractExchangeConnector} from 'tradeb0t/core'
import API from '@exchange/sdk'

import {Domain} from '../Domain'
import {TradeModule} from './TradeModule'
import {InfoModule} from './InfoModule'
import {DomainMapper} from "./DomainMapper"

export class ExchangeConnector extends AbstractExchangeConnector<Domain, API>{

    protected async initAccount(){
        const { api } = this
        // Something to prepare your client
        this.isAccountInitialized = true
    }

    async getPortfolio() {/*...*/}

    async getCurrenciesBalance() {/*...*/}
}
```

### Start tradebot

Finally, start tradebot with `runTradeBot` function:

```typescript
import {runTradeBot} from 'tradeb0t/core'
import API from '@exchange/sdk'

import { DomainMapper, ExchangeConnector, InfoModule, TradeModule } from './bot'
import {initAlgorithms} from './algorithms'

runTradeBot({
  ExchangeConnector: new ExchangeConnector({
    modules: {
      domainMapper: new DomainMapper(),
      infoModule: new InfoModule(),
      tradeModule: new TradeModule()
    },
    api: API
  }),
  initAlgorithmsCallback: initAlgorithms,
  config: {
    // ...
  }
})
```
