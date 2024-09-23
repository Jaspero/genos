import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { checkboxPipe } from '../../../column-pipes/checkbox.pipe';
import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('email-template-layouts', {
  name: 'Email Template Layouts',
  singularName: 'email template layout',
  module: 'management',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
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
    {
      key: 'id',
      label: '',
      pipes: [actionsPipe()]
    }
  ],
  initialSort: { key: 'createdOn', direction: 'desc' }
});
