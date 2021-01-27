import {CREATED_ON} from './shared/created-on';
import {FORMAT_SEARCH} from './shared/format-search';

export const PUBLICATIONS_MODULE = {
  id: 'publications',
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
            '/authors',
            '/link',
            '/description',
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
          key: '/authors',
          label: 'Autori'
        },
        {
          key: '/link',
          label: 'Link',
          pipe: [
            'custom',
            'sanitize'
          ],
          pipeArguments: {
            0: '(value) => \`<a class="link" href="\${value}" target="_blank">\${value}</a>\`'
          }
        }
      ]
    }
  },
  schema: {
    properties: {
      id: {type: 'string'},
      title: {type: 'string'},
      authors: {type: 'string'},
      link: {type: 'string'},
      description: {type: 'string'},
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
    authors: {label: 'Autori'},
    link: {label: 'Link'},
    description: {
      label: 'Opis',
      component: {
        type: 'textarea'
      }
    }
  }
};
