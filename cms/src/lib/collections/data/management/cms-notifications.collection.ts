import {db} from '$lib/utils/firebase';
import {doc, updateDoc} from 'firebase/firestore';
import {DateTime} from 'luxon';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('cms-notifications', {
  name: 'Notifications',
  singularName: 'notification',
  module: 'management',
  tableHeaders: [
    indexColumn(),
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
  defaultFilters: async ({user}) => [
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
