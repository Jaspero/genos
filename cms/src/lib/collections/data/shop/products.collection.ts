import {checkboxPipe} from '../../../column-pipes/checkbox.pipe';
import {datePipe} from '../../../column-pipes/date.pipe';
import {populateArrayPipe} from '../../../column-pipes/populate-array.pipe';
import {populatePipe} from '../../../column-pipes/populate.pipe';
import {releaseStatusPipe} from '../../../column-pipes/release-status.pipe';
import {reviewStarsPipe} from '../../../column-pipes/review-stars.pipe';
import {yesNoPipe} from '../../../column-pipes/yes-no.pipe';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('products', {
  name: 'Products',
  singularName: 'product',
  module: 'shop',
  tableHeaders: [
    indexColumn(),
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/category',
      label: 'Category',
      pipes: [populatePipe('categories', 'name')]
    },
    {
      key: '/tags',
      label: 'Tag',
      pipes: [populateArrayPipe('tags', 'name')]
    },
    {
      key: '/active',
      label: 'Active',
      pipes: [checkboxPipe('products', 'active')],
      exportPipes: [yesNoPipe]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()],
      exportPipes: [datePipe]
    },
    {
      key: '/averageRating',
      label: 'Reviews',
      pipes: [reviewStarsPipe()],
      exportPipes: []
    },
    actionColumn((id) => ({
      duplicateStorage: [`page-configurations/pages/${id}/`]
    }))
  ],
  initialSort: {key: 'name', direction: 'asc'},
  editKey: 'name',
  idPrefix: 'pr'
});
