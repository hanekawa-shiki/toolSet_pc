<script setup lang='ts'>
import type { MessageType, TorrentFileDetail } from '@/types' // 导入 ParsedTorrentInfo
import {
  Attach as AttachIcon,
  Close as CloseIcon,
  CopyOutline as CopyIcon,
  FileTrayFullOutline as FileIcon,
  SwapHorizontal as SwapIcon,
} from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'
import { parseTorrentFileToMagnet } from '@/utils'

defineOptions({
  name: 'Torrent2Magnet',
})
const message = useMessage()
const selectedFiles = ref<File[]>([])
const fileDetails = ref<TorrentFileDetail[]>([]) // 使用新的数组存储文件和其详细信息
const fileInput = useTemplateRef<HTMLInputElement>('fileInput')

function handleFileChange(event: Event): void {
  const target = event.target as HTMLInputElement
  selectedFiles.value = Array.from(target.files || [])
  handleFiles()
}
function triggerFileInput(): void {
  fileInput.value?.click()
}

/** 格式化文件大小为GB */
function formatSizeInGB(bytes: number): string {
  if (bytes === 0)
    return '0 GB'
  const gb = bytes / (1024 ** 3)
  return `${gb.toFixed(2)} GB`
}

/** 处理选择的 .torrent 文件 */
async function handleFiles() {
  fileDetails.value = [] // 清空之前的列表
  for (const file of selectedFiles.value) {
    try {
      const { magnetLink, totalSize } = await parseTorrentFileToMagnet(file)
      fileDetails.value.push({ file, magnetLink, totalSize })
    } catch (error: any) {
      setMsg({ type: 'error', msg: error.message })
      const index = selectedFiles.value.indexOf(file)
      if (index !== -1) {
        selectedFiles.value.splice(index, 1)
      }
    }
  }
}
function removeFile(index: number): void {
  selectedFiles.value.splice(index, 1)
  fileDetails.value.splice(index, 1)
}

async function handleCopy(link: string) {
  try {
    await navigator.clipboard.writeText(link)
    setMsg({ type: 'success', msg: '磁力链接已复制' })
  } catch {
    setMsg({ type: 'warning', msg: '复制失败，请手动复制' })
  }
}

async function copyAll() {
  if (fileDetails.value.length === 0)
    return
  const allText = fileDetails.value.map(item => item.magnetLink).join('\n')
  try {
    await navigator.clipboard.writeText(allText)
    setMsg({ type: 'success', msg: '已复制全部磁力链接' })
  } catch {
    setMsg({ type: 'warning', msg: '复制失败，请手动复制' })
  }
}

async function export2file() {
  if (fileDetails.value.length === 0) {
    setMsg({ type: 'warning', msg: '没有可以导出的磁力链接' })
    return
  }

  const allText = fileDetails.value.map(item => item.magnetLink).join('\n')
  const blob = new Blob([allText], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `magnet_links_${Date.now()}.txt`
  link.click()

  URL.revokeObjectURL(url)
  setMsg({ type: 'success', msg: '磁力链接已导出' })
}

async function clearAll() {
  selectedFiles.value = []
  fileDetails.value = []
}

function setMsg({ msg, type }: { msg: string, type: MessageType }): void {
  message[type](
    msg,
    {
      keepAliveOnHover: true,
      closable: true,
      duration: 3000,
    },
  )
}
</script>

<template>
  <header class="header">
    种子转磁力链(torrent转magnet)
  </header>

  <n-button
    size="large"
    secondary
    strong
    type="primary"
    @click="triggerFileInput"
  >
    选择Torrent文件
    <template #icon>
      <n-icon>
        <FileIcon />
      </n-icon>
    </template>
  </n-button>
  <n-flex
    v-if="fileDetails.length"
    class="list-wrap"
    :wrap="false"
  >
    <n-list
      class="list-item"
      bordered
    >
      <n-list-item
        v-for="(item, index) in fileDetails"
        :key="index"
        class="list-item-inner"
      >
        <template #prefix>
          <n-button
            text
            class="icon-button"
            @click="removeFile(index)"
          >
            <n-icon>
              <CloseIcon />
            </n-icon>
          </n-button>
        </template>
        <div class="text-parent">
          <span class="child-a">{{ item.file.name }}</span>
          <span class="child-b">{{ formatSizeInGB(item.totalSize) }}</span>
        </div>
      </n-list-item>
    </n-list>
    <n-icon class="list-icon">
      <SwapIcon />
    </n-icon>
    <n-list
      v-if="fileDetails.length"
      class="list-item"
      bordered
    >
      <n-list-item
        v-for="(item, index) in fileDetails"
        :key="index"
        class="list-item-inner"
      >
        <template #prefix>
          <n-button
            text
            class="icon-button"
            @click="handleCopy(item.magnetLink)"
          >
            <n-icon>
              <CopyIcon />
            </n-icon>
          </n-button>
        </template>
        {{ item.magnetLink }}
      </n-list-item>
    </n-list>
  </n-flex>
  <n-flex
    v-if="fileDetails.length"
    class="list-wrap"
    :wrap="false"
  >
    <div
      v-if="fileDetails.length"
      class="list-item"
    >
      <n-button
        type="warning"
        @click="clearAll"
      >
        清除所有种子
        <template #icon>
          <n-icon>
            <CloseIcon />
          </n-icon>
        </template>
      </n-button>
    </div>
    <n-icon
      class="list-icon"
      style="visibility: hidden;"
    >
      <SwapIcon />
    </n-icon>
    <div
      v-if="fileDetails.length"
      class="list-item"
    >
      <n-button
        type="primary"
        @click="copyAll"
      >
        复制所有磁力链
        <template #icon>
          <n-icon>
            <CopyIcon />
          </n-icon>
        </template>
      </n-button>
      <n-button
        type="primary"
        class="ml-16"
        @click="export2file"
      >
        导出所有磁力链
        <template #icon>
          <n-icon>
            <AttachIcon />
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-flex>

  <input
    ref="fileInput"
    type="file"
    style="display: none"
    multiple
    accept=".torrent"
    @change="handleFileChange"
  >
</template>

<style scoped>
.header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.icon-button {
  font-size: 24px;
}
.list-wrap {
  margin-top: 24px;
  display: flex;
  align-items: center;
  width: 100%;
}
.list-icon {
  font-size: 24px;
  align-self: center;
  flex: none;
}
.list-item {
  flex: 1;
  width: calc(50% - 12px);
}
.list-item ::v-deep(.n-list-item__prefix) {
  line-height: 100%;
}
.list-item-inner {
  align-items: center;
}
.list-item-inner ::v-deep(.n-list-item__main) {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100px;
}

.text-parent {
  display: flex;
  width: 100%;
}

.child-a {
  flex-shrink: 1;
  flex-grow: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 8px;
}

.child-b {
  flex-shrink: 0;
  flex-grow: 0;
}

.ml-16 {
  margin-left: 16px;
}
</style>
