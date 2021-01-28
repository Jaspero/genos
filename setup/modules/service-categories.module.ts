import {FORMAT_SEARCH} from './shared/format-search';

export const SERVICE_CATEGORIES_MODULE = {
  id: 'service-categories',
  name: 'Kategorije',
  authorization: {
    read: ['admin'],
    write: ['admin']
  },
  layout: {
    editTitleKey: 'title',
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
          fields: [
            '/name',
            '/id'
          ]
        },
      ]
    },
    table: {
      tableColumns: [
        {
          key: '/name',
          label: 'Name'
        },
        {
          key: '/id',
          label: 'URL'
        }
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      name: {type: 'string'},
      order: {type: 'number'}
    },
    required: [
      'name'
    ]
  },
  definitions: {
    id: {
      label: 'URL',
      hint: 'URL se kreira iz imena ako je ostavljen prazan',
      formatOnSave: FORMAT_SEARCH('name'),
      disableOn: 'edit',
    },
    name: {label: 'Ime'},
  }
};
