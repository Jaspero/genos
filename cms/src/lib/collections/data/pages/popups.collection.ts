import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('popups', {
  name: 'Popups',
  singularName: 'popup',
  module: 'pages',
  tableHeaders: [
    indexColumn(),
    {
      key: '/title',
      label: 'Title',
      sortable: true
    },
    {
      key: '/description',
      label: 'Description'
    },
    actionColumn((id) => ({
      duplicateSubCollections: ['content']
    }))
  ],
  initialSort: {key: 'title', direction: 'asc'}
});
