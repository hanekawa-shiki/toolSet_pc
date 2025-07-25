/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { setupLayouts } from 'virtual:generated-layouts'
// Composables
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  const reloadValue = localStorage.getItem('vuetify:dynamic-reload')
  if (err instanceof Error && typeof err.message === 'string' && err.message.includes('Failed to fetch dynamically imported module')) {
    if (reloadValue !== null && reloadValue !== '') {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

void router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
