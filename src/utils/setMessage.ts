import type { MessageType } from '@/types'
import { useMessage } from 'naive-ui'

const message = useMessage()

function setMessage({ msg, type }: { msg: string, type: MessageType, duration?: number }): void {
  message[type](
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
