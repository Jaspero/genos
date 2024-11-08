import { actionsPipe } from '$lib/column-pipes/actions.pipe';
import { indexPipe } from '$lib/column-pipes/index.pipe';
import { collections } from '../../collections';
import { getOptions } from '$lib/utils/get-options';
import { numberPipe } from '$lib/column-pipes/number.pipe';
import { DateTime } from 'luxon';

collections.addCollection('forms', {
  name: 'Forms',
  singularName: 'form',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
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
    {
      key: '/id',
      label: '',
      pipes: [
        actionsPipe((id) => ({
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
      ]
    }
  ],
  initialSort: { key: 'name', direction: 'asc' },
  editKey: 'name',
  preSubmit: async (id, value) => {
    value.lastUpdatedOn = DateTime.now().toUTC().toISO()
  },
  preCreate: async (id, value) => {
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
