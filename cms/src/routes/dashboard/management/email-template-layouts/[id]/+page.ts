import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'email-template-layouts';

  const items = [
    {
      component: 'jp-input',
      field: '/title',
      options: {
        label: 'Title',
        name: 'title',
        required: true
      }
    }
  ];

  if (id === 'new') {
    return {
      col,
      items,
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
    json: JSON.parse(jsonSnap!.data()!.content)
  };
}
