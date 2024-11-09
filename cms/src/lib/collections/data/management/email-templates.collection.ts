import {checkboxPipe} from '../../../column-pipes/checkbox.pipe';
import {datePipe} from '../../../column-pipes/date.pipe';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {sendSampleEmail} from '../../../send-sample-email/send-sample-email.store';
import {collections} from '../../collections';

collections.addCollection('email-templates', {
  name: 'Email Templates',
  singularName: 'email template',
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
    {
      key: '/active',
      label: 'Active',
      pipes: [checkboxPipe('pages', 'active')]
    },
    actionColumn(() => ({
      buttons: [
        {
          label: 'Send Sample Email',
          icon: 'email',
          action: (id) => sendSampleEmail.set({id})
        }
      ],
      links: []
    }))
  ],
  headerSlot: `<a class="border border-primary text-sm text-primary font-bold py-2 px-3 rounded hover:bg-primary hover:text-fg transition-all" href="/dashboard/management/email-template-layouts">Manage Layouts</a>`,
  initialSort: {key: 'createdOn', direction: 'desc'}
});
