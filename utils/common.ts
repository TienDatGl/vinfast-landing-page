export const formatterVND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
})

export const goToProduct = (slug: string) => {
const router = useRouter()
  router.push(`/san-pham/${slug}`)
}

export const getSeoMeta = (slug: string) => {
  const metaMap: Record<string, ReturnType<typeof useHead>> = {
    'vinfast-ec-van': useHead({
      title: 'VinFast EC Van | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast EC Van với tầm di chuyển 150km, giá từ 285,000,000 VNĐ. Đặt xe ngay tại VinFast Đà Nẵng.' },
        { property: 'og:title', content: 'VinFast EC Van | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast EC Van với tầm di chuyển 150km, giá từ 285,000,000 VNĐ. Đặt xe ngay tại VinFast Đà Nẵng.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/ecvan.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-ec-van' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-herio-green': useHead({
      title: 'VinFast Herio Green | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast Herio Green với tầm di chuyển 326km, giá từ 499,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast Herio Green | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast Herio Green với tầm di chuyển 326km, giá từ 499,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/herio.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-herio-green' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-limo-green': useHead({
      title: 'VinFast Limo Green | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast Limo Green với tầm di chuyển 450km, giá từ 749,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast Limo Green | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast Limo Green với tầm di chuyển 450km, giá từ 749,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/limo.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-limo-green' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-minio-green': useHead({
      title: 'VinFast MiniO Green | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast MiniO Green với tầm di chuyển 170km, giá từ 269,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast MiniO Green | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast MiniO Green với tầm di chuyển 170km, giá từ 269,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/minio.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-minio-green' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-nerio-green': useHead({
      title: 'VinFast Nerio Green | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast Nerio Green với tầm di chuyển 318km, giá từ 668,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast Nerio Green | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast Nerio Green với tầm di chuyển 318km, giá từ 668,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/nerio.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-nerio-green' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-vf-3': useHead({
      title: 'VinFast VF 3 | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast VF 3 với tầm di chuyển 180-210km, giá từ 322,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast VF 3 | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast VF 3 với tầm di chuyển 180-210km, giá từ 322,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/vf3.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-vf-3' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-vf-5': useHead({
      title: 'VinFast VF 5 | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast VF 5 với tầm di chuyển 300km, giá từ 458,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast VF 5 | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast VF 5 với tầm di chuyển 300km, giá từ 458,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/vf5.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-vf-5' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-vf-6': useHead({
      title: 'VinFast VF 6 | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast VF 6 với tầm di chuyển 399km, giá từ 675,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast VF 6 | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast VF 6 với tầm di chuyển 399km, giá từ 675,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/vf6.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-vf-6' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-vf-7': useHead({
      title: 'VinFast VF 7 | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast VF 7 với tầm di chuyển 431km, giá từ 850,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast VF 7 | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast VF 7 với tầm di chuyển 431km, giá từ 850,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/vf7.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-vf-7' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-vf-8': useHead({
      title: 'VinFast VF 8 | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast VF 8 với tầm di chuyển 457km, giá từ 1,090,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast VF 8 | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast VF 8 với tầm di chuyển 457km, giá từ 1,090,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/vf8.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-vf-8' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),

    'vinfast-vf-9': useHead({
      title: 'VinFast VF 9 | VinFast Đà Nẵng',
      meta: [
        { name: 'description', content: 'VinFast VF 9 với tầm di chuyển 521km, giá từ 1,491,000,000 VNĐ.' },
        { property: 'og:title', content: 'VinFast VF 9 | VinFast Đà Nẵng' },
        { property: 'og:description', content: 'VinFast VF 9 với tầm di chuyển 521km, giá từ 1,491,000,000 VNĐ.' },
        { property: 'og:image', content: 'https://res.cloudinary.com/dypj5qjdg/image/upload/v1752393774/vf9.png' },
        { property: 'og:url', content: 'https://xedienvinfastdn.com/san-pham/vinfast-vf-9' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ]
    }),
  }

  return metaMap[slug]
}