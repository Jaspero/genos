import {populateArrayPipe} from '$lib/column-pipes/populate-array.pipe';
import {quillFiled} from '$lib/form-fields/quill.field';
import {getOptions} from '$lib/utils/get-options';
import {DateTime} from 'luxon';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {collections} from '../../collections';

collections.addCollection('notifications', {
  name: 'Notifications',
  singularName: 'notification',
  module: 'management',
  editKey: 'name',
  tableHeaders: [
    indexColumn(),
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/channels',
      label: 'Channels',
      pipes: [populateArrayPipe('notification-channels', 'name')]
    },
    actionColumn()
  ],
  preSubmit: async (id, value) => {
    value.lastUpdatedOn = DateTime.now().toUTC().toISO()
  },
  preCreate: async (id, value) => {
    value.createdOn = DateTime.now().toUTC().toISO()
  },
  form: async () => [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        name: 'name',
        label: 'Name',
        required: true
      }
    },
    quillFiled('notifications', 'content', 'Content'),
    {
      component: 'jp-multiselect',
      field: '/channels',
      options: {
        name: 'channels',
        label: 'Channels',
        options: await getOptions('notification-channels', 'name')
      }
    }
  ]
});
