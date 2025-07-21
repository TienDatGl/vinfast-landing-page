<template>
  <div class="bg-gray-secondary">
    <div class="narrow-container flex flex-col items-center justify-between gap-5 py-10 md:flex-row">
      <div class="flex flex-col gap-5">
        <h2 class="m-0 text-2xl font-semibold uppercase text-black-attr typography-headline-2">
          {{ $t('promotion.promotion_and_offer') }}
        </h2>
        <div class="flex flex-col">
          <span class="text-black-attr typography-text-sm">{{ $t('promotion.gift_for_online_customer') }}</span>
          <span class="italic text-black-attr typography-text-sm">{{ $t('promotion.promotion_required') }}</span>
        </div>
      </div>

      <!-- Phone button -->
      <UiHotlineButton />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
