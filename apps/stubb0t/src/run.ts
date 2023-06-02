import { DomainMapper, ExchangeConnector, InfoModule, TradeModule } from './bot'
import { runTradeBot } from '@tradeb0t/core'
import { StubExchangeApi } from './exchange'

import { HammerAlgorithm } from './algorithms/Hammer'
import { SlicingAlgorithm } from './algorithms/Slicing'

async function main() {
  const stubApi = new StubExchangeApi()
  await stubApi.initialize()
  runTradeBot({
    config: {
      auth: {
        required: false
      }
    },
    exchangeConnector: new ExchangeConnector({
      modules: {
        domainMapper: new DomainMapper(),
        infoModule: new InfoModule(),
        tradeModule: new TradeModule()
      },
      api: stubApi
    }),
    initAlgorithmsCallback(analyzer) {
      const logger = analyzer.tradebot.logger
      return [new HammerAlgorithm(analyzer), new SlicingAlgorithm(analyzer)]
    }
  })
}

main()
