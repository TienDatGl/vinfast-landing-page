<template>
  <div class="w-full">
    <UiCarousel
      :images="[
        'https://res.cloudinary.com/dypj5qjdg/image/upload/v1753007083/banner-vinfast-vf8-24726-pc-08-2048x661_c7grjp.jpg',
        'https://res.cloudinary.com/dypj5qjdg/image/upload/v1753007096/banner-vinfast-vf8-24723-pc-01c-2048x661_lf9b6g.jpg',
      ]"
    />
  </div>
  <div class="narrow-container">
    <section class="my-10">
      <UiCarDisplay v-if="vfCars?.length" :cars="vfCars" />
    </section>
    <section class="my-10">
      <VerticalBanner
        v-if="greenCars?.length"
        :cars="greenCars"
        :main-title="$t('home_page.vinfast_green')"
        :sub-title="$t('home_page.service_vehicle')"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
const { cars, fetchAllCars } = useCars()

onMounted(async () => {
  fetchAllCars()
})

const vfCars = computed(() => cars?.value.filter(car => car.category === CAR_TYPE.VF))
const greenCars = computed(() => cars?.value.filter(car => car.category === CAR_TYPE.GREEN))
</script>
