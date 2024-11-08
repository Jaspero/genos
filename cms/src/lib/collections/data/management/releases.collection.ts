import { capitalize } from '@jaspero/utils';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { dateTimePipe } from '../../../column-pipes/date-time.pipe';
import {indexColumn} from '../../../columns/index.column';

collections.addCollection('releases', {
  name: 'Release History',
  singularName: 'release history',
  module: 'management',
  tableHeaders: [
    indexColumn(),
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
