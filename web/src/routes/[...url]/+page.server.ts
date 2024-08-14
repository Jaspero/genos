import { storage } from '$lib/utils/firebase';
import { firestore } from '$lib/utils/firebase-admin';
import { getBlob, ref } from 'firebase/storage';
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
    getBlob(ref(storage, `page-configurations/pages/${doc.id}/content.html`)),
    getBlob(ref(storage, `page-configurations/pages/${doc.id}/content.css`))
  ];

  const data = doc.data();

  if (data.header) {
    toLoad.push(
      getBlob(ref(storage, `page-configurations/layouts/${data.header}/content.html`)),
      getBlob(ref(storage, `page-configurations/layouts/${data.header}/content.css`))
    );
  }

  if (data.footer) {
    toLoad.push(
      getBlob(ref(storage, `page-configurations/layouts/${data.footer}/content.html`)),
      getBlob(ref(storage, `page-configurations/layouts/${data.footer}/content.css`))
    );
  }

  const [htmlRef, styleRef, ...layoutRefs] = await Promise.all(toLoad);

  const content = [htmlRef, layoutRefs[0], layoutRefs[2]].reduce((acc, cur) => {
    acc += cur.toString();
    return acc;
  }, '');
  const style = [styleRef, layoutRefs[1], layoutRefs[3]].reduce((acc, cur) => {
    acc += cur.toString();
    return acc;
  }, '');

  return {
    ...data,
    content: `${content}<style>${style}</style>`
  };
};
