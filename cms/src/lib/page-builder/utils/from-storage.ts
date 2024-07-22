import {getBlob, ref} from 'firebase/storage';
import {storage} from '../../utils/firebase';

export async function fromStorage(url: string) {
	const blob = await getBlob(ref(storage, url));
	return blob.text();
}