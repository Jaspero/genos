import type { Handle } from '@sveltejs/kit';
import { langFromPath } from '$lib/i18n/routes';

/** Croatian pages get <html lang="hr"> in the prerendered HTML (app.html defaults to "en"). */
export const handle: Handle = async ({ event, resolve }) => {
  const lang = langFromPath(event.url.pathname);

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      lang === 'hr' ? html.replace('<html lang="en">', '<html lang="hr">') : html
  });
};
