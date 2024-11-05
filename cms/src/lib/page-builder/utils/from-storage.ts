import { getBlob, ref } from 'firebase/storage';
import { storage } from '../../utils/firebase';

export async function fromStorage(url: string) {
  try {
    const blob = await getBlob(ref(storage, url));
    return blob.text();
  } catch (e) {
    console.error(e);
  }

  return url.endsWith('.json') ? '{}' : '';
}
