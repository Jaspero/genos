import { capitalize } from '@jaspero/utils';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { dateTimePipe } from '../../../column-pipes/date-time.pipe';

collections.addCollection('releases', {
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
      pipes: [dateTimePipe]
    },
    {
      key: '/status',
      label: 'Status',
      pipes: [capitalize]
    },
    {
      key: '/releasedOn',
      label: 'Released On',
      pipes: [dateTimePipe]
    }
  ],
  initialSort: { key: 'createdOn', direction: 'desc' },
  add: false
});
