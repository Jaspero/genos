import {CREATED_ON} from './shared/created-on';

export const CONTACTS_MODULE = {
  id: 'contacts',
  name: 'Kontakti',
  authorization: {
    read: ['admin']
  },
  layout: {
    table: {
      hideImport: true,
      tableColumns: [
        CREATED_ON.column(),
        {
          key: '/name',
          label: 'Ime'
        },
        {
          key: '/email',
          label: 'Email'
        },
        {
          key: '/message',
          label: 'Poruka'
        }
      ]
    },
    overview: {
      toolbar: []
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      email: {type: 'string'},
      message: {type: 'string'},
      ...CREATED_ON.property
    }
  }
};
