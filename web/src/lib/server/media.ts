import { building } from '$app/environment';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';

/**
 * Where prerendered files are collected before the adapter copies them to the site (public/web),
 * after it has cleared the old build. Files written here are published with the pages.
 */
export const MEDIA_DIR = '.svelte-kit/output/prerendered/pages/media';
export const MEDIA_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/gif': 'gif'
};
export const MEDIA_EXTENSIONS: Record<string, string> = Object.fromEntries(
  Object.entries(MEDIA_TYPES).map(([type, ext]) => [ext, type])
);
const localCopies = new Map<string, Promise<string | null>>();

export function decodeEntities(value: string) {
  return value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}

/**
 * The intro photos live in Firebase Storage (firebasestorage.googleapis.com), which takes a few
 * hundred milliseconds to answer and needs its own connection, so the page's main image was late.
 * When the site is built, each intro photo of a page being built is copied next to the pages as
 * /media/<content hash>.<ext> (a new photo gets a new name, so the long image cache is safe).
 * Partial builds copy the photos of the pages they build. If the copy fails, the Storage URL is
 * kept, and if a copy is ever missing on the site the image falls back to the Storage URL.
 */
export function localCopy(src: string) {
  if (!building || !/^https:\/\/firebasestorage\.googleapis\.com\//.test(src)) {
    return Promise.resolve(null);
  }

  if (!localCopies.has(src)) {
    localCopies.set(
      src,
      (async () => {
        try {
          const response = await fetch(src);
          const ext = MEDIA_TYPES[(response.headers.get('content-type') || '').split(';')[0].trim()];

          if (!response.ok || !ext) {
            return null;
          }

          const data = Buffer.from(await response.arrayBuffer());
          const name = `${createHash('sha256').update(data).digest('hex').slice(0, 16)}.${ext}`;

          await mkdir(MEDIA_DIR, { recursive: true });
          await writeFile(`${MEDIA_DIR}/${name}`, data);

          return `/media/${name}`;
        } catch (e) {
          console.warn('Intro photo not copied, the Storage URL is kept:', src, e);
          return null;
        }
      })()
    );
  }

  return localCopies.get(src)!;
}

