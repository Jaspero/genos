import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { getOptions } from '$lib/utils/get-options';
import { populateArrayPipe } from '$lib/column-pipes/populate-array.pipe';
import { quillFiled } from '$lib/form-fields/quill.field';

collections.addCollection('notifications', {
  name: 'Notifications',
  singularName: 'notification',
  module: 'management',
  tableHeaders: [
    {
      key: '/id',
      label: 'Number',
      pipes: [indexPipe]
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/channels',
      label: 'Channels',
      pipes: [populateArrayPipe('notification-channels', 'name')]
    }
  ],
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
