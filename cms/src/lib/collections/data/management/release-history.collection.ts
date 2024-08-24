import { capitalize } from '@jaspero/utils';
import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';

collections.addCollection('release-history', {
  name: 'Release History',
  singularName: 'release history',
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
      key: '/status',
      label: 'Status',
      pipes: [capitalize]
    },
    {
      key: '/releasedOn',
      label: 'Released On',
      pipes: [datePipe],
      sortable: true
    }
  ],
  initialSort: { key: 'createdOn', direction: 'desc' },
  add: false
});
