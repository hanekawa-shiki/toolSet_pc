<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import {
  MenuUnfoldOutlined as MenuCloseIcon,
  MenuFoldOutlined as MenuOpenIcon,
} from '@vicons/antd'
import {
  Calendar as CalendarIcon,
  Home as HomeIcon,
  Magnet as MagnetIcon,
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import logo from '@/assets/image/logo.png'

defineOptions({
  name: 'DefaultLayout',
})

const router = useRouter()
const route = useRoute()

const collapsed = ref(false)
const activeKey = ref<string | null>(null)

function goHome() {
  router.push({ path: '/' })
}
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/calendar',
          },
        },
        { default: () => '日历' },
      ),
    key: 'calendar',
    icon: renderIcon(CalendarIcon),
    path: '/calendar',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/torrent2magnet',
          },
        },
        { default: () => '种子转磁力链(torrent转magnet)' },
      ),
    key: 'torrent2magnet',
    icon: renderIcon(MagnetIcon),
    path: '/torrent2magnet',
  },
]

const layoutScroll = useTemplateRef<HTMLElement>('layoutScroll')
watch(
  () => route.path,
  (path) => {
    menuOptions.forEach((item) => {
      if (item.path === path) {
        activeKey.value = item.key as string
      } else {
        activeKey.value = null
      }
    })

    nextTick(() => {
      layoutScroll.value?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    })
  },
  { immediate: true },
)

const component = computed(() => {
  return collapsed.value ? MenuCloseIcon : MenuOpenIcon
})
</script>

<template>
  <n-layout
    class="layout"
    has-sider
  >
    <n-layout-sider
      class="sider"
      :native-scrollbar="false"
      collapse-mode="width"
      :width="240"
      bordered
      :collapsed-width="48"
      show-trigger="arrow-circle"
      :collapsed="collapsed"
      :content-style="collapsed ? 'padding-top: 0;' : 'padding-top: 240px;'"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <div
        v-show="!collapsed"
        class="logo"
        @click="goHome"
      >
        <img
          :src="logo"
          width="240"
          height="240"
        >
      </div>
      <n-menu
        v-model:value="activeKey"
        :collapsed="collapsed"
        :collapsed-width="48"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <n-layout-content
      class="content"
    >
      <n-layout-header
        bordered
        class="header"
      >
        <NIcon
          class="menu-icon"
          size="24"
          :component="component"
          @click="collapsed = !collapsed"
        />
        <NIcon
          class="menu-icon"
          size="24"
          :component="HomeIcon"
          @click="goHome"
        />
      </n-layout-header>
      <n-layout-content
        ref="layoutScroll"
        class="content-inner"
        content-style="width: 100%;"
      >
        <div class="router-inner">
          <RouterView />
        </div>
      </n-layout-content>
    </n-layout-content>
  </n-layout>
</template>

<style lang="less" scoped>
.layout {
  height: 100vh;
  position: relative;
}

.header {
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .menu-icon {
    cursor: pointer;
    margin-right: 16px;
  }
}

.sider {
  height: 100%;
  .logo {
    height: 240px;
    width: 100%;
    text-align: center;
    font-size: 0;
    background-color: currentColor;
    position: absolute;
    top: 0;
    cursor: pointer;
  }
}

.content {
  flex: 1;
}

.router-inner {
  padding: 16px 16px 0 16px;
}

:deep(.n-layout .n-layout-scroll-container) {
  overflow-x: auto;
}
</style>
