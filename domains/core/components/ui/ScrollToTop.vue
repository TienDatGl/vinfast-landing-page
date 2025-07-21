<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-blue-main text-white-main shadow-lg transition-opacity duration-300 hover:bg-blue-700"
    aria-label="Scroll to top"
  >
    ↑
  </button>
</template>

<script setup lang="ts">
const visible = ref(false)

const handleScroll = () => {
  visible.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>