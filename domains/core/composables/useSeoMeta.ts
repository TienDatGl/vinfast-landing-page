import type { Car } from "~/types"

export function useSeoMetaForCar(car: Car, slug: string) {
  useHead({
    title: `${car.name} | Vinfast Đà Nẵng`,
    meta: [
      { name: 'description', content: car.name },
      { property: 'og:title', content: `${car.name} | Bảng giá và thông số kỹ thuật` },
      { property: 'og:description', content: car.name },
      { property: 'og:image', content: car.imageUrl },
      { property: 'og:url', content: `https://xedienvinfastdn.com/san-pham/${slug}` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  })
}