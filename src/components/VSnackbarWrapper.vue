<template>
  <v-snackbar
    v-model="snackbarStore.isVisible"
    :color="snackbarStore.color"
    location="top"
    :timeout="snackbarStore.timeout"
    transition="scroll-y-transition"
    @update:model-value="handleSnackbarClose"
  >
    {{ snackbarStore.message }}
    <template #actions>
      <v-btn color="white" variant="text" @click="snackbarStore.hideSnackbar"> close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang='ts'>
  import { useSnackbarStore } from '@/stores/snackbarStore' // 根据你的文件路径调整

  const snackbarStore = useSnackbarStore()

  // 当 v-snackbar 内部关闭时（例如超时或点击X），它会触发 update:modelValue 事件
  // 我们需要确保此时 Pinia store 的 isVisible 状态也同步更新
  const handleSnackbarClose = (value: boolean) => {
    if (!value) {
      snackbarStore.hideSnackbar() // 调用 store 的 hideSnackbar 方法来清理计时器
    }
  }
</script>

<style scoped>
</style>
