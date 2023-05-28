/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { watch } from 'vue'
import { activeMode, preferredCase } from '../store'

export const iconPickerRef = reactive({
  preferredCase: 'unocss',
  theme: 'dark',
  iconName: '',
  iconSvg: '',
  $currentInput: null,
  closeDialog() {
    // console.log('close')
  },
  openUrl(url) {
    window.open(url)
  },
  copyToClipboard(content) {
    // eslint-disable-next-line no-console
    console.log(content)
  },
  activeMode,
})

if (!window.iconPickerRef)
  window.iconPickerRef = iconPickerRef

watch(
  () => ({
    iconName: iconPickerRef.iconName,
    $currentInput: iconPickerRef.$currentInput,
  }),
  (newVal, oldVal) => {
    if (newVal?.$currentInput?.length) {
      if (newVal.iconName !== oldVal.iconName) {
        newVal.$currentInput.val(newVal.iconName)
        newVal.$currentInput.change()
      }
    }
  },
)

// watch(
//   () => ({
//     preferredCase: iconPickerRef.preferredCase,
//   }),
//   (newVal) => {
//     preferredCase.value = newVal.preferredCase
//   })

watch(iconPickerRef, (newVal) => {
  preferredCase.value = newVal.preferredCase
})
