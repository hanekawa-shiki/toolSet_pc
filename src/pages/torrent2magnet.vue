<script setup lang='ts'>
import {
  Close as CloseIcon,
  CopyOutline as CopyIcon,
  FileTrayFullOutline as FileIcon,
  SwapHorizontal as SwapIcon,
} from '@vicons/ionicons5'
import { useMessage } from 'naive-ui'
import { parseTorrentFileToMagnet } from '@/utils'

type MessageType = 'success' | 'error' | 'warning' | 'info'

defineOptions({
  name: 'Torrent2Magnet',
})
const message = useMessage()
const selectedFiles = ref<File[]>([])
const magnetLinks = ref<string[]>([])
const fileInput = useTemplateRef<HTMLInputElement>('fileInput')

function handleFileChange(event: Event): void {
  const target = event.target as HTMLInputElement
  selectedFiles.value = Array.from(target.files || [])
  handleFiles()
}
function triggerFileInput(): void {
  fileInput.value?.click()
}
function formatFileSize(bytes: number): string {
  // 格式化文件大小
  if (bytes === 0)
    return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / k ** i).toFixed(2)} ${sizes[i]}`
}
/** 处理选择的 .torrent 文件 */
async function handleFiles() {
  magnetLinks.value = [] // 清空之前的磁力链
  for (const file of selectedFiles.value) {
    try {
      const magnetLink = await parseTorrentFileToMagnet(file)
      magnetLinks.value.push(magnetLink)
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
  magnetLinks.value.splice(index, 1)
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
  if (magnetLinks.value.length === 0)
    return
  const allText = magnetLinks.value.join('\n')
  try {
    await navigator.clipboard.writeText(allText)
    setMsg({ type: 'success', msg: '已复制全部磁力链接' })
  } catch {
    setMsg({ type: 'warning', msg: '复制失败，请手动复制' })
  }
}
async function clearAll() {
  selectedFiles.value = []
  magnetLinks.value = []
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
    v-if="selectedFiles.length"
    class="list-wrap"
    :wrap="false"
  >
    <n-list
      class="list-item"
      bordered
    >
      <n-list-item
        v-for="(file, index) in selectedFiles"
        :key="index"
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
        {{ file.name }} {{ formatFileSize(file.size) }}
      </n-list-item>
    </n-list>
    <n-icon class="list-icon">
      <SwapIcon />
    </n-icon>
    <n-list
      v-if="selectedFiles.length"
      class="list-item"
      bordered
    >
      <n-list-item
        v-for="(file, index) in magnetLinks"
        :key="index"
        class="list-item-inner"
      >
        <template #prefix>
          <n-button
            text
            class="icon-button"
            @click="handleCopy(file)"
          >
            <n-icon>
              <CopyIcon />
            </n-icon>
          </n-button>
        </template>
        {{ file }}
      </n-list-item>
    </n-list>
  </n-flex>
  <n-flex
    v-if="selectedFiles.length"
    class="list-wrap"
    :wrap="false"
  >
    <div
      v-if="selectedFiles.length"
      class="list-item"
    >
      <n-button
        type="info"
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
      v-if="selectedFiles.length"
      class="list-item"
    >
      <n-button
        type="info"
        @click="copyAll"
      >
        复制所有磁力链
        <template #icon>
          <n-icon>
            <CopyIcon />
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
}
.list-icon {
  font-size: 24px;
  align-self: center;
  flex: none;
}
.list-item {
  flex: 1;
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
</style>
