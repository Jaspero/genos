import { checkboxPipe } from '../../../column-pipes/checkbox.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { populateArrayPipe } from '../../../column-pipes/populate-array.pipe';
import { populatePipe } from '../../../column-pipes/populate.pipe';
import { releaseStatusPipe } from '../../../column-pipes/release-status.pipe';
import { reviewStarsPipe } from '../../../column-pipes/review-stars.pipe';
import { collections } from '../../collections';

collections.addCollection('products', {
  name: 'Products',
  singularName: 'product',
  module: 'shop',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
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
      pipes: [checkboxPipe('products', 'active')]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()]
    },
    {
      key: '/averageRating',
      label: 'Reviews',
      pipes: [reviewStarsPipe()]
    }
  ],
  initialSort: { key: 'name', direction: 'asc' },
  editKey: 'name',
  idPrefix: 'pr'
});
