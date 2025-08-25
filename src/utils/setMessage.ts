import type { MessageApiInjection } from 'naive-ui/lib/message/src/MessageProvider'
import type { MessageType } from '@/types'

function setMessage(
  messageApi: MessageApiInjection,
  { msg, type }: { msg: string, type: MessageType, duration?: number },
): void {
  messageApi[type](
    msg,
    {
      keepAliveOnHover: true,
      closable: true,
      duration: 3000,
    },
  )
}

export {
  setMessage,
}
