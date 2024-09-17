import * as admin from 'firebase-admin';

const serviceAccountKey = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
);

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
}

const adminDb = admin.firestore();
const adminStorage = admin.storage();

export { adminDb, adminStorage };
