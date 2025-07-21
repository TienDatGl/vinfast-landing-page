<template>
  <header
    class="!z-100 narrow-container flex w-full flex-wrap items-center justify-between bg-white-main py-3 shadow-md"
  >
    <SfButton @click="toggle()" class="custom-button-secondary !border-none !p-0 !text-gray-main !shadow-none">
      <template #prefix>
        <icon-list />
      </template>
    </SfButton>
    <NuxtLink to="/" aria-label="Vinfast Homepage">
      <img src="/images/header/header-logo.png" alt="logo" width="200" height="50" />
    </NuxtLink>
    <div />
    <ui-over-lay :visible="isOpen">
      <ui-mobile-menu-bar :is-open="isOpen" v-on:close="close()" />
    </ui-over-lay>
  </header>
</template>

<script lang="ts" setup>
import { IconList } from '#components'
import { SfButton, useDisclosure } from '@storefront-ui/vue'

const { isOpen, toggle, close } = useDisclosure()
</script>

<style></style>
