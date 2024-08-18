import {onDocumentWritten} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';

export const blogArticlesWrite = onDocumentWritten({
	region: REGION,
	document: 'blog-articles/{release}',
}, async event => {
	
});