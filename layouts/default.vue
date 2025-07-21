<script lang="ts" setup>
import { UiHotlineButton, UiRollingQuoteButton } from '#components'
import CarRegister from '~/domains/core/components/CarRegister.vue'
const { isOpen, close } = useRegister()
</script>

<template>
  <div class="bg-gray-6 pb-[62px] lg:pb-0">
    <TheHeader class="sticky top-0 z-50" />

    <main class="w-full">
      <slot />
    </main>

    <Promotion />
    <TheFooter />

    <CarRegister :visible="isOpen" v-on:close="close" />
    <UiScrollToTop />

    <div
      class="md:-px-0 fixed bottom-0 left-0 z-[100] flex w-full flex-row items-start justify-center gap-3 bg-black-main/30 md:bg-transparent px-5 py-2 md:bottom-6 md:left-6 md:!w-[250px] md:flex-col md:py-0"
    >
      <UiRollingQuoteButton class="flex-1 w-full" :button-class="'!py-2'" />
      <UiHotlineButton class="w-full flex-1" :button-class="'w-full'" :contactZalo="true" />
    </div>
  </div>
</template>
