import type { Algorithm } from '@tradeb0t/core'
import Link from 'next/link'
import AlgorithmCardFrame from '@/src/entities/algorithm/ui/AlgorithmCardFrame'
import RunAlgorithmModal from '@/src/entities/algorithm/ui/RunAlgorithmModal'
import { BotDesciption } from '@/src/entities/bot/model/BotDesciption'
import { trpc } from '@/src/shared/api/trpc'
import { useAppDispatch } from '@/src/shared/model/hooks'
import { pushNotification } from '@/src/entities/notifications/model/notificationsSlice'

export interface AlgorithmCardProps {
  bot: BotDesciption
  algorithm: Algorithm
  className?: string
}

export default function AlgorithmCard({ bot, algorithm, className }: AlgorithmCardProps) {
  const dispatch = useAppDispatch()
  const runAlgorithmMutation = trpc.control.algorithms.run.useMutation({
    onSuccess: (result) => {
      dispatch(
        pushNotification({
          type: 'success',
          content: `Algorithm <code class="kbd kbd-sm text-white">${algorithm.name}</code> is running successfully with id: <code class="kbd kbd-sm text-white">${result.id}</code>!`
        })
      )
    }
  })

  return (
    <>
      <AlgorithmCardFrame
        className={className}
        algorithm={algorithm}
        goToRunsComponent={
          <Link href={`/bots/${bot.url}/algorithms/${algorithm.name}`} className="btn btn-primary btn-sm">
            Runs
          </Link>
        }
        runAlgorithmComponent={
          <RunAlgorithmModal
            algorithm={algorithm}
            runAlgorithm={(inputs) =>
              runAlgorithmMutation.mutate({
                url: bot.url,
                algorithmName: algorithm.name,
                inputs
              })
            }
          />
        }
      />
    </>
  )
}
