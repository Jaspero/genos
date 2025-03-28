import {DateTime} from 'luxon';
import {checkboxPipe} from '../../../column-pipes/checkbox.pipe';
import {datePipe} from '../../../column-pipes/date.pipe';
import {populatePipe} from '../../../column-pipes/populate.pipe';
import {releaseStatusPipe} from '../../../column-pipes/release-status.pipe';
import {yesNoPipe} from '../../../column-pipes/yes-no.pipe';
import {actionColumn} from '../../../columns/action.column';
import {indexColumn} from '../../../columns/index.column';
import {META_FORM_FIELDS} from '../../../consts/meta.form-fields';
import {quillFiled} from '../../../form-fields/quill.field';
import type {SelectOptions} from '../../../interfaces/select-options.interface';
import {BucketImageService} from '../../../services/image.service';
import {generateSlug} from '../../../utils/generate-slug';
import {getOptions} from '../../../utils/get-options';
import {collections} from '../../collections';

collections.addCollection('blog-articles', {
  name: 'Articles',
  singularName: 'article',
  module: 'blog',
  tableHeaders: [
    indexColumn(),
    {
      key: '/publicationDate',
      label: 'Publication Date',
      pipes: [datePipe]
    },
    {
      key: '/title',
      label: 'Title'
    },
    {
      key: '/category',
      label: 'Category',
      pipes: [populatePipe('blog-categories', 'name')]
    },
    {
      key: '/author',
      label: 'Author',
      pipes: [populatePipe('blog-authors', 'name')]
    },
    {
      key: '/active',
      label: 'Active',
      pipes: [checkboxPipe('blog-articles', 'active')],
      exportPipes: [yesNoPipe]
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()],
      exportPipes: [datePipe]
    },
    actionColumn((id) => ({
      actions: ['duplicate', 'delete'],
      links: [
        {
          label: 'Edit',
          href: `blog-articles/${id}`,
          icon: 'edit'
        },
        {
          label: 'Comments',
          href: `blog-articles/${id}/comments`,
          icon: 'forum'
        },
        {
          label: 'Reporting',
          href: `blog-articles/${id}/reporting`,
          icon: 'monitoring'
        }
      ]
    }))
  ],
  initialSort: {key: 'publicationDate', direction: 'desc'},
  filterOperators: {
    publicationDateStart: {
      operator: '>=',
      key: 'publicationDate'
    },
    publicationDateEnd: {
      operator: '<=',
      key: 'publicationDate'
    }
  },
  filterOptions: async () => {
    const authors: SelectOptions = [{label: 'Any', value: ''}];
    const categories: SelectOptions = [{label: 'Any', value: ''}];

    const items = [
      {
        component: 'jp-select',
        field: '/author',
        options: {
          label: 'Author',
          name: 'author',
          options: authors
        }
      },
      {
        component: 'jp-select',
        field: '/category',
        options: {
          label: 'Category',
          name: 'category',
          options: categories
        }
      },
      {
        component: 'jp-datepicker',
        field: '/publicationDateStart',
        options: {
          label: 'Publication Date Start',
          returnFormat: 'iso'
        }
      },
      {
        component: 'jp-datepicker',
        field: '/publicationDateEnd',
        options: {
          label: 'Publication Date End',
          returnFormat: 'iso'
        }
      }
    ];

    const datasets = await Promise.all([
      getOptions('blog-authors', 'name'),
      getOptions('blog-categories', 'name')
    ]);

    authors.push(...datasets[0]);
    categories.push(...datasets[1]);

    return items;
  },
  editKey: 'title',
  form: async () => {
    const authors: SelectOptions = [];
    const categories: SelectOptions = [];
    const col = 'blog-articles';
    const imageService = new BucketImageService();

    imageService.prefix = col + '/';
    imageService.metadata = [
      {
        folder: col + '/',
        width: 1080
      },
      {
        height: 1000,
        width: 1000,
        filePrefix: 'thumb_m_',
        folder: '../../thumbs'
      },
      {
        width: 500,
        height: 500,
        filePrefix: 'thumb_s_',
        folder: '../../thumbs'
      }
    ];

    const items = [
      {
        component: 'jp-input',
        field: '/title',
        options: {
          label: 'Title',
          name: 'title',
          required: true
        }
      },
      {
        component: 'jp-input',
        field: '/url',
        options: {
          label: 'Url',
          name: 'url',
          hint: 'Generated from title if left empty.',
          pattern: '[a-zA-Z0-9\\-_]+',
          minlength: 3,
          patternValidationMessage: `Only letters, numbers, '-' and '_' are valid in the URL.`
        }
      },
      {
        component: 'jp-select',
        field: '/author',
        options: {
          label: 'Author',
          name: 'author',
          options: authors,
          required: true
        }
      },
      {
        component: 'jp-select',
        field: '/category',
        options: {
          label: 'Category',
          name: 'category',
          options: categories,
          required: true
        }
      },
      {
        component: 'jp-datepicker',
        field: '/publicationDate',
        options: {
          label: 'Publication Date',
          returnFormat: 'iso'
        }
      },
      {
        component: 'jp-file-upload',
        field: '/image',
        options: {
          name: 'featuredImage',
          label: 'Featured Image',
          service: imageService
        }
      },
      {
        component: 'jp-input',
        field: '/imageAlt',
        options: {
          label: 'Featured Image Alternative Description',
          name: 'imageAlt'
        }
      },
      {
        component: 'jp-textarea',
        field: '/description',
        options: {
          label: 'Short description',
          name: 'shortDescription'
        }
      },
      ...META_FORM_FIELDS(col),
      quillFiled(col, 'content', 'Content')
    ];

    const datasets = await Promise.all([
      getOptions('blog-authors', 'name'),
      getOptions('blog-categories', 'name')
    ]);

    authors.push(...datasets[0]);
    categories.push(...datasets[1]);

    return items;
  },
  preSubmit: async (id, value) => {
    value.lastUpdatedOn = DateTime.now().toUTC().toISO();
  },
  preCreate: async (id, value) => {
    value.active = false;
    value.url = value.url || generateSlug(value.title);
    value.publicationDate = value.publicationDate || DateTime.now().toUTC().toISO();
    value.createdOn = DateTime.now().toUTC().toISO();
  },
  idPrefix: 'bar'
});
