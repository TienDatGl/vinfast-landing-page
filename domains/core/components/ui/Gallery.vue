<script lang="ts" setup>
import { SfIconChevronLeft, SfIconChevronRight, SfModal, useDisclosure } from '@storefront-ui/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Thumbs, Mousewheel } from 'swiper/modules'
import { ref, watch, computed } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

type ImageItem = {
  imageSrc: string | null
  imageThumbSrc: string | null
  alt: string | null
}

type GaleryItem = {
  id: string
  image: string
  name: string
}

const props = defineProps<{
  images: ImageItem[]
}>()

const { lock, unlock } = useBodyScrollLock()
const { isOpen, open, close } = useDisclosure()

const activeIndex = ref(0)
const mainSwiper = ref<any>(null)
const thumbsSwiper = ref<any>(null)
const modalActiveIndex = ref(0)
const isBeginning = ref(true)
const isEnd = ref(false)

const galleryItems = computed(() => {
  const items: Array<{
    id: string | number
    image: string | null
    alt: string | null
    type: 'image' | 'media'
  }> = []

  props.images.forEach((item, index) => {
    items.push({
      id: `image-${index}`,
      image: item.imageSrc,
      alt: item.alt,
      type: 'image'
    })
  })
  return items
})

const setMainSwiper = (swiper: any) => {
  mainSwiper.value = swiper
}

const setThumbsSwiper = (swiper: any) => {
  thumbsSwiper.value = swiper
  updateNavigationState(swiper)

  swiper.on('slideChange', () => {
    updateNavigationState(swiper)
  })
}

const updateNavigationState = (swiper: any) => {
  isBeginning.value = swiper.isBeginning
  isEnd.value = swiper.isEnd
}

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex
}

const openModal = (index: number) => {
  modalActiveIndex.value = index
  open()
  lock()
}

const closeModal = () => {
  close()
  unlock()
}

const goPrev = () => {
  if (modalActiveIndex.value > 0) {
    modalActiveIndex.value--
  } else {
    modalActiveIndex.value = galleryItems.value.length - 1
  }
}

const goNext = () => {
  if (modalActiveIndex.value < galleryItems.value.length - 1) {
    modalActiveIndex.value++
  } else {
    modalActiveIndex.value = 0
  }
}

watch(activeIndex, newIndex => {
  if (mainSwiper.value) {
    mainSwiper.value.slideTo(newIndex)
  }
  if (thumbsSwiper.value) {
    thumbsSwiper.value.slideTo(newIndex)
  }
})

onBeforeUnmount(() => {
  unlock()
})
</script>

