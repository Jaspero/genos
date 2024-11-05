import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('templates', {
  name: 'Templates',
  singularName: 'template',
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
          duplicateStorage: [`page-configurations/templates/${id}/`]
        }))
      ]
    }
  ],
  initialSort: { key: 'title', direction: 'asc' }
});
