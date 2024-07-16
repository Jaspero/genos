import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { mailtoPipe } from '../../../column-pipes/mailto.pipe';
import { changePassword } from '../../../change-password/change-password.store';
import { changeEmail } from '../../../change-email/change-email.store';
import {httpsCallable} from 'firebase/functions';
import {functions} from '../../../utils/firebase';

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
      key: '/firstName',
      label: 'First Name',
      sortable: true
    },
    {
      key: '/lastName',
      label: 'Last Name',
      sortable: true
    },
    {
      key: '/email',
      label: 'Email',
      sortable: true,
      pipes: [mailtoPipe()]
    },
    {
      key: '/phoneNumber',
      label: 'Phone Number'
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
              action: (id) => changeEmail.set({id, collection: 'admins'})
            },
            {
              label: 'Change Password',
              icon: 'lock',
              action: changePassword.set
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
    value.name = value.firstName + ' ' + value.lastName;
  },
  preCreate: async (id, value) => {
    value.createdOn = new Date().toISOString();
  },
  createMethod: async (collection, id, value) => {
    await httpsCallable(functions, 'createAdmin')(value)
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
      {
        component: 'jp-input',
        field: '/phoneNumber',
        options: {
          label: 'Phone Number',
          name: 'phoneNumber',
          type: 'tel',
          required: true
        }
      },
      ...id === 'new' ? [
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
      ] : [],
    ]
  }
});
