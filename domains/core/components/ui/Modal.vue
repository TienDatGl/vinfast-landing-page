<script setup lang="ts">
import { SfModal } from '@storefront-ui/vue'

const props = defineProps<{
  modelValue?: boolean
  tag?: string
  disableClickAway?: boolean
  disableEsc?: boolean
  modalClass?: string
}>()
</script>

<template>
  <UiOverLay :visible="modelValue">
    <SfModal
      class="md:max-h-[min(calc(100vh-32px),100%)]"
      :class="modalClass"
      v-bind="{ ...$attrs, ...props }"
    >
      <slot />
    </SfModal>
  </UiOverLay>
</template>
