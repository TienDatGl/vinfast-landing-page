import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export const fetchAllDocs = async <T = any>(collectionName: string): Promise<T[]> => {
  const db = getFirestore()
  const colRef = collection(db, collectionName)
  const snapshot = await getDocs(colRef)
  return snapshot.docs.map(doc => doc.data() as T)
}

export const fetchDocByField = async <T = any>(
  collectionName: string,
  field: string,
  value: string
): Promise<T | null> => {
  const db = getFirestore()
  const colRef = collection(db, collectionName)
  const q = query(colRef, where(field, '==', value))
  const snapshot = await getDocs(q)

  if (!snapshot.empty) {
    return snapshot.docs[0].data() as T
  } else {
    return null
  }
}