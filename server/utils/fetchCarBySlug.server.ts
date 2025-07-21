import { getDbAdmin } from './firebase-admin'

export const fetchCarBySlug = async <T = any>(slug: string): Promise<T | null> => {
  const db = await getDbAdmin()

  const snapshot = await db
    .collection('cars')
    .where('slug', '==', slug)
    .limit(1)
    .get()

  if (!snapshot.empty) {
    return snapshot.docs[0].data() as T
  }
  return null
}