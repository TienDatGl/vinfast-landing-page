<script setup>
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="min-h-screen">
    <NuxtLoadingIndicator color="white" :height="4" />

    <NuxtLayout>
      <NuxtPage :page-key="route => route.fullPath" />
    </NuxtLayout>
  </div>
</template>