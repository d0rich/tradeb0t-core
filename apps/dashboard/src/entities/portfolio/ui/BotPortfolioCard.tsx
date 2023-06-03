import SecurityBalanceListItem from './SecurityBalanceListItem'
import CurrencyBalanceView from './CurrencyBalanceView'
import type { CurrencyBalance } from '../model/CurrencyBalance'
import type { SecurityBalance } from '../model/SecurityBalance'

export interface BotPortfolioCardProps {
  currencies: CurrencyBalance[]
  securities: SecurityBalance[]
  className?: string
}

export default function BotPortfolioCard({ currencies, securities, className = '' }: BotPortfolioCardProps) {
  return (
    <div className={`card card-compact bg-base-200 ${className}`}>
      <div className="card-body">
        <h3 className="card-title">Portfolio</h3>
        <h4 className="text-lg font-bold">Currencies</h4>
        <div className="card bg-base-100">
          <div className="flex gap-4 p-3">
            {currencies?.map((item) => (
              <CurrencyBalanceView key={item.assetTicker} item={item} />
            ))}
          </div>
        </div>
        <h4 className="text-lg font-bold">Securities</h4>
        <ul className="max-h-[50vh] overflow-y-auto">
          {securities?.map((item) => (
            <SecurityBalanceListItem key={item.assetTicker} item={item} className="my-1" />
          ))}
        </ul>
      </div>
    </div>
  )
}
