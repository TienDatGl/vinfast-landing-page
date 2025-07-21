<template>
  <a
    :href="contactZalo ? `https://zalo.me/${$t('common.phone_number')}` : `tel:${$t('common.phone_number')}`"
    target="_blank"
  >
    <SfButton
      class="custom-button-main"
      :class="[
        buttonClass,
        props.contactZalo ? '!bg-white-main !text-blue-main hover:!bg-white-main hover:!shadow-sm' : ''
      ]"
    >
      <template v-if="props.contactZalo">
        <img src="/images/zalo.png" alt="logo" width="23" height="23" />
        {{ $t('common.phone_number') }}
      </template>
      <template v-else> {{ $t('common.hotline') }}: {{ $t('common.phone_number') }} </template>
    </SfButton>
  </a>
</template>

<script lang="ts" setup>
import type { IconZalo } from '#components'
import { SfButton } from '@storefront-ui/vue'
const props = defineProps<{ buttonClass?: string; contactZalo?: boolean }>()
</script>

<style></style>
