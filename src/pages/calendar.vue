<script setup lang='ts'>
defineOptions({
  name: 'Calendar',
})
</script>

<template>
  <n-calendar
    #="{ year, month, date }"
  >
    {{ year }}-{{ month }}-{{ date }}
  </n-calendar>
</template>

<style scoped>
</style>
