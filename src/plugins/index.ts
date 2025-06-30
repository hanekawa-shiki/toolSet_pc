// Types
import type { App } from 'vue'
import router from '../router'
import pinia from '../stores'

import vuetify from './vuetify'

// 导出一个函数，用于注册插件
export function registerPlugins (app: App) {
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
