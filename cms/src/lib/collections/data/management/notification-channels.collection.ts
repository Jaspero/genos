import { capitalize } from '@jaspero/utils';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { actionsPipe } from '$lib/column-pipes/actions.pipe';
import { ALLOWED_ROLES } from '$lib/consts/allowed-roles.const';

collections.addCollection('notification-channels', {
  name: 'Notification Channels',
  singularName: 'notification channel',
  module: 'management',
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
      key: '/type',
      label: 'Type',
      pipes: [capitalize]
    },
    {
      key: '/emails',
      label: 'Emails'
    },
    {
      key: '/roles',
      label: 'Roles'
    },
    {
      key: '/id',
      label: '',
      pipes: [actionsPipe()]
    }
  ],
  form: async () => [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        label: 'Name',
        name: 'name'
      }
    },
    {
      component: 'jp-select',
      field: '/type',
      options: {
        label: 'Type',
        name: 'type',
        options: [
          { label: 'Email', value: 'email' },
          { label: 'CMS', value: 'cms' }
        ]
      }
    },
    {
      component: 'jp-chips',
      field: '/emails',
      options: {
        label: 'Emails',
        name: 'emails'
      },
      hidden: {
        deps: ['/type'],
        check: (value: { type: string }) => value.type === 'email'
      }
    },
    {
      component: 'jp-multiselect',
      field: '/roles',
      options: {
        label: 'Roles',
        name: 'roles',
        options: ALLOWED_ROLES.map((role) => ({ label: capitalize(role), value: role }))
      },
      hidden: {
        deps: ['/type'],
        check: (value: { type: string }) => value.type === 'cms'
      }
    }
  ]
});
