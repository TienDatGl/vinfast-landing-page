<template>
  <section class="mb-8 !text-black-attr">
    <h2 class="mb-4 font-semibold !text-black-main typography-display-2">{{ title }}</h2>

    <div v-for="(item, index) in content" :key="index" class="mb-4">
      <!-- Paragraph -->
      <p v-if="item.type === 'paragraph'" class="text-base leading-relaxed">
        {{ item.text }}
      </p>

      <!-- Unordered List -->
      <ul v-else-if="item.type === 'ul'" class="list-disc pl-6 text-base leading-relaxed">
        <li v-for="(listItem, listIndex) in item.items" :key="listIndex">
          {{ listItem }}
        </li>
      </ul>

      <!-- Ordered List -->
      <ol v-else-if="item.type === 'ol'" class="list-decimal pl-6 text-base leading-relaxed">
        <li v-for="(listItem, listIndex) in item.items" :key="listIndex">
          {{ listItem }}
        </li>
      </ol>

      <!-- YouTube Video -->
      <div
        v-else-if="item.type === 'youtube' && item.videoUrl"
        class="relative w-full overflow-hidden rounded-md"
        style="padding-bottom: 56.25%; height: 0"
      >
        <iframe
          class="absolute left-0 top-0 h-full w-full rounded-md"
          :src="`https://www.youtube.com/embed/${extractYoutubeVideoId(item.videoUrl)}`"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Single Image -->
      <div v-else-if="item.type === 'image' && item.imageUrl" class="my-4">
        <NuxtImg :alt="item.caption || 'Blog image'" :src="item.imageUrl" />
        <p v-if="item.caption" class="text-gray-600 mt-2 text-sm w-full text-center">{{ item.caption }}</p>
      </div>

      <!-- Multiple Images -->
      <div v-else-if="item.type === 'images' && item.images?.length" class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div v-for="(img, imgIndex) in item.images" :key="imgIndex" class="flex flex-col items-center">
          <NuxtImg :src="img.url" class="max-w-full rounded-md" :alt="img.caption || 'Blog image'" />
          <p v-if="img.caption" class="text-gray-600 mt-2 text-center text-sm">{{ img.caption }}</p>
        </div>
      </div>

      <div v-if="item.imageUrl" class="my-4">
        <NuxtImg :alt="item.caption || 'Blog image'" :src="item.imageUrl" />
        <p v-if="item.caption" class="text-gray-600 mt-2 text-sm w-full text-center">{{ item.caption }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface ImageItem {
  url: string
  caption?: string
}

interface ContentItem {
  type: 'paragraph' | 'ul' | 'ol' | 'youtube' | 'image' | 'images'
  text?: string
  items?: string[]
  videoUrl?: string
  imageUrl?: string
  caption?: string
  images?: ImageItem[]
}

const props = defineProps<{
  title: string
  content: ContentItem[]
  imageUrl?: string | null
  caption?: string | null
}>()

const extractYoutubeVideoId = (url: string): string | null => {
  try {
    const parsedUrl = new URL(url)
    if (parsedUrl.hostname === 'youtu.be') return parsedUrl.pathname.slice(1)
    if (parsedUrl.hostname.includes('youtube.com')) return parsedUrl.searchParams.get('v')
  } catch {
    return null
  }
  return null
}
</script>
