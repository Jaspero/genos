import {checkboxPipe} from '../../../column-pipes/checkbox.pipe';
import {datePipe} from '../../../column-pipes/date.pipe';
import {releaseStatusPipe} from '../../../column-pipes/release-status.pipe';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {CONFIG} from '../../../consts/config.const';
import {collections} from '../../collections';

collections.addCollection('pages', {
  name: 'Pages',
  singularName: 'page',
  module: 'pages',
  tableHeaders: [
    indexColumn(),
    {
      key: '/publicationDate',
      label: 'Publication Date',
      pipes: [datePipe],
      sortable: true
    },
    {
      key: '/title',
      label: 'Title',
      pipes: [
        (v: string, row: any) =>
          `<a target="_blank" title="Open page" style="text-decoration:underline;" href="${CONFIG.webUrl}/${row.url}">${v}</a>`
      ],
      exportPipes: [],
      sortable: true
    },
    {
      key: '/id',
      label: 'Active',
      pipes: [checkboxPipe('pages', 'active')]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      exportPipes: [],
      pipes: [releaseStatusPipe()]
    },
    actionColumn((id) => ({
      duplicateStorage: [`page-configurations/pages/${id}/`]
    }))
  ],
  initialSort: {key: 'publicationDate', direction: 'desc'}
});
