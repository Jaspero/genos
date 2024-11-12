import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('templates', {
  name: 'Templates',
  singularName: 'template',
  module: 'pages',
  tableHeaders: [
    indexColumn(),
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
    actionColumn((id) => ({
      duplicateStorage: [`page-configurations/templates/${id}/`]
    }))
  ],
  initialSort: {key: 'title', direction: 'asc'}
});
