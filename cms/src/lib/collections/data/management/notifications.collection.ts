import { indexPipe } from '../../../column-pipes/index.pipe';
import { collections } from '../../collections';
import { getOptions } from '$lib/utils/get-options';

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
    {
      component: 'jp-ckeditor',
      field: '/content',
      options: {
        name: 'content',
        label: 'Content',
        required: true
      }
    },
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
