let dbAdmin: FirebaseFirestore.Firestore | null = null

export const getDbAdmin = async () => {
  if (dbAdmin) return dbAdmin

  const { default: admin } = await import('firebase-admin') 

  if (!admin.apps.length) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT_KEY || '{}')

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  }

  dbAdmin = admin.firestore()
  return dbAdmin
}