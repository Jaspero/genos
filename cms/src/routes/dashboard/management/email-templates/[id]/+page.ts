import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';

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
        pattern: '[a-z\\-]+'
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
