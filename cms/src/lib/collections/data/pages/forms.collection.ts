import {numberPipe} from '$lib/column-pipes/number.pipe';
import {getOptions} from '$lib/utils/get-options';
import {DateTime} from 'luxon';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('forms', {
  name: 'Forms',
  singularName: 'form',
  module: 'pages',
  tableHeaders: [
    indexColumn(),
    {
      key: '/name',
      label: 'Name',
      sortable: true
    },
    {
      key: '/description',
      label: 'Description'
    },
    {
      key: '/responses',
      label: 'Responses',
      pipes: [numberPipe]
    },
    actionColumn((id) => ({
      actions: ['duplicate', 'delete'],
      links: [
        {
          label: 'Edit',
          href: `forms/${id}`,
          icon: 'edit'
        },
        {
          label: 'Results',
          href: `forms/${id}/results`,
          icon: 'forum'
        },
        {
          label: 'Reporting',
          href: `forms/${id}/reporting`,
          icon: 'monitoring'
        }
      ]
    }))
  ],
  initialSort: {key: 'name', direction: 'asc'},
  editKey: 'name',
  preSubmit: async (id, value) => {
    value.lastUpdatedOn = DateTime.now().toUTC().toISO()
  },
  preCreate: async (id, value) => {
    value.responses = 0;
    value.createdOn = DateTime.now().toUTC().toISO()
  },
  form: async () => [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        label: 'Name',
        name: 'name',
        required: true
      }
    },
    {
      component: 'jp-multiselect',
      field: '/notifications',
      options: {
        name: 'notifications',
        label: 'Notifications',
        options: await getOptions('notifications', 'name')
      }
    },
    {
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Description',
        name: 'description'
      }
    },
    {
      component: 'landing-page-form-properties',
      field: '/properties'
    }
  ],
  idPrefix: 'pf'
});
