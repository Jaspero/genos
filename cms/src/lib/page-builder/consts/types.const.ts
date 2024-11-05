import type { PageBuilderForm } from '../types/page-builder-form.interface';

const createOption = (value: string, content: string) => ({
  type: 'option',
  content,
  attributes: { value }
});

const nameTrait = { name: 'name' };
const placeholderTrait = { name: 'placeholder' };
const requiredTrait = { type: 'checkbox', name: 'required' };
const idTrait = { name: 'id' };
const valueTrait = { name: 'value' };
const checkedTrait = { type: 'checkbox', name: 'checked' };
const minLengthTrait = { name: 'minlength', label: 'Min Length', type: 'number' };
const maxLengthTrait = { name: 'maxlength', label: 'Max Length', type: 'number' };
const patternTrait = { name: 'pattern', label: 'Pattern', type: 'text', changeProp: 1 };
const titleTrait = { name: 'title', label: 'Title', type: 'text' };
const directiveSelectTrait = { name: 'directives', label: 'Directives', type: 'directives-select' };

export const TYPES = (forms: PageBuilderForm[]) => [
  /**
   * Grid
   */
  {
    id: 'column',
    extend: 'div',
    isComponent: (el: HTMLInputElement) => el.tagName === 'COLUMN' && el.dataset?.type == 'column',
    model: {
      defaults: {
        tagName: 'column',
        draggable: true,
        classes: ['gc-6'],
        attributes: {
          dataset: {
            type: 'column'
          }
        },
        traits: [
          {
            type: 'select',
            name: 'column-span-desktop',
            label: 'Column span - Desktop',
            changeProp: 1,
            options: [
              { value: 'gc-1', name: '1 Column' },
              { value: 'gc-2', name: '2 Columns' },
              { value: 'gc-3', name: '3 Columns' },
              { value: 'gc-4', name: '4 Columns' },
              { value: 'gc-5', name: '5 Columns' },
              { value: 'gc-6', name: '6 Columns' },
              { value: 'gc-7', name: '7 Columns' },
              { value: 'gc-8', name: '8 Columns' },
              { value: 'gc-9', name: '9 Columns' },
              { value: 'gc-10', name: '10 Columns' },
              { value: 'gc-11', name: '11 Columns' },
              { value: 'gc-12', name: '12 Columns' }
            ]
          },
          {
            type: 'select',
            name: 'column-span-tablet',
            label: 'Column span - Tablet',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gc-sm-1', name: '1 Column' },
              { value: 'gc-sm-2', name: '2 Columns' },
              { value: 'gc-sm-3', name: '3 Columns' },
              { value: 'gc-sm-4', name: '4 Columns' },
              { value: 'gc-sm-5', name: '5 Columns' },
              { value: 'gc-sm-6', name: '6 Columns' },
              { value: 'gc-sm-7', name: '7 Columns' },
              { value: 'gc-sm-8', name: '8 Columns' },
              { value: 'gc-sm-9', name: '9 Columns' },
              { value: 'gc-sm-10', name: '10 Columns' },
              { value: 'gc-sm-11', name: '11 Columns' },
              { value: 'gc-sm-12', name: '12 Columns' }
            ]
          },
          {
            type: 'select',
            name: 'column-span-mobile',
            label: 'Column span - Mobile',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gc-xs-1', name: '1 Column' },
              { value: 'gc-xs-2', name: '2 Columns' },
              { value: 'gc-xs-3', name: '3 Columns' },
              { value: 'gc-xs-4', name: '4 Columns' },
              { value: 'gc-xs-5', name: '5 Columns' },
              { value: 'gc-xs-6', name: '6 Columns' },
              { value: 'gc-xs-7', name: '7 Columns' },
              { value: 'gc-xs-8', name: '8 Columns' },
              { value: 'gc-xs-9', name: '9 Columns' },
              { value: 'gc-xs-10', name: '10 Columns' },
              { value: 'gc-xs-11', name: '11 Columns' },
              { value: 'gc-xs-12', name: '12 Columns' }
            ]
          },
          {
            type: 'select',
            name: 'column-start-desktop',
            label: 'Column start - Desktop',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gcs-1', name: 'Column 1' },
              { value: 'gcs-2', name: 'Column 2' },
              { value: 'gcs-3', name: 'Column 3' },
              { value: 'gcs-4', name: 'Column 4' },
              { value: 'gcs-5', name: 'Column 5' },
              { value: 'gcs-6', name: 'Column 6' },
              { value: 'gcs-7', name: 'Column 7' },
              { value: 'gcs-8', name: 'Column 8' },
              { value: 'gcs-9', name: 'Column 9' },
              { value: 'gcs-10', name: 'Column 10' },
              { value: 'gcs-11', name: 'Column 11' },
              { value: 'gcs-12', name: 'Column 12' }
            ]
          },
          {
            type: 'select',
            name: 'column-start-tablet',
            label: 'Column start - Tablet',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gcs-sm-1', name: 'Column 1' },
              { value: 'gcs-sm-2', name: 'Column 2' },
              { value: 'gcs-sm-3', name: 'Column 3' },
              { value: 'gcs-sm-4', name: 'Column 4' },
              { value: 'gcs-sm-5', name: 'Column 5' },
              { value: 'gcs-sm-6', name: 'Column 6' },
              { value: 'gcs-sm-7', name: 'Column 7' },
              { value: 'gcs-sm-8', name: 'Column 8' },
              { value: 'gcs-sm-9', name: 'Column 9' },
              { value: 'gcs-sm-10', name: 'Column 10' },
              { value: 'gcs-sm-11', name: 'Column 11' },
              { value: 'gcs-sm-12', name: 'Column 12' }
            ]
          },
          {
            type: 'select',
            name: 'column-start-mobile',
            label: 'Column start - Mobile',
            changeProp: 1,
            options: [
              { value: '', name: 'None' },
              { value: 'gcs-xs-1', name: 'Column 1' },
              { value: 'gcs-xs-2', name: 'Column 2' },
              { value: 'gcs-xs-3', name: 'Column 3' },
              { value: 'gcs-xs-4', name: 'Column 4' },
              { value: 'gcs-xs-5', name: 'Column 5' },
              { value: 'gcs-xs-6', name: 'Column 6' },
              { value: 'gcs-xs-7', name: 'Column 7' },
              { value: 'gcs-xs-8', name: 'Column 8' },
              { value: 'gcs-xs-9', name: 'Column 9' },
              { value: 'gcs-xs-10', name: 'Column 10' },
              { value: 'gcs-xs-11', name: 'Column 11' },
              { value: 'gcs-xs-12', name: 'Column 12' }
            ]
          }
        ]
      }
    }
  },

  /**
   * Common
   */
  {
    id: 'header',
    extends: 'text',
    isComponent: (el: HTMLHeadingElement) => el.tagName === 'HEADER',
    model: {
      defaults: {
        type: 'header',
        tagName: 'header',
        classes: ['header'],
        traits: [directiveSelectTrait]
      }
    }
  },
  {
    id: 'nav',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'NAV',
    model: {
      defaults: {
        type: 'nav',
        tagName: 'nav',
        classes: ['nav'],
        traits: [directiveSelectTrait]
      }
    }
  },
  {
    id: 'section',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'SECTION',
    model: {
      defaults: {
        type: 'section',
        tagName: 'section',
        classes: ['section'],
        traits: [directiveSelectTrait]
      }
    }
  },
  {
    id: 'article',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'ARTICLE',
    model: {
      defaults: {
        type: 'article',
        tagName: 'article',
        classes: ['article'],
        traits: [directiveSelectTrait]
      }
    }
  },
  {
    id: 'aside',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'ASIDE',
    model: {
      defaults: {
        type: 'aside',
        tagName: 'aside',
        classes: ['aside'],
        traits: [directiveSelectTrait]
      }
    }
  },
  {
    id: 'div',
    extends: 'default',
    isComponent: (el: HTMLDivElement) => el.tagName === 'DIV',
    model: {
      defaults: {
        type: 'div',
        tagName: 'div',
        traits: [idTrait, titleTrait, directiveSelectTrait]
      }
    }
  },
  {
    id: 'footer',
    extends: 'text',
    isComponent: (el: HTMLDivElement) => el.tagName === 'FOOTER',
    model: {
      defaults: {
        type: 'footer',
        tagName: 'footer',
        classes: ['footer'],
        traits: [directiveSelectTrait]
      }
    }
  },
  {
    id: 'image',
    extends: 'image',
    model: {
      defaults: {
        traits: [
          {
            label: 'Source',
            name: 'src'
          },
          {
            label: 'Alt',
            name: 'alt'
          },
          directiveSelectTrait
        ]
      }
    }
  },
  {
    id: 'page-link',
    extend: 'link',
    isComponent: (el: HTMLAnchorElement) => el?.dataset?.pblink,
    model: {
      defaults: {
        type: 'page-link',
        draggable: true,
        droppable: true,
        content: 'Link',
        attributes: {
          'data-pblink': true
        },
        traits: [
          {
            label: 'Link',
            name: 'href'
          }
        ]
      }
    }
  },
  {
    id: 'anchor-link',
    extend: 'link',
    isComponent: (el: HTMLAnchorElement) => el?.dataset?.pbanchor,
    model: {
      defaults: {
        type: 'anchor-link',
        draggable: true,
        droppable: true,
        content: 'Link',
        attributes: {
          'data-pbanchor': true
        },
        traits: [
          {
            label: 'Target',
            name: 'href'
          },
          {
            type: 'select',
            label: 'Animation',
            name: 'animation',
            default: 'instanct',
            options: [
              { value: 'instant', name: 'instant' },
              { value: 'smooth', name: 'smooth' }
            ]
          }
        ]
      }
    }
  },

  /**
   * Forms
   */
  {
    id: 'label',
    isComponent: (el: HTMLElement) => el.tagName === 'LABEL',
    extend: 'text',
    model: {
      defaults: {
        tagName: 'label',
        components: 'Label',
        draggable: 'form, form *',
        droppable: (_: any, target: any) => !target.view.$el['0'].children.length,
        content: 'Label',
        classes: ['label']
      }
    }
  },
  {
    id: 'input',
    isComponent: (el: HTMLInputElement) =>
      el.tagName === 'INPUT' && ['email', 'text', 'password'].includes(el.type),
    model: {
      defaults: {
        tagName: 'input',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['input'],
        attributes: {
          type: 'text'
        },
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
          {
            type: 'select',
            name: 'type',
            label: 'Type',
            options: [
              { id: 'text', label: 'Text' },
              { id: 'email', label: 'Email' },
              { id: 'password', label: 'Password' },
              { id: 'url', label: 'URL' },
              { id: 'tel', label: 'Tel' }
            ]
          },
          minLengthTrait,
          maxLengthTrait,
          patternTrait
        ]
      }
    }
  },
  {
    id: 'number-input',
    isComponent: (el: HTMLInputElement) => el.tagName === 'INPUT' && el.type === 'number',
    model: {
      defaults: {
        tagName: 'input',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['input'],
        attributes: {
          type: 'number'
        },
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
          {
            label: 'Min',
            name: 'min',
            type: 'number'
          },
          {
            label: 'Max',
            name: 'max',
            type: 'number'
          },
          {
            label: 'Step',
            name: 'step',
            type: 'number'
          }
        ]
      }
    }
  },
  {
    id: 'textarea',
    isComponent: (el: HTMLElement) => el.tagName === 'TEXTAREA',
    model: {
      defaults: {
        tagName: 'textarea',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['textarea'],
        attributes: {
          rows: 10
        },
        traits: [
          nameTrait,
          placeholderTrait,
          requiredTrait,
          {
            type: 'number',
            name: 'rows',
            label: 'Rows'
          },
          minLengthTrait,
          maxLengthTrait,
          patternTrait
        ]
      }
    }
  },
  {
    id: 'option',
    isComponent: (el: HTMLElement) => el.tagName === 'OPTION',
    model: {
      defaults: {
        tagName: 'option',
        draggable: 'label, label *',
        droppable: false,
        layerable: false,
        highlightable: false
      }
    }
  },
  {
    id: 'select',
    isComponent: (el: HTMLElement) => el.tagName === 'SELECT',
    model: {
      defaults: {
        tagName: 'select',
        draggable: 'label, label *',
        droppable: false,
        highlightable: false,
        classes: ['select'],
        components: [createOption('opt1', 'Option 1'), createOption('opt2', 'Option 2')],
        traits: [
          nameTrait,
          {
            name: 'options',
            type: 'select-options'
          },
          requiredTrait
        ]
      }
    }
  },
  {
    id: 'checkbox',
    isComponent: (el: HTMLInputElement) => el.tagName === 'INPUT' && el.type == 'checkbox',
    model: {
      defaults: {
        type: 'checkbox',
        tagName: 'input',
        draggable: 'form, form *',
        copyable: false,
        classes: ['checkbox'],
        attributes: { type: 'checkbox' },
        traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait]
      }
    }
  },
  {
    id: 'radio',
    isComponent: (el: HTMLInputElement) => el.tagName === 'INPUT' && el.type == 'radio',
    model: {
      defaults: {
        type: 'radio',
        tagName: 'input',
        draggable: 'form, form *',
        classes: ['radio'],
        attributes: { type: 'radio' },
        traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait]
      }
    }
  },

  /**
   * Custom Components
   */
  {
    id: 'pb-mobile-menu',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-MOBILE-MENU',
    model: {
      defaults: {
        tagName: 'pb-mobile-menu',
        draggable: true,
        droppable: false,
        traits: [
          {
            type: 'text',
            label: 'Labels',
            name: 'labels'
          },
          {
            type: 'text',
            label: 'Links',
            name: 'links'
          }
        ]
      }
    }
  },
  {
    id: 'pb-submit',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-SUBMIT',
    model: {
      defaults: {
        tagName: 'pb-submit',
        draggable: 'form',
        droppable: false,
        traits: [
          {
            type: 'text',
            label: 'Label',
            name: 'label'
          },
          {
            type: 'select',
            label: 'Form Name',
            name: 'form',
            options: forms.map((form) => ({
              id: form.id,
              label: form.name
            }))
          },
          {
            type: 'text',
            label: 'Redirect',
            name: 'redirect'
          },
          {
            type: 'text',
            label: 'Success Notification',
            name: 'success'
          },
          {
            type: 'text',
            label: 'Error Notification',
            name: 'error'
          }
        ],
        attributes: {
          label: 'Submit',
          success: `Form submitted successfully!`,
          error: `There was an error submitting the form. Please try again later.`
        }
      }
    }
  },
  {
    id: 'pb-featured-products',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-FEATURED-PRODUCTS',
    model: {
      defaults: {
        tagName: 'pb-featured-products',
        traits: [
          {
            type: 'text',
            label: 'Sort Property',
            name: 'property',
            options: [
              { id: 'price', label: 'Price' },
              { id: 'name', label: 'Name' }
            ]
          },
          {
            type: 'select',
            label: 'Sort Direction',
            name: 'direction',
            options: [
              { id: 'asc', label: 'Ascending' },
              { id: 'desc', label: 'Descending' }
            ]
          }
        ]
      }
    }
  },
  {
    id: 'pb-products',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-PRODUCTS',
    model: {
      defaults: {
        tagName: 'pb-products',
        traits: [
          {
            type: 'number',
            label: 'Limit',
            name: 'limit'
          },
          {
            type: 'number',
            label: 'Min Price',
            name: 'minPrice'
          },
          {
            type: 'number',
            label: 'Max Price',
            name: 'maxPrice'
          },
          {
            type: 'select',
            label: 'Sort Property',
            name: 'property',
            options: [
              { id: 'price', label: 'Price' },
              { id: 'name', label: 'Name' },
              { id: 'createdOn', label: 'Created On' }
            ]
          },
          {
            type: 'select',
            label: 'Sort Direction',
            name: 'direction',
            options: [
              { id: 'asc', label: 'Ascending' },
              { id: 'desc', label: 'Descending' }
            ]
          },
          {
            type: 'document-lookup',
            label: 'Categories',
            name: 'initialCategories',
            collection: 'categories',
            singleSelect: false
          },
          {
            type: 'document-lookup',
            label: 'Tags',
            name: 'initialTags',
            collection: 'tags',
            singleSelect: false
          },
          {
            type: 'checkbox',
            label: 'Show Price Range Filter',
            name: 'showPriceRangeFilter'
          },
          {
            type: 'checkbox',
            label: 'Show Categories Filter',
            name: 'showCategoriesFilter'
          },
          {
            type: 'checkbox',
            label: 'Show Tags Filter',
            name: 'showTagsFilter'
          },
          {
            type: 'checkbox',
            label: 'Show Sort',
            name: 'showSort'
          },
          {
            type: 'checkbox',
            label: 'Show Search',
            name: 'showSearch'
          }
        ]
      }
    }
  },
  {
    id: 'pb-product-card',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-PRODUCT-CARD',
    model: {
      defaults: {
        tagName: 'pb-product-card',
        traits: [
          {
            type: 'document-lookup',
            label: 'Product',
            name: 'id',
            collection: 'products'
          }
        ]
      }
    }
  },

  /**
   * Blog
   */
  {
    id: 'pb-blog',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-BLOG',
    model: {
      defaults: {
        tagName: 'pb-blog',
        traits: [
          {
            type: 'document-lookup',
            name: 'category',
            collection: 'blog-categories',
            label: 'Category'
          },
          {
            type: 'document-lookup',
            name: 'author',
            collection: 'blog-authors',
            label: 'Author'
          },
          {
            type: 'text',
            name: 'pagesize',
            label: 'Page Size',
            default: '10'
          },
          {
            type: 'text',
            name: 'singlearticlelink',
            label: 'Link Prefix'
          },
          {
            type: 'select',
            name: 'showcategoryfilters',
            label: 'Show Category Filters',
            options: [
              { id: 'Yes', label: 'Yes' },
              { id: 'No', label: 'No' }
            ],
            default: 'Yes'
          },
          {
            type: 'text',
            name: 'loadMoreLabel',
            label: 'Load More Label'
          },
          {
            type: 'text',
            name: 'dateLabel',
            label: 'Date Label'
          },
          {
            type: 'text',
            name: 'allCategoriesLabel',
            label: 'All Categories Label'
          },
          {
            type: 'text',
            name: 'collectionPrefx',
            label: 'Collection Prefix'
          }
        ]
      }
    }
  },
  {
    id: 'pb-featured-blog-articles',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-FEATURED-BLOG-ARTICLES',
    model: {
      defaults: {
        tagName: 'pb-featured-blog-articles',
        traits: [
          {
            type: 'text',
            name: 'singlearticlelink',
            label: 'Link Prefix'
          },
          {
            type: 'text',
            name: 'linkLabel',
            label: 'Link Label'
          },
          {
            type: 'text',
            name: 'collectionPrefx',
            label: 'Collection Prefix'
          }
        ]
      }
    }
  }
];