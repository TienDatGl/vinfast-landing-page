<script lang="ts" setup>
const viewport = useNuxtApp().$viewport
const isDesktop = computed(() => viewport.isGreaterOrEquals('desktop'))
</script>

<template>
  <ClientOnly>
    <HeaderDesktop v-if="isDesktop" />
    <HeaderMobile v-else />
  </ClientOnly>
</template>
