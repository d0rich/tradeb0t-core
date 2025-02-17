import { useEffect, useState } from 'react'
import type { LogObject } from '@/src/entities/logs/models/LogObject'
import { useSocket } from '@/src/shared/api/socket'
import UnitedLogsModalFrame, {
  UnitedBoxModalButton,
  type UnitedBoxModalButtonProps
} from '@/src/entities/logs/ui/UnitedLogsModalFrame'

export { UnitedBoxModalButton, UnitedBoxModalButtonProps }
export interface UnitedLogsModalProps {
  className?: string
}

export default function UnitedLogsModal() {
  const socket = useSocket('/api/logs/socket')
  const [logs, setLogs] = useState<LogObject[]>([])

  useEffect(() => {
    socket?.on('log', (log: LogObject) => {
      setLogs((logs) => [...logs, log])
    })
  }, [socket])

  return <UnitedLogsModalFrame logs={logs} />
}
