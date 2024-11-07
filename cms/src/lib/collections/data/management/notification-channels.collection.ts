import { capitalize } from '@jaspero/utils';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { actionsPipe } from '$lib/column-pipes/actions.pipe';
import { ALLOWED_ROLES } from '$lib/consts/allowed-roles.const';
import { getOptions } from '$lib/utils/get-options';

collections.addCollection('notification-channels', {
  name: 'Notification Channels',
  singularName: 'notification channel',
  module: 'management',
  editKey: 'name',
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
        name: 'name',
        required: true
      }
    },
    {
      component: 'jp-select',
      field: '/type',
      options: {
        label: 'Type',
        name: 'type',
        required: true,
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
        name: 'emails',
        required: true
      },
      hidden: {
        deps: ['/type'],
        check: (value: { type: string }) => value.type === 'email'
      }
    },
    {
      component: 'jp-select',
      field: '/emailTemplate',
      options: {
        label: 'Email Template',
        name: 'emailTemplate',
        options: await getOptions('email-templates')
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
        options: ALLOWED_ROLES.map((role) => ({ label: capitalize(role), value: role })),
        required: true
      },
      hidden: {
        deps: ['/type'],
        check: (value: { type: string }) => value.type === 'cms'
      }
    }
  ]
});
