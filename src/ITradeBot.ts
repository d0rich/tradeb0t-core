import { IExchangeClient } from './abstract'
import { DomainTemplate } from './domain'
import { ApiService, AuthService, IExchangeAnalyzer, IExchangeTrader, IExchangeWatcher, LoggerService } from './modules'

export interface ITradeBot<Domain extends DomainTemplate, TExchangeApi> {
  get exchangeClient(): IExchangeClient<Domain, TExchangeApi>
  get analyzer(): IExchangeAnalyzer<Domain, TExchangeApi>
  get trader(): IExchangeTrader
  get watcher(): IExchangeWatcher<Domain>
  get api(): ApiService
  get logger(): LoggerService
  get auth(): AuthService
}
