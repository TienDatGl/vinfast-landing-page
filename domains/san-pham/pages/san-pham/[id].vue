<template>
  <div class="narrow-container my-10">
    <div class="flex w-full flex-col items-start gap-10 md:flex-row lg:mb-9">
      <!-- Gallery -->
      <section class="h-fit w-full md:w-1/2">
        <LazyUiGallery :images="carImages" />
      </section>
      <!-- Ìno -->
      <section class="flex w-full flex-auto flex-col gap-4 md:w-1/2">
        <div
          class="bg-white flex flex-col items-start justify-center gap-5 rounded-md p-3 pt-0 shadow-sm lg:p-5 lg:pt-0"
          data-testid="car-properties"
        >
          <!-- Name -->
          <div class="text-2xl font-medium uppercase text-black-main typography-display-2" data-testid="car-name">
            {{ car?.name }}
          </div>
          <!-- Price -->
          <span class="text-xl font-medium text-blue-main typography-display-3" data-testid="price">
            {{ formatterVND.format(car?.variants[0]?.price || 0) }}
          </span>
          <!-- Price list -->
          <span class="block w-full rounded-sm bg-gray-secondary p-1 px-2 font-medium uppercase text-black-attr"
            >{{ $t('detail.car_price') }} {{ car?.name }}</span
          >

          <ul class="list-disc pl-4 text-lg text-gray-main">
            <li v-for="variant in car?.variants">
              {{ car?.name }} {{ variant?.name }}:
              <span class="text-blue-main" data-testid="price">
                {{ formatterVND.format(variant?.price || 0) }}
              </span>
            </li>
          </ul>
          <!-- Car info -->
          <span class="block w-full rounded-sm bg-gray-secondary p-1 px-2 text-sm font-medium text-black-attr">
            <span class="font-semibold text-black-main">
              {{ car?.variants[0]?.rangeMin }}-{{ car?.variants[0]?.rangeMax }}km
            </span>
            {{ $t('detail.per_charge') }} | {{ $t('detail.max_power') }}
            <span class="font-semibold text-black-main">{{ car?.variants[0]?.chargePower || 0 }} kW</span>
          </span>
          <!-- Promotion -->
          <div class="flex w-full flex-col rounded-sm bg-blue-attr p-2">
            <span class="text-white-main typography-text-sm">{{ $t('promotion.gift_for_online_customer') }}</span>
            <span class="italic text-white-main typography-text-sm">{{ $t('promotion.promotion_required') }}</span>
          </div>
          <!-- Button -->
          <div class="flex w-full items-center justify-between gap-3">
            <UiRollingQuoteButton class="flex-1" :button-class="'!py-2'" />
            <UiHotlineButton class="flex-1" :button-class="'w-full'" />
          </div>
        </div>
      </section>
    </div>
    <div>
      <UiBlogSection
        v-if="blog"
        :title="blog.title"
        :content="blog.content"
        :image-url="blog.imageUrl"
        :caption="blog.caption"
      />
    </div>

    <div>
      <UiCarDeposit
        :car-image="car?.imageUrl || ''"
        :car-name="car?.name || ''"
        :car-price="car?.variants[0]?.price || 0"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { car, fetchCarBySlug } = useCars()
const { blog, fetchBlogBySlug } = useBlog()
const route = useRoute()
const slug = route.params.id as string

onMounted(async () => {
  await fetchBlogBySlug(slug)
})
await fetchCarBySlug(slug)

if (car.value) {
  useSeoMetaForCar(car.value, slug)
}
const carImages = computed(() =>
  Array.from({ length: 10 }, (_, i) => ({
    imageSrc: car.value?.imageUrl || '',
    imageThumbSrc: car.value?.imageUrl || '',
    alt: `${car.value?.name || 'Hình ảnh'} ${i + 1}`
  }))
)
</script>

<style></style>
