<script setup lang='ts'>
defineOptions({
  name: 'Calendar',
})
</script>

<template>
  <n-calendar>
    <template #header>
      666666666
    </template>
    <template #default="{ year, month, date }">
      {{ year }}-{{ month }}-{{ date }}
    </template>
  </n-calendar>
</template>

<style lang="less" scoped>
</style>
