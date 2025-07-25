<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import {
  Magnet as MagnetIcon,
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { RouterLink, useRoute, useRouter } from 'vue-router'

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
            path: '/torrent2magnet',
          },
        },
        { default: () => '种子转磁力链(torrent转magnet)' },
      ),
    key: 'torrent2magnet',
    icon: renderIcon(MagnetIcon),
  },
]

const layoutScroll = useTemplateRef('layoutScroll')
watch(
  () => route.fullPath,
  () => {
    nextTick(() => {
      layoutScroll.value?.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    })
  },
)
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
      content-style="padding-top: 200px;"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <div
        class="logo"
        @click="goHome"
      >
        logo
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
      :native-scrollbar="false"
    >
      <n-layout-header
        bordered
        class="header"
      >
        header
      </n-layout-header>
      <n-layout-content
        ref="layoutScroll"
        class="content-inner"
        :native-scrollbar="false"
        content-style="padding: 16px 16px 0 16px;"
      >
        <RouterView />
      </n-layout-content>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.layout {
  height: 100vh;
  position: relative;
}

.header {
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
}

.sider {
  height: 100%;
  .logo {
    height: 200px;
    width: 100%;
    line-height: 200px;
    text-align: center;
    font-size: 24px;
    background-color: aquamarine;
    position: absolute;
    top: 0;
    cursor: pointer;
  }
}

.content {
  flex: 1;
}
.content-inner {
  height: calc(100vh - 64px);
  width: 100%;
  overflow: auto;
}
</style>
