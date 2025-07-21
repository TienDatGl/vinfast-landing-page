<template>
  <div class="relative h-[300px] w-full sm:h-[400px] md:h-[500px]">
    <!-- Ảnh nền -->
    <img src="/images/vf8-vf9.jpg" alt="VinFast VF8 VF9" class="h-full w-full object-cover" />

    <!-- Lớp phủ làm mờ -->
    <div class="absolute inset-0 bg-black-secondary bg-opacity-70"></div>

    <!-- Lớp chứa nội dung text -->
    <div class="narrow-container absolute inset-0 flex flex-col justify-center gap-3 px-4">
      <p class="text-xl font-semibold uppercase text-white-main sm:text-xl md:text-2xl">Show room</p>
      <h2 class="m-0 text-xl uppercase text-white-main sm:text-2xl md:text-3xl">Vinfast Đà Nẵng</h2>
      <span class="text-white-main"
        >Địa Chỉ: 363 Tôn Đức Thắng, Phường Hòa Minh, Quận Liên Chiểu, Thành phố Đà Nẵng.</span
      >
      <ui-hotline-button />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: `Liên Hệ | Vinfast Đà Nẵng`,
  meta: [
    { name: 'description', content: 'Địa Chỉ: 363 Tôn Đức Thắng, Phường Hòa Minh, Quận Liên Chiểu, Thành phố Đà Nẵng.' },
    { property: 'og:title', content: `Liên Hệ | Vinfast Đà Nẵng` },
    {
      property: 'og:description',
      content: 'Địa Chỉ: 363 Tôn Đức Thắng, Phường Hòa Minh, Quận Liên Chiểu, Thành phố Đà Nẵng.'
    },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752500748/VinFast_VF-9_Neptune-Grey_A7305495.jpg_kagwcl.jpg'
    },
    { property: 'og:url', content: 'https://xedienvinfastdn.com/lien-he' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
</script>

<style></style>
