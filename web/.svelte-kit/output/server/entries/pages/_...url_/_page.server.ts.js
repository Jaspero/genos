import { f as firestore, b as bucket } from "../../../chunks/firebase-admin.js";
import { r as redirect } from "../../../chunks/index.js";
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
  return {
    ...data,
    content: `${content}<style>${style}</style>`,
    scripts: await scriptRef.toString()
  };
};
export {
  entries,
  load
};
