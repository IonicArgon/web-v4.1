'use server';

import { FieldPath } from 'firebase-admin/firestore';
import { adminDb } from '@/services/firebase';

type MOTDType = Promise<{
  motd: null | string;
  date: null | string;
  err?: string;
}>;

const fetchMOTD: () => MOTDType = async () => {
  try {
    const motdQuery = adminDb
      .collection('motd')
      .orderBy(FieldPath.documentId(), 'desc')
      .limit(1);
    const motdSnapshot = await motdQuery.get();

    if (!motdSnapshot.empty) {
      const data = motdSnapshot.docs[0].data();
      const date = motdSnapshot.docs[0].id;
      if (data && data.motd) {
        return {
          motd: data.motd,
          date,
        };
      } else {
        return {
          motd: null,
          date: null,
          err: 'Error fetching data from recent motd document.',
        };
      }
    } else {
      return {
        motd: null,
        date: null,
        err: 'Error fetching motd collection.',
      };
    }
  } catch (error) {
    console.error('Error fetching MOTD: ', (error as Error).message);
    return {
      motd: null,
      date: null,
      err: (error as Error).message,
    };
  }
};

export default fetchMOTD;
