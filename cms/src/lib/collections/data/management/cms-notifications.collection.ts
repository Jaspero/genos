import { indexPipe } from '$lib/column-pipes/index.pipe';
import { collections } from '../../collections';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '$lib/utils/firebase';
import { DateTime } from 'luxon';

collections.addCollection('cms-notifications', {
  name: 'Notifications',
  singularName: 'notification',
  module: 'management',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/content',
      label: 'Content'
    }
  ],
  add: false,
  defaultFilters: async ({ user }) => [
    {
      key: 'userId',
      operator: '==',
      value: user?.id
    }
  ],
  onTableLoad: async (data) => {
    await updateDoc(doc(db, data.token?.claims.role + 's', data.user?.id as string), {
      lastSeen: DateTime.now().toUTC().toISO()
    });
  }
});
