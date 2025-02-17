import { trpc } from '@/src/shared/api/trpc'
import { useRouter } from 'next/router'
import BotHeaderDescriptor from '@/src/widgets/bot/BotHeaderDescriptor'
import BotLogsCard from '@/src/features/logs/ui/BotLogsCard'
import Loading from '@/src/shared/ui/Loading'
import { usePushNotification } from '@/src/shared/hooks'
import { failedQueryNotification } from '@/src/shared/notifications/failedQueryNotification'

export default function AlgorithmRunsPage() {
  const pushNotification = usePushNotification()

  const {
    query: { botUrl }
  } = useRouter()

  const { data: bot, isError, isLoading } = trpc.repository.findBot.useQuery({ url: String(botUrl) })

  if (isError) {
    pushNotification(failedQueryNotification('trpc.repository.findBot'))
    return <h1 className="font-bold text-3xl m-5 text-error">Bot not found</h1>
  }

  if (isLoading) {
    return (
      <div className="w-full h-[66vh] flex items-center justify-center">
        <Loading />
      </div>
    )
  }

  return (
    <>
      <BotHeaderDescriptor bot={bot!} />
      <BotLogsCard botUrl={botUrl as string} />
    </>
  )
}
