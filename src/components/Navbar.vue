<script lang="ts">
import { getSearchResults, isDark } from '../store'
import { isElectron } from '../env'

export default defineComponent({
  setup() {
    const route = useRoute()
    return {
      ...getSearchResults(),
      isElectron,
      isDark,
      showNav: computed(() => !route.path.startsWith('/collection')),
      isHomepage: computed(() => route.path === '/'),
    }
  },
})
</script>

<template>
  <NavElectron v-if="isElectron && !isHomepage" />
  <nav
    class="dragging"
    flex="~ gap4 none"
    p4
    relative
    bg-base
    z-10
    border="b base"
    text-xl
    :class="showNav ? '' : 'md:hidden'"
  >
    <!-- In Collections -->
    <template v-if="!isHomepage && !isElectron">
      <RouterLink class="non-dragging" icon-button flex-none i-carbon:arrow-left to="/collection/all" />
    </template>
    <!-- Homepage Only -->
    <template v-if="showNav">
      <!-- <RouterLink
        class="non-dragging"
        i-carbon:search icon-button flex-none
        to="/collection/all"
      /> -->
      <div flex-auto />
      <h1
        absolute
        top-0
        left-0
        right-0
        bottom-0
        flex
        items-center
        justify-center
        text-xl
        font-light
        tracking-2px
        pointer-events-none
      >
        Icônes
      </h1>
      <!-- @techakayy -->
      <!-- <a class="non-dragging" i-carbon-logo-github icon-button flex-none href="https://github.com/antfu/icones" target="_blank" title="GitHub" />
      <RouterLink class="non-dragging" i-carbon-settings icon-button flex-none to="/settings" title="Settings" />
      <DarkSwitcher flex-none /> -->
    </template>
    <!-- Searching -->
    <SearchBar v-if="collection" v-model:search="search" class="flex w-full" :style="false" :icon="false" />
  </nav>
</template>
