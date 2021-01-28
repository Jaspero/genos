import {CREATED_ON} from './shared/created-on';
import {FORMAT_SEARCH} from './shared/format-search';

const CATEGORY_DEFINITION = {
  category: {
    label: 'Kategorija',
    component: {
      type: 'select',
      configuration: {
        populate: {
          collection: 'service-categories'
        }
      }
    }
  }
};

export const SERVICES_MODULE = {
  id: 'services',
  name: 'Usluge',
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
            '/createdOn',
            '/category'
          ]
        },
        {
          title: 'Informacije',
          fields: [
            '/title',
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
          key: '/category',
          label: 'Kategorija',
          populate: {
            collection: 'service-categories'
          }
        }
      ]
    },
    filterModule: {
      schema: {
        properties: {
          category: {type: 'string'}
        }
      },
      definitions: {
        ...CATEGORY_DEFINITION
      },
      persist: true,
      segments: [{
        type: 'empty',
        fields: ['/category']
      }]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      category: {type: 'string'},
      content: {type: 'string'},
      ...CREATED_ON.property
    },
    required: [
      'title',
      'category'
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
    content: {
      label: 'Sadržaj',
      component: {
        type: 'tinymce'
      }
    },
    ...CATEGORY_DEFINITION,
    ...CREATED_ON.definition(),
  }
};
