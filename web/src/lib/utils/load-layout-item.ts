import {bucket} from './firebase-admin';

export async function loadLayoutItem(id: string) {

	if (!id) {
		return '';
	}

	const data = await Promise.all([
		bucket.file(`page-configurations/layouts/${id}/content.html`).download(),
		bucket.file(`page-configurations/layouts/${id}/content.css`).download()
	]);

	return `${data[0].toString()}<style>${data[1].toString()}</style>`;
}
