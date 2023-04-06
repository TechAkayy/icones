<script setup lang='ts'>
import { onKeyStroke } from '@vueuse/core'
import { iconPickerRef, themeColor } from './store'

const delta = 1000
let keyPress: any = null
onKeyStroke('Escape', (e) => {
  e.preventDefault()
  if (keyPress !== null) {
    const d = e.timeStamp - keyPress.timeStamp
    if (delta > d)
      iconPickerRef.closeDialog()
  }
  keyPress = e
})

const style = computed<any>(() => ({
  '--theme-color': themeColor.value,
}))
</script>

<template>
  <!-- <Test2 /> -->
  <div class="dragging bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-200">
    <div class="flex flex-col h-screen overflow-hidden bg-base" :style="style">
      <div class="h-full flex-auto overflow-overlay">
        <RouterView />
      </div>
      <Progress />
    </div>
  </div>
</template>
