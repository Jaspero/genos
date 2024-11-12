import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('layouts', {
  name: 'Layouts',
  singularName: 'layout',
  module: 'pages',
  tableHeaders: [
    indexColumn(),
    {
      key: '/name',
      label: 'Name',
      sortable: true
    },
    {
      key: '/tags',
      label: 'Tags'
    },
    actionColumn((id) => ({
      duplicateStorage: [`page-configurations/layouts/${id}/`]
    }))
  ],
  initialSort: {key: 'name', direction: 'asc'}
});
