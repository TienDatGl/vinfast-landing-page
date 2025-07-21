import { ref } from 'vue'
import type { CarBlog } from '~/types'
import { fetchAllDocs, fetchDocByField } from '~/utils/firestore'

export const useBlog = () => {
  const blog = ref<CarBlog | null>(null)
  const blogs = useState<CarBlog[]>('cars_blog', () => [])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchBlogBySlug = async (slug: string) => {
    loading.value = true
    error.value = null
    try {
      const result = await fetchDocByField<CarBlog>(FIRE_BASE_COLLECTION.CARS_BLOG, QUERY_FILTER.SLUG, slug)
      
      if (!result) throw new Error(`Không tìm thấy blog với slug: ${slug}`)
        
      blog.value = result
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  const fetchAllBlogs = async () => {
    loading.value = true
    error.value = null
    try {
      blogs.value = await fetchAllDocs<CarBlog>(FIRE_BASE_COLLECTION.CARS_BLOG)
    } catch (err) {
      error.value = err as Error
      blogs.value = []
    } finally {
      loading.value = false
    }
  }

  return {
    blog,
    blogs,
    loading,
    error,
    fetchBlogBySlug,
    fetchAllBlogs,
  }
}