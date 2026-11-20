import type { Handle } from '@sveltejs/kit';
import { langFromPath } from '$lib/i18n/routes';

// The intro photo marked as the page's main image by prerenderIntroImage in [...url]/+page.server.ts.
const MAIN_IMAGE = /<img class="intro-bg" src="([^"]+)"[^>]*fetchpriority="high"/;

/**
 * - Croatian pages get <html lang="hr"> in the prerendered HTML (app.html defaults to "en").
 * - The page's main image (the intro photo) is preloaded at the top of <head>, so the browser asks
 *   for it before the stylesheet and the scripts. It is added here rather than with <svelte:head>,
 *   which has to stay where Svelte put it.
 */
export const handle: Handle = async ({ event, resolve }) => {
  const lang = langFromPath(event.url.pathname);

  return resolve(event, {
    transformPageChunk: ({ html }) => {
      if (lang === 'hr') {
        html = html.replace('<html lang="en">', '<html lang="hr">');
      }

      const image = html.match(MAIN_IMAGE);

      if (image) {
        html = html.replace(
          '<meta charset="utf-8" />',
          `<meta charset="utf-8" />\n    <link rel="preload" as="image" href="${image[1]}" fetchpriority="high" />`
        );
      }

      return html;
    }
  });
};
