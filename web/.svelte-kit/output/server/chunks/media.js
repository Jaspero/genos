import { b as building } from "./environment.js";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
const MEDIA_DIR = ".svelte-kit/output/prerendered/pages/media";
const MEDIA_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/avif": "avif",
  "image/gif": "gif"
};
const MEDIA_EXTENSIONS = Object.fromEntries(
  Object.entries(MEDIA_TYPES).map(([type, ext]) => [ext, type])
);
const localCopies = /* @__PURE__ */ new Map();
function decodeEntities(value) {
  return value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
}
function localCopy(src) {
  if (!building || !/^https:\/\/firebasestorage\.googleapis\.com\//.test(src)) {
    return Promise.resolve(null);
  }
  if (!localCopies.has(src)) {
    localCopies.set(
      src,
      (async () => {
        try {
          const response = await fetch(src);
          const ext = MEDIA_TYPES[(response.headers.get("content-type") || "").split(";")[0].trim()];
          if (!response.ok || !ext) {
            return null;
          }
          const data = Buffer.from(await response.arrayBuffer());
          const name = `${createHash("sha256").update(data).digest("hex").slice(0, 16)}.${ext}`;
          await mkdir(MEDIA_DIR, { recursive: true });
          await writeFile(`${MEDIA_DIR}/${name}`, data);
          return `/media/${name}`;
        } catch (e) {
          console.warn("Intro photo not copied, the Storage URL is kept:", src, e);
          return null;
        }
      })()
    );
  }
  return localCopies.get(src);
}
export {
  MEDIA_EXTENSIONS as M,
  MEDIA_DIR as a,
  decodeEntities as d,
  localCopy as l
};
