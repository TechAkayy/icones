<script setup>
import { watch } from 'vue'
import { iconPickerRef, isDark } from '../store'

watch(iconPickerRef, (newVal) => {
  isDark.value = !!(newVal.theme === 'dark')
})
</script>

<script>
export default {
  data() {
    return {
      theme: 'dark',
    }
  },
}
</script>

<template>
  <!-- <div ref="icones" /> -->
  <div />
  <!-- <button icon-button dark:i-carbon-moon i-carbon:sun @click="isDark = !isDark" /> -->
</template>
