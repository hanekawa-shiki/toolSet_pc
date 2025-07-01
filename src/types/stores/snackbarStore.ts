export interface SnackbarOptions {
  message: string
  color?: string
  timeout?: number
}

export interface SnackbarState {
  isVisible: boolean
  message: string
  color: string
  timeout: number
  timeoutId: number | null // 用于存储 setTimeout 的 ID
}
