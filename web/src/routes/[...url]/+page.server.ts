import { storage } from '$lib/utils/firebase';
import { firestore, bucket } from '$lib/utils/firebase-admin';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const url = params.url.trim();

  const { docs } = await firestore
    .collection('pages')
    .where('url', '==', '/' + url)
    .where('active', '==', true)
    .limit(1)
    .get();

  const [doc] = docs;

  if (!doc) {
    return {};
  }

  const toLoad: any[] = [
     bucket.file(`page-configurations/pages/${doc.id}/content.html`).download(),
     bucket.file(`page-configurations/pages/${doc.id}/content.css`).download()
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

  const [htmlRef, styleRef, ...layoutRefs] = await Promise.all(toLoad);

  const content = [htmlRef, layoutRefs[0], layoutRefs[2]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, '');
  const style = [styleRef, layoutRefs[1], layoutRefs[3]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, '');

  return {
    ...data,
    content: `${content}<style>${style}</style>`
  };
};
