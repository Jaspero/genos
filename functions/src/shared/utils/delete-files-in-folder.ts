import {getStorage} from 'firebase-admin/storage';

export async function deleteFilesInFolder(folderPath: string) {
  const bucket = getStorage().bucket();

  await bucket.deleteFiles({
    autoPaginate: true,
    prefix: folderPath,
  });
}
