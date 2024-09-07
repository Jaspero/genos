import { httpsCallable } from 'firebase/functions';
import { changeEmail } from '../../../change-email/change-email.store';
import { changePassword } from '../../../change-password/change-password.store';
import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { mailtoPipe } from '../../../column-pipes/mailto.pipe';
import { functions } from '../../../utils/firebase';
import { collections } from '../../collections';

collections.addCollection('admins', {
  name: 'Admins',
  singularName: 'admin',
  module: 'management',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/createdOn',
      label: 'Created On',
      pipes: [datePipe],
      sortable: true
    },
    {
      key: '/name',
      label: 'Name',
      sortable: true
    },
    {
      key: '/email',
      label: 'Email',
      sortable: true,
      pipes: [mailtoPipe()]
    },
    {
      key: 'id',
      label: '',
      pipes: [
        actionsPipe(() => ({
          actions: ['edit', 'delete'],
          buttons: [
            {
              label: 'Change Email',
              icon: 'email',
              action: (id) => changeEmail.set({ id, collection: 'admins' })
            },
            {
              label: 'Change Password',
              icon: 'lock',
              action: (id) => changePassword.set({ id, collection: 'admins' })
            }
          ],
          links: []
        }))
      ]
    }
  ],
  initialSort: { key: 'createdOn', direction: 'desc' },
  editKey: 'name',
  preSubmit: async (id, value) => {
    value.lastUpdatedOn = new Date().toISOString();
  },
  preCreate: async (id, value) => {
    value.createdOn = new Date().toISOString();
  },
  createMethod: async (collection, id, value) => {
    await httpsCallable(functions, 'createAdmin')({...value, role: 'admin'});
  },
  form: async (id?: string) => {
    return [
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
        component: 'jp-input',
        field: '/email',
        options: {
          label: 'Email',
          name: 'email',
          type: 'email',
          disabled: id !== 'new'
        }
      },
      ...(id === 'new'
        ? [
            {
              component: 'jp-input',
              field: '/password',
              options: {
                label: 'Password',
                name: 'password',
                type: 'password',
                hint: `You can leave this empty if the user will sign in with google.`
              }
            }
          ]
        : [])
    ];
  }
});
