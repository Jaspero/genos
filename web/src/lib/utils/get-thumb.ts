import { CONFIG } from '../consts/config.const';

export function getThumb(url: string, thumb: string) {
  const temp = url.split('%2F');
  const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${CONFIG.storageBucketName}/o/`;

  return (
    baseUrl +
    'generated%2F' +
    thumb +
    (temp.length > 1 ? temp[temp.length - 1] : url.split(baseUrl)[1])
  );
}
