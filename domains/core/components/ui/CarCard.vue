<template>
  <div class="flex flex-col items-start justify-center gap-2">
    <NuxtLink :to="`/san-pham/${car.slug}`" aria-label="Sf Homepage" class="flex w-full items-center justify-center">
      <NuxtImg :src="car.imageUrl" :alt="car.slug" width="330" height="217" />
    </NuxtLink>
    <h2 class="m-0 text-2xl text-black-main">{{ car.name }}</h2>
    <h3 class="m-0 text-base text-blue-main">
      {{ $t('home_page.price_from') }}: {{ formatterVND.format(car?.variants[0]?.price || 0) }}
    </h3>
    <div class="flex w-full items-center justify-between gap-5">
     <UiRollingQuoteButton class="flex-1"/>
      <SfButton class="custom-button-secondary uppercase" @click="goToProduct(car.slug)">
        {{ $t('home_page.see_detail') }}
        <template #prefix>
          <IconList />
        </template>
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue'
import type { Car } from '~/types'
defineProps<{ car: Car }>()

</script>

<style></style>
