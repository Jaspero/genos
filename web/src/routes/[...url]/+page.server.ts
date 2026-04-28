import { firestore, bucket } from '$lib/utils/firebase-admin';
import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
  const snapshot = await firestore
    .collection('pages')
    .where('active', '==', true)
    .select('url')
    .get();

  const entries = snapshot.docs
    .map((doc) => doc.data().url as string)
    .filter((url) => typeof url === 'string')
    .map((url) => url.trim())
    .filter((url) => url && url !== '/')
    .map((url) => ({ url: url.replace(/^\/+/, '') }));

  // '/home' is a public route alias for the CMS homepage stored at '/'.
  entries.push({ url: 'home' });

  return entries;
};

export const load: PageServerLoad = async ({ params }) => {
  const rawUrl = params.url.trim();
  // The Firebase redirect sends '/' → '/home', but the CMS stores the homepage at URL '/'.
  // Map 'home' back to the root so the Firestore lookup succeeds.
  const url = rawUrl === 'home' ? '' : rawUrl;

  const { docs } = await firestore
    .collection('pages')
    .where('url', '==', '/' + url)
    .where('active', '==', true)
    .limit(1)
    .get();

  const [doc] = docs;

  if (!doc) {
    return redirect(303, '/404');
  }

  const toLoad: any[] = [
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
  }, '');
  const style = [layoutRefs[1], styleRef, layoutRefs[3]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, '');

  return {
    ...data,
    content: `${content}<style>${style}</style>`,
    scripts: await scriptRef.toString()
  };
};
