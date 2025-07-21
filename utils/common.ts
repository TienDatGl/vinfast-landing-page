export const formatterVND = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
})

export const goToProduct = (slug: string) => {
const router = useRouter()
  router.push(`/san-pham/${slug}`)
}