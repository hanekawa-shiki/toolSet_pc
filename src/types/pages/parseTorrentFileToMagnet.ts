export interface TorrentFileDetail {
  file: File
  magnetLink: string
  totalSize: number
}

export type MessageType = 'success' | 'error' | 'warning' | 'info'
