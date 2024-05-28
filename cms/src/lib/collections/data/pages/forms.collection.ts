import {actionsPipe} from '../../../column-pipes/actions.pipe';
import {indexPipe} from '../../../column-pipes/index.pipe';
import {collections} from '../../collections';

collections.addCollection('forms', {
  name: 'Forms',
  singularName: 'form',
  module: 'pages',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
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
  initialSort: {key: 'name', direction: 'asc'},
  editKey: 'name',
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
