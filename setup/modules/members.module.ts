import {CREATED_ON} from './shared/created-on';
import {FORMAT_SEARCH} from './shared/format-search';

export const MEMBERS_MODULE = {
  id: 'members',
  name: 'Članovi',
  authorization: {
    read: ['admin'],
    write: ['admin']
  },
  layout: {
    editTitleKey: 'name',
    sort: {
      active: 'order',
      direction: 'asc'
    },
    sortModule: {
      sortKey: 'order',
      sortTitle: 'name'
    },
    instance: {
      segments: [
        {
          title: 'Sustav',
          fields: [
            '/id',
            '/createdOn'
          ]
        },
        {
          title: 'Informacije',
          fields: [
            '/name',
            '/title',
            '/shortBio',
            '/image',
            '/bio'
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        CREATED_ON.column(),
        {
          key: '/name',
          label: 'Name'
        },
        {
          key: '/title',
          label: 'Title'
        }
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      title: {type: 'string'},
      shortBio: {type: 'string'},
      image: {type: 'string'},
      bio: {type: 'string'},
      order: {type: 'number'},
      ...CREATED_ON.property
    }
  },
  definitions: {
    id: {
      label: 'URL',
      hint: 'URL se kreira iz imena ako je ostavljen prazan',
      formatOnSave: FORMAT_SEARCH('name'),
      disableOn: 'edit',
    },
    name: {label: 'Puno ime'},
    title: {label: 'Titula'},
    shortBio: {
      label: 'Kratka biografija',
      component: {
        type: 'textarea'
      }
    },
    bio: {
      label: 'Biografija',
      component: {
        type: 'tinymce'
      }
    },
    image: {
      label: 'Fotografija',
      component: {
        type: 'image'
      }
    },
    ...CREATED_ON.definition(),
  }
};
