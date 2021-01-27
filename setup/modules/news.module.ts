import {CREATED_ON} from './shared/created-on';
import {FORMAT_SEARCH} from './shared/format-search';

export const NEWS_MODULE = {
  id: 'projects',
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
            '/subTitle',
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
          key: '/subTitle',
          label: 'Podnaslov'
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
      subTitle: {type: 'string'},
      image: {type: 'string'},
      excerpt: {type: 'string'},
      content: {type: 'string'},
    }
  },
  definitions: {
    id: {
      label: 'URL',
      hint: 'URL se kreira iz imena ako je ostavljen prazan',
      formatOnSave: FORMAT_SEARCH('name'),
      disableOn: 'edit',
    },
    ...CREATED_ON.definition(),
    title: {label: 'Naslov'},
    subTitle: {label: 'Podnaslov'},
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
        type: 'fb-tinymce'
      }
    }
  }
};
