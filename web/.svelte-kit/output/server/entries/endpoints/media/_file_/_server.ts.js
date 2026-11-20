import { e as error } from "../../../../chunks/index.js";
import { readFile } from "node:fs/promises";
import { M as MEDIA_EXTENSIONS, a as MEDIA_DIR } from "../../../../chunks/media.js";
const prerender = "auto";
async function GET({ params }) {
  const match = params.file.match(/^[0-9a-f]{16}\.([a-z]+)$/);
  const type = match && MEDIA_EXTENSIONS[match[1]];
  if (!type) {
    error(404);
  }
  try {
    return new Response(await readFile(`${MEDIA_DIR}/${params.file}`), {
      headers: { "content-type": type }
    });
  } catch {
    error(404);
  }
}
export {
  GET,
  prerender
};
