import { fetchCarBySlug } from '~/server/utils/fetchCarBySlug.server'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const slug = query.slug as string

  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug parameter' })
  }

  const car = await fetchCarBySlug(slug)

  if (!car) {
    throw createError({ statusCode: 404, message: `Không tìm thấy xe với slug: ${slug}` })
  }

  return car
})