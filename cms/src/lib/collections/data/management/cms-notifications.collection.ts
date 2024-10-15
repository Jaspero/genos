import { indexPipe } from '$lib/column-pipes/index.pipe';
import { collections } from '../../collections';

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
  hideFilters: true,
  filterOptions: async (data) => {
    return [
      {
        key: 'userId',
        operator: '==',
        value: data.user?.id
      }
    ];
  }
});
