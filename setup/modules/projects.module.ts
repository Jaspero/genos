import {CREATED_ON} from './shared/created-on';
import {FORMAT_SEARCH} from './shared/format-search';

export const PROJECTS_MODULE = {
  id: 'projects',
  name: 'Projekti',
  authorization: {
    read: ['admin'],
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
    sort: CREATED_ON.sort,
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
            '/title',
            '/image',
            '/excerpt',
            '/content',
          ]
        }
      ]
    },
    table: {
      tableColumns: [
        CREATED_ON.column(),
        {
          key: '/title',
          label: 'Naslov'
        },
        {
          key: '/excerpt',
          label: 'Opis'
        }
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      image: {type: 'string'},
      excerpt: {type: 'string'},
      content: {type: 'string'},
      ...CREATED_ON.property
    },
    required: [
      'title'
    ]
  },
  definitions: {
    id: {
      label: 'URL',
      hint: 'URL se kreira iz naslova ako je ostavljen prazan',
      formatOnSave: FORMAT_SEARCH(),
      disableOn: 'edit',
    },
    title: {label: 'Naslov'},
    image: {
      label: 'Slika',
      component: {
        type: 'image'
      }
    },
    excerpt: {
      label: 'Opis',
      component: {
        type: 'textarea'
      }
    },
    content: {
      label: 'Sadržaj',
      component: {
        type: 'tinymce'
      }
    },
    ...CREATED_ON.definition(),
  }
};
