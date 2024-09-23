import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'email-templates';

  const items = [
    {
      component: 'jp-input',
      field: '/title',
      options: {
        label: 'Title',
        name: 'title',
        required: true
      }
    },
    {
      component: 'jp-input',
      field: '/subject',
      options: {
        label: 'Subject',
        name: 'subject',
        required: true
      }
    },
    {
      component: 'jp-input',
      field: '/id',
      options: {
        label: 'ID',
        name: 'id',
        pattern: '[a-z\\-]+',
        required: true
      }
    }
  ];

  const layoutSnap = await getDocs(
    collection(db, 'email-template-layouts')
  );

  const layouts = await Promise.all(
    layoutSnap.docs.map(async (d) => {
      const data = d.data();

      const jsonSnap = await getDoc(doc(db, 'email-template-layouts', d.id, 'content', 'json'));

      return {
        id: d.id,
        title: data.title,
        json: JSON.parse(jsonSnap.data()?.content || '{}')
      };
    })
  );

  if (id === 'new') {
    return {
      col,
      items,
      layouts,
      value: {}
    };
  }

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, id)),
    getDoc(doc(db, col, id, 'content', 'json'))
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return {
    snap,
    col,
    items,
    value,
    layouts,
    json: JSON.parse(jsonSnap!.data()!.content)
  };
}
