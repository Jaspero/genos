import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('sections', {
  name: 'Sections',
  singularName: 'section',
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
      key: '/category',
      label: 'Category'
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
  initialSort: { key: 'title', direction: 'asc' }
});
