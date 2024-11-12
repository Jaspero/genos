import {datePipe} from '../../../column-pipes/date.pipe';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('email-template-layouts', {
  name: 'Email Template Layouts',
  singularName: 'email template layout',
  module: 'management',
  tableHeaders: [
    indexColumn(),
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe],
      sortable: true
    },
    {
      key: '/lastUpdatedOn',
      label: 'Last Updated On',
      pipes: [datePipe]
    },
    {
      key: '/title',
      label: 'Title',
      sortable: true
    },
    actionColumn()
  ],
  initialSort: {key: 'createdOn', direction: 'desc'}
});
