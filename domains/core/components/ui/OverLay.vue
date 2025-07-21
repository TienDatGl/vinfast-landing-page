<template>
  <div
    v-if="visible"
    class="bottom-0 left-0 right-0 top-0 fixed z-50 h-full w-full bg-neutral-500/50"
    data-testid="overlay"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
export interface OverlayProps {
  visible?: boolean
}

defineProps<OverlayProps>()
</script>
