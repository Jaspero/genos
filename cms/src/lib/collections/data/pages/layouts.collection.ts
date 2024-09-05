import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('layouts', {
  name: 'Layouts',
  singularName: 'layout',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/name',
      label: 'Name',
      sortable: true
    },
    {
      key: '/tags',
      label: 'Tags'
    },
    {
      key: '/id',
      label: '',
      pipes: [
        actionsPipe((id) => ({
          duplicateSubCollections: ['content']
        }))
      ]
    }
  ],
  initialSort: { key: 'name', direction: 'asc' }
});
