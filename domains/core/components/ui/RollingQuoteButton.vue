<template>
  <SfButton class="custom-button-main uppercase" :class="buttonClass" @click="open"
    >{{ $t('home_page.rolling_quote') }}
    <template #prefix>
      <IconMail />
    </template>
  </SfButton>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue'
defineProps<{ buttonClass?: string }>()

const { open } = useRegister()
</script>

<style></style>
