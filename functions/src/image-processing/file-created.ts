import {onObjectFinalized} from 'firebase-functions/v2/storage';
import {getStorage} from 'firebase-admin/storage';
import {unlink} from 'fs/promises';
import {tmpdir} from 'os';
import {basename, dirname, join} from 'path';
import * as sharp from 'sharp';
import {REGION} from '../shared/consts/region.const';
import {unpackGenerateImageString} from './utils/unpack-generate-image-string';

export const fileCreated = onObjectFinalized(
	{cpu: 2, concurrency: 1, region: REGION},
	async (event) => {

		const {bucket, name, contentType, metadata} = event.data;

		/**
		 * Skip if the file is already a thumb or is autogenerated
		 * or there aren't any meta files to generate
		 */
		if (
			!contentType ||
			!contentType.startsWith('image/') ||
			!metadata ||
			!metadata['generate_1'] ||
			metadata.generated
		) {
			return;
		}

		const fileName = basename(name);
		const dirName = dirname(name);

		/**
		 * Temporary main file download
		 */
		const fileTemp = join(tmpdir(), fileName);
		const toGenerate: any[] = [];
		const webpToGenerate: any[] = [];

		for (const key in metadata) {
			if (key.includes('generate_')) {
				const {
					filePrefix,
					height,
					width,
					webpVersion,
					folder
				} = unpackGenerateImageString(metadata[key]);
				const fName = (filePrefix || '') + fileName;
				const tmpDir = join(tmpdir(), fName);

				if (filePrefix || width || height) {
					toGenerate.push({
						tmpDir,
						fName,
						height,
						width,
						folder: folder || 'generated'
					});
				}

				if (webpVersion) {
					webpToGenerate.push({
						folder: folder || 'generated',
						fName: fName.replace(/(.jpg|.png|.jpeg)/i, '.webp'),
						source: tmpDir,
						destination: tmpDir.replace(/(.jpg|.png|.jpeg)/i, '.webp')
					});
				}
			}
		}

		const generateMetadata = {
			generated: 'true',
			source: fileName,
			moduleId: metadata.moduleId,
			documentId: metadata.documentId
		};

		const storage = getStorage().bucket(bucket);
		await storage.file(name).download({
			destination: fileTemp
		});

		await Promise.all(
			toGenerate.map(async file => {
				const buffer = await sharp(fileTemp)
					.resize(file.width || null, file.height || null, {fit: 'inside', background: 'white', withoutEnlargement: true})
					.withMetadata()
					.toBuffer();

				return sharp(buffer).toFile(file.tmpDir);
			})
		);

		if (webpToGenerate.length) {
			await Promise.all(
				webpToGenerate.map(async file => {
					const buffer = await sharp(file.source)
						.webp({lossless: true})
						.toBuffer();

					return sharp(buffer).toFile(file.destination);
				})
			);
		}

		await Promise.all([
			...toGenerate.map(file =>
				storage.upload(file.tmpDir, {
					metadata: {
						metadata: generateMetadata,
						contentType
					},
					destination: join(dirName, file.folder, file.fName)
				})
			),

			...webpToGenerate.map(file =>
				storage.upload(file.destination, {
					metadata: {
						metadata: generateMetadata,
						contentType: 'image/webp'
					},
					destination: join(dirName, file.folder, file.fName)
				})
			)
		]);

		await Promise.all(toGenerate.map(it => unlink(it.tmpDir)));
	}
);