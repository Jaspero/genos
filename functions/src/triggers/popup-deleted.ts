import {onDocumentDeleted} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';

export const popupDeleted = onDocumentDeleted({
	region: REGION,
	document: 'popups/{popupId}'
}, async event => {

	if (!event.data) {
		return;
	}

	const {docs} = await event.data.ref.collection('content').get();

	await Promise.all(
		docs.map(doc => doc.ref.delete())
	);
});