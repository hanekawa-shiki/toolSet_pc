import type { SnackbarOptions, SnackbarState } from '@/types'
import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: (): SnackbarState => ({
    isVisible: false,
    message: '',
    // primary: 主色，通常用于你的品牌色。
    // secondary: 副色，用于补充主色。
    // accent: 强调色，用于突出显示。
    // error: 错误提示色（通常是红色）。
    // warning: 警告提示色（通常是橙色/黄色）。
    // info: 信息提示色（通常是蓝色）。
    // success: 成功提示色（通常是绿色）。
    color: 'primary',
    timeout: 3000,
    timeoutId: null,
  }),
  actions: {
    /**
     * 显示消息提示
     * @param options 消息选项，包括文本、颜色和超时时间
     */
    showSnackbar (options: SnackbarOptions) {
      // 如果有上一条消息正在显示，先隐藏它并清除计时器
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }

      this.isVisible = false // 确保隐藏，以便触发动画和重置状态

      // 在下一个tick中更新内容并显示，确保动画正常
      setTimeout(() => {
        this.message = options.message
        this.color = options.color || 'primary'
        this.timeout = options.timeout || 3000
        this.isVisible = true

        // 设置新的超时隐藏
        this.timeoutId = setTimeout(() => {
          this.isVisible = false
          this.timeoutId = null
        }, this.timeout) as unknown as number // TypeScript 对 NodeJS.Timeout 的兼容
      }, 0)
    },

    /**
     * 隐藏消息提示
     */
    hideSnackbar () {
      this.isVisible = false
      if (this.timeoutId) {
        clearTimeout(this.timeoutId)
        this.timeoutId = null
      }
    },
  },
})