<template>
  <!-- Backdrop -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    leave-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed bottom-0 left-0 right-0 top-0 z-50 h-full w-full bg-neutral-500/50"
      @click="closeModal"
    />
  </transition>

  <div class="relative flex aspect-[4/3] h-[370px] max-h-[370px] w-full flex-col">
    <Swiper
      :modules="[Navigation, Thumbs, Mousewheel]"
      :thumbs="{ swiper: thumbsSwiper }"
      class="h-full w-full"
      :mousewheel="true"
      @swiper="setMainSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide
        v-for="(item, index) in galleryItems"
        :key="`${item.id}-${index}`"
        class="group flex h-full shrink-0 grow basis-full cursor-pointer justify-center"
        @click="openModal(index)"
      >
        <NuxtImg
          v-if="item.image"
          :width="450"
          :height="450"
          :aria-label="item.alt"
          class="h-full w-full rounded-md object-contain"
          :alt="item.alt || ''"
          :src="item.image"
        />

        <!-- overlay when hover -->
        <div
          class="bg-black absolute inset-0 flex items-center justify-center rounded-md bg-opacity-0 text-transparent transition-all duration-300 group-hover:bg-opacity-30 group-hover:text-white-main"
        >
          <IconZoomIn class="h-6 w-6" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>

  <div v-if="galleryItems.length > 0" class="relative mx-auto mt-[10px] w-full">
    <Swiper
      :modules="[Thumbs, Navigation]"
      :space-between="8"
      :slides-per-view="4"
      :free-mode="true"
      :watch-slides-progress="true"
      :navigation="{
        prevEl: '.thumb-prev',
        nextEl: '.thumb-next'
      }"
      class="thumbs-slider"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide
        v-for="(item, index) in galleryItems"
        :key="`${item.id}-thumbnail-${index}`"
        class="cursor-pointer overflow-hidden"
      >
        <button
          type="button"
          :aria-label="item.alt || ''"
          :aria-current="activeIndex === index"
          class="h-[70px] w-[90px] shrink-0 cursor-pointer overflow-hidden rounded-md border-2 bg-white-main transition-colors focus-visible:outline focus-visible:outline-offset lg:h-[80px] lg:w-[120px]"
          :class="activeIndex === index ? 'border-blue-main' : 'border-transparent hover:border-blue-main'"
          @click="activeIndex = index"
        >
          <div class="flex h-full w-full items-center justify-center overflow-hidden rounded-md">
            <NuxtImg
              v-if="item.image"
              :alt="item.alt || ''"
              class="max-h-full max-w-full object-contain"
              width="120"
              height="80"
              :src="item.image"
            />
          </div>
        </button>
      </SwiperSlide>
    </Swiper>

    <button
      class="thumb-prev border-gray-5 hover:bg-gray-100 absolute -left-4 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full border bg-white-main shadow-md transition-opacity duration-200 focus:outline-none"
      :class="{ 'pointer-events-none opacity-0': isBeginning }"
      aria-label="Previous thumbnails"
    >
      <SfIconChevronLeft class="text-gray-700" />
    </button>
    <button
      class="thumb-next border-gray-5 hover:bg-gray-100 absolute -right-4 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full border bg-white-main shadow-md transition-opacity duration-200 focus:outline-none"
      :class="{ 'pointer-events-none opacity-0': isEnd }"
      aria-label="Next thumbnails"
    >
      <SfIconChevronRight class="text-gray-700" />
    </button>
  </div>

  <!-- Modal for image preview -->
  <SfModal
    v-model="isOpen"
    class="z-[100] !max-h-[90vh] !max-w-[70vw] !border-none !bg-transparent !shadow-none lg:min-w-[800px] lg:!max-w-[30vw]"
  >
    <button
      class="border-gray-5 hover:bg-gray-100 absolute -left-4 top-1/2 z-10 h-[45px] w-[45px] -translate-y-1/2 rounded-full border bg-white-main p-2 shadow-md focus:outline-none"
      @click="goPrev"
    >
      <SfIconChevronLeft class="text-gray-700" />
    </button>
    <div class="relative h-full w-full">
      <div class="flex h-full items-center justify-center">
        <NuxtImg
          v-if="galleryItems[modalActiveIndex]?.image"
          :key="modalActiveIndex"
          class="h-[40vh] max-w-full object-contain"
          :alt="galleryItems[modalActiveIndex]?.alt || ''"
          :src="galleryItems[modalActiveIndex]?.image || ''"
          loading="eager"
          format="webp"
          preload
        />
      </div>
    </div>

    <button
      class="border-gray-5 hover:bg-gray-100 absolute -right-4 top-1/2 z-10 h-[45px] w-[45px] -translate-y-1/2 rounded-full border bg-white-main p-2 shadow-md focus:outline-none"
      @click="goNext"
    >
      <SfIconChevronRight class="text-gray-700" />
    </button>
  </SfModal>
</template>

<style>
.thumbs-slider .swiper-slide {
  opacity: 0.6;
  transition: opacity 0.3s;
}

.thumbs-slider .swiper-slide-thumb-active {
  opacity: 1;
}

/* Custom scrollbar for thumbnails */
.thumbs-slider::-webkit-scrollbar {
  height: 4px;
}

.thumbs-slider::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.thumbs-slider::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.thumbs-slider::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
