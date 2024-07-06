import { capitalize } from '@jaspero/utils';
import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { mailtoPipe } from '../../../column-pipes/mailto.pipe';
import { changePassword } from '../../../change-password/change-password.store';
import { changeEmail } from '../../../change-email/change-email.store';

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
      key: '/role',
      label: 'Role',
      pipes: [capitalize]
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
  initialSort: { key: 'createdOn', direction: 'desc' }
});
