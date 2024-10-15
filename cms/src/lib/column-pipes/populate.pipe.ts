import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';

export function populatePipe(collection: string, key: string, fallback = '-') {
  return async (value: any) => {
    console.log(collection, key, fallback, value);

    if (!value) {
      return fallback;
    }

    const ref = await getDoc(doc(db, collection, value));

    return ref.exists() && ref.data().hasOwnProperty(key) ? ref.data()[key] : fallback;
  };
}
