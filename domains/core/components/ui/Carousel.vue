<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { NuxtImg } from '#components'

defineProps<{
  images: string[]
}>()
</script>

<template>
  <ClientOnly>
    <Swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="w-full overflow-hidden car-swiper"
      :pagination="true"
    >
      <SwiperSlide
        v-for="(image, index) in images"
        :key="index"
        class="w-full h-full"
      >
        <NuxtImg
          :src="image"
          :alt="`Car image ${index + 1}`"
          format="webp"
          quality="80"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<style scoped>
.car-swiper {
  height: 30vh;
  width: 100%;
}

@media (min-width: 640px) {
  .car-swiper {
    height: 40vh;
  }
}

@media (min-width: 768px) {
  .car-swiper {
    height: 50vh;
  }
}

@media (min-width: 1024px) {
  .car-swiper {
    height: 60vh;
  }
}
</style>