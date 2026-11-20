import { error } from '@sveltejs/kit';
import { readFile } from 'node:fs/promises';
import { MEDIA_DIR, MEDIA_EXTENSIONS } from '$lib/server/media';

/**
 * Intro photos copied into the build (see localCopy in [...url]/+page.server.ts). They are already
 * written next to the pages; this route only exists because the full build crawls the pages and
 * follows their image links, which would otherwise be taken for CMS pages.
 */
export const prerender = 'auto';

export async function GET({ params }) {
  const match = params.file.match(/^[0-9a-f]{16}\.([a-z]+)$/);
  const type = match && MEDIA_EXTENSIONS[match[1]];

  if (!type) {
    error(404);
  }

  try {
    return new Response(await readFile(`${MEDIA_DIR}/${params.file}`), {
      headers: { 'content-type': type }
    });
  } catch {
    error(404);
  }
}
