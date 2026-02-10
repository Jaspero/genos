import { f as firestore, b as bucket } from "../../../chunks/firebase-admin.js";
import { r as redirect } from "../../../chunks/index.js";
const load = async ({ params }) => {
  const url = params.url.trim();
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
  load
};
