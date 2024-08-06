import {onDocumentDeleted} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';
import {getAuth} from 'firebase-admin/auth';

export const adminDeleted = onDocumentDeleted({
	region: REGION,
	document: 'admins/{adminId}'
}, async event => {
	const ah = getAuth();
	await ah.deleteUser(event.data!.id);
});