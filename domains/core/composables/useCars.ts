import type { Car } from '~/types'
import { fetchAllDocs, fetchDocByField } from '~/utils/firestore'

export const useCars = () => {
  const car = useState<Car | null>('car', () => null)
  const cars = useState<Car[]>('cars', () => [])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchCarBySlug = async (slug: string) => {
    loading.value = true
    error.value = null
    try {
      const result = await fetchDocByField<Car>(FIRE_BASE_COLLECTION.CARS, QUERY_FILTER.SLUG, slug)

      if (!result) throw new Error(`Không tìm thấy blog với slug: ${slug}`)

      car.value = result
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  const fetchAllCars = async () => {
    loading.value = true
    error.value = null
    try {
      cars.value = await fetchAllDocs<Car>(FIRE_BASE_COLLECTION.CARS)
    } catch (err) {
      error.value = err as Error
      cars.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    car,
    cars,
    loading,
    error,
    fetchCarBySlug,
    fetchAllCars
  }
}
