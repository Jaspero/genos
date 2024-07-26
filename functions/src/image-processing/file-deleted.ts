import {onObjectDeleted} from 'firebase-functions/v2/storage';
import {basename, dirname, join} from 'path';
import {REGION} from '../shared/consts/region.const';
import {unpackGenerateImageString} from './utils/unpack-generate-image-string';
import {getStorage} from 'firebase-admin/storage';

export const fileDeleted = onObjectDeleted(
	{cpu: 2, concurrency: 1, region: REGION},
	async (event) => {
		const {bucket, name, contentType, metadata} = event.data;

		if (
			!contentType ||
			!contentType.startsWith('image/') ||
			!metadata ||
			!metadata['generate_1'] ||
			metadata.skipDelete
		) {
			return;
		}

		const fileName = basename(name);
		const dirName = dirname(name);

		const storage = getStorage().bucket(bucket);
		const lookUpName = (entry?: string) =>
			join(dirName, 'generated', (entry || '') + fileName);
		const webpLookUp = (entry?: string) =>
			lookUpName(entry).replace(/(.jpg|.png|.jpeg)/, '.webp');

		for (const key in metadata) {
			if (key.includes('generate_')) {
				const {
					filePrefix,
					webpVersion,
					height,
					width
				} = unpackGenerateImageString(metadata[key]);

				if (filePrefix || width || height) {
					try {
						await storage.file(lookUpName(filePrefix)).delete();
					} catch (e) { }
				}

				if (webpVersion) {
					try {
						await storage.file(webpLookUp(filePrefix)).delete();
					} catch (e) { }
				}
			}
		}
	}
);