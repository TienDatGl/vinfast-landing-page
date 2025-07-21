<template>
  <UiHeadingContent :title="mainTitle" />
  <UiSubHeadingContent v-if="subTitle" :title="subTitle" />
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
    <div
      v-for="({ name, imageUrl, slug, variants }, index) in sortedCars"
      :key="slug"
      :class="[
        'relative flex justify-between overflow-hidden rounded-md bg-gray-secondary',
        { 'md:flex-row-reverse': index % 2 !== 0 }
      ]"
    >
      <NuxtLink :to="`/san-pham/${slug}`">
        <span class="absolute right-5 top-3 flex font-semibold uppercase hover:text-blue-attr">
          {{ $t('home_page.see_detail') }}
          <IconArrow class="-rotate-90" />
        </span>
      </NuxtLink>

      <div class="flex flex-col justify-center p-4 text-center md:w-1/2 md:p-10 md:text-left">
        <NuxtLink :to="`/san-pham/${slug}`">
          <p class="mb-4 text-left font-bold typography-display-3 lg:text-center lg:typography-display-2">{{ name }}</p>
        </NuxtLink>

        <h3 class="m-0 mb-4 text-left text-base text-blue-main lg:typography-display-3">
          {{ $t('home_page.price_from') }}: {{ formatterVND.format(variants[0]?.price || 0) }}
        </h3>
        <UiRollingQuoteButton/>
      </div>
      <div class="flex h-full items-center md:w-1/2">
        <NuxtLink :to="`/san-pham/${slug}`">
          <NuxtImg :src="imageUrl" :alt="slug" width="330" height="217" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Car } from '~/types'

const props = defineProps<{
  mainTitle: string
  subTitle?: string
  cars: Car[]
}>()

const sortedCars = computed(() => props.cars.slice().sort((a, b) => a.variants[0]?.price - b.variants[0]?.price))
</script>
