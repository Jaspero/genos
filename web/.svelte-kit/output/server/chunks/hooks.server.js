import { l as langFromPath } from "./routes.js";
const MAIN_IMAGE = /<img class="intro-bg" src="([^"]+)"[^>]*fetchpriority="high"/;
const handle = async ({ event, resolve }) => {
  const lang = langFromPath(event.url.pathname);
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      if (lang === "hr") {
        html = html.replace('<html lang="en">', '<html lang="hr">');
      }
      const image = html.match(MAIN_IMAGE);
      if (image) {
        html = html.replace(
          '<meta charset="utf-8" />',
          `<meta charset="utf-8" />
    <link rel="preload" as="image" href="${image[1]}" fetchpriority="high" />`
        );
      }
      return html;
    }
  });
};
export {
  handle
};
