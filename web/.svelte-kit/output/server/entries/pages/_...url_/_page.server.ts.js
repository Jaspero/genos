import { f as firestore, b as bucket } from "../../../chunks/firebase-admin.js";
import { r as redirect } from "../../../chunks/index.js";
import { l as langFromPath } from "../../../chunks/routes.js";
import { l as localCopy, d as decodeEntities } from "../../../chunks/media.js";
const FIELD_LABELS = {
  email: { en: "Email", hr: "E-pošta" },
  message: { en: "Message", hr: "Poruka" }
};
function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`));
  return m ? m[1] ?? m[2] ?? m[3] : null;
}
async function prerenderIntroImage(html) {
  const tags = html.match(/<pb-intro\b[^>]*>/g) ?? [];
  const copies = /* @__PURE__ */ new Map();
  for (const tag of tags) {
    const src = attr(tag, "src");
    if (src && !copies.has(src)) {
      copies.set(src, await localCopy(decodeEntities(src)));
    }
  }
  let first = true;
  const result = html.replace(/<pb-intro\b[^>]*>/g, (tag) => {
    const src = attr(tag, "src");
    if (!src) return tag;
    const alt = attr(tag, "alt") ?? "";
    const priority = first ? ' fetchpriority="high"' : ' loading="lazy"';
    const local = copies.get(src);
    const storageSrc = src.replace(/"/g, "&quot;");
    const fallback = local ? ` onerror="this.onerror=null;this.src=this.dataset.src" data-src="${storageSrc}"` : "";
    first = false;
    return `${tag}<img class="intro-bg" src="${local ?? storageSrc}"${fallback} alt="${alt.replace(/"/g, "&quot;")}"${priority}>`;
  });
  return result;
}
async function fixCmsHtml(source, lang) {
  const html = await prerenderIntroImage(source);
  const fixed = html.replace(
    /(<label\b[^>]*>)\s*Label\s*(<(?:input|textarea)\b[^>]*?\bname=("?)([\w-]+)\3)/g,
    (match, open, field, _q, name) => FIELD_LABELS[name] ? open + FIELD_LABELS[name][lang] + field : match
  ).replace(/<input(?![^>]*\bautocomplete=)([^>]*\btype=("?)email\2)/g, "<input autocomplete=email$1");
  return fixed;
}
const entries = async () => {
  const snapshot = await firestore.collection("pages").where("active", "==", true).select("url").get();
  const entries2 = snapshot.docs.map((doc) => doc.data().url).filter((url) => typeof url === "string").map((url) => url.trim()).filter((url) => url && url !== "/").map((url) => ({ url: url.replace(/^\/+/, "") }));
  entries2.push({ url: "home" });
  return entries2;
};
const load = async ({ params }) => {
  const rawUrl = params.url.trim();
  const url = rawUrl === "home" ? "" : rawUrl;
  const { docs } = await firestore.collection("pages").where("url", "==", "/" + url).where("active", "==", true).limit(1).get();
  const [doc] = docs;
  if (!doc) {
    return redirect(303, "/404");
  }
  const toLoad = [
    bucket.file(`page-configurations/pages/${doc.id}/content.html`).download(),
    bucket.file(`page-configurations/pages/${doc.id}/content.css`).download(),
    bucket.file(`page-configurations/pages/${doc.id}/content.js`).download()
  ];
  const data = doc.data();
  if (data.header) {
    toLoad.push(
      bucket.file(`page-configurations/layouts/${data.header}/content.html`).download(),
      bucket.file(`page-configurations/layouts/${data.header}/content.css`).download()
    );
  }
  if (data.footer) {
    toLoad.push(
      bucket.file(`page-configurations/layouts/${data.footer}/content.html`).download(),
      bucket.file(`page-configurations/layouts/${data.footer}/content.css`).download()
    );
  }
  const [htmlRef, styleRef, scriptRef, ...layoutRefs] = await Promise.all(toLoad);
  const content = [layoutRefs[0], htmlRef, layoutRefs[2]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, "");
  const style = [layoutRefs[1], styleRef, layoutRefs[3]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, "");
  const lang = langFromPath("/" + url) || "en";
  if (lang === "en" && data.meta?.title === "Kontakt") {
    data.meta = { ...data.meta, title: "Contact" };
  }
  if (lang === "en" && data.title === "Kontakt") {
    data.title = "Contact";
  }
  return {
    ...data,
    content: `${await fixCmsHtml(content, lang)}<style>${style}</style>`,
    scripts: await scriptRef.toString()
  };
};
export {
  entries,
  load
};
