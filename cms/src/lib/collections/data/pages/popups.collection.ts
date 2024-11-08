import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('popups', {
  name: 'Popups',
  singularName: 'popup',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/title',
      label: 'Title',
      sortable: true
    },
    {
      key: '/description',
      label: 'Description'
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
  initialSort: { key: 'title', direction: 'asc' }
});
