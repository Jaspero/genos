import type {Component, Editor} from 'grapesjs';
import type {PageBuilderForm} from '../types/page-builder-form.interface';

const createOption = (value: string, content: string) => ({
  type: 'option',
  content,
  attributes: {value}
});

const nameTrait = {name: 'name'};
const placeholderTrait = {name: 'placeholder'};
const requiredTrait = {type: 'checkbox', name: 'required'};
const idTrait = {name: 'id'};
const valueTrait = {name: 'value'};
const checkedTrait = {type: 'checkbox', name: 'checked'};
const minLengthTrait = {name: 'minlength', label: 'Min Length', type: 'number'};
const maxLengthTrait = {name: 'maxlength', label: 'Max Length', type: 'number'};
const patternTrait = {name: 'pattern', label: 'Pattern', type: 'text', changeProp: 1};
const titleTrait = {name: 'title', label: 'Title', type: 'text'};
const directiveSelectTrait = {name: 'directives', label: 'Directives', type: 'directives-select'};

export const TYPES = (editor: Editor, forms: PageBuilderForm[]) => [
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
        style: {},
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
              {value: 'gc-1', name: '1 Column'},
              {value: 'gc-2', name: '2 Columns'},
              {value: 'gc-3', name: '3 Columns'},
              {value: 'gc-4', name: '4 Columns'},
              {value: 'gc-5', name: '5 Columns'},
              {value: 'gc-6', name: '6 Columns'},
              {value: 'gc-7', name: '7 Columns'},
              {value: 'gc-8', name: '8 Columns'},
              {value: 'gc-9', name: '9 Columns'},
              {value: 'gc-10', name: '10 Columns'},
              {value: 'gc-11', name: '11 Columns'},
              {value: 'gc-12', name: '12 Columns'}
            ]
          },
          {
            type: 'select',
            name: 'column-span-tablet',
            label: 'Column span - Tablet',
            changeProp: 1,
            options: [
              {value: '', name: 'None'},
              {value: 'gc-sm-1', name: '1 Column'},
              {value: 'gc-sm-2', name: '2 Columns'},
              {value: 'gc-sm-3', name: '3 Columns'},
              {value: 'gc-sm-4', name: '4 Columns'},
              {value: 'gc-sm-5', name: '5 Columns'},
              {value: 'gc-sm-6', name: '6 Columns'},
              {value: 'gc-sm-7', name: '7 Columns'},
              {value: 'gc-sm-8', name: '8 Columns'},
              {value: 'gc-sm-9', name: '9 Columns'},
              {value: 'gc-sm-10', name: '10 Columns'},
              {value: 'gc-sm-11', name: '11 Columns'},
              {value: 'gc-sm-12', name: '12 Columns'}
            ]
          },
          {
            type: 'select',
            name: 'column-span-mobile',
            label: 'Column span - Mobile',
            changeProp: 1,
            options: [
              {value: '', name: 'None'},
              {value: 'gc-xs-1', name: '1 Column'},
              {value: 'gc-xs-2', name: '2 Columns'},
              {value: 'gc-xs-3', name: '3 Columns'},
              {value: 'gc-xs-4', name: '4 Columns'},
              {value: 'gc-xs-5', name: '5 Columns'},
              {value: 'gc-xs-6', name: '6 Columns'},
              {value: 'gc-xs-7', name: '7 Columns'},
              {value: 'gc-xs-8', name: '8 Columns'},
              {value: 'gc-xs-9', name: '9 Columns'},
              {value: 'gc-xs-10', name: '10 Columns'},
              {value: 'gc-xs-11', name: '11 Columns'},
              {value: 'gc-xs-12', name: '12 Columns'}
            ]
          },
          {
            type: 'select',
            name: 'column-start-desktop',
            label: 'Column start - Desktop',
            changeProp: 1,
            options: [
              {value: '', name: 'None'},
              {value: 'gcs-1', name: 'Column 1'},
              {value: 'gcs-2', name: 'Column 2'},
              {value: 'gcs-3', name: 'Column 3'},
              {value: 'gcs-4', name: 'Column 4'},
              {value: 'gcs-5', name: 'Column 5'},
              {value: 'gcs-6', name: 'Column 6'},
              {value: 'gcs-7', name: 'Column 7'},
              {value: 'gcs-8', name: 'Column 8'},
              {value: 'gcs-9', name: 'Column 9'},
              {value: 'gcs-10', name: 'Column 10'},
              {value: 'gcs-11', name: 'Column 11'},
              {value: 'gcs-12', name: 'Column 12'}
            ]
          },
          {
            type: 'select',
            name: 'column-start-tablet',
            label: 'Column start - Tablet',
            changeProp: 1,
            options: [
              {value: '', name: 'None'},
              {value: 'gcs-sm-1', name: 'Column 1'},
              {value: 'gcs-sm-2', name: 'Column 2'},
              {value: 'gcs-sm-3', name: 'Column 3'},
              {value: 'gcs-sm-4', name: 'Column 4'},
              {value: 'gcs-sm-5', name: 'Column 5'},
              {value: 'gcs-sm-6', name: 'Column 6'},
              {value: 'gcs-sm-7', name: 'Column 7'},
              {value: 'gcs-sm-8', name: 'Column 8'},
              {value: 'gcs-sm-9', name: 'Column 9'},
              {value: 'gcs-sm-10', name: 'Column 10'},
              {value: 'gcs-sm-11', name: 'Column 11'},
              {value: 'gcs-sm-12', name: 'Column 12'}
            ]
          },
          {
            type: 'select',
            name: 'column-start-mobile',
            label: 'Column start - Mobile',
            changeProp: 1,
            options: [
              {value: '', name: 'None'},
              {value: 'gcs-xs-1', name: 'Column 1'},
              {value: 'gcs-xs-2', name: 'Column 2'},
              {value: 'gcs-xs-3', name: 'Column 3'},
              {value: 'gcs-xs-4', name: 'Column 4'},
              {value: 'gcs-xs-5', name: 'Column 5'},
              {value: 'gcs-xs-6', name: 'Column 6'},
              {value: 'gcs-xs-7', name: 'Column 7'},
              {value: 'gcs-xs-8', name: 'Column 8'},
              {value: 'gcs-xs-9', name: 'Column 9'},
              {value: 'gcs-xs-10', name: 'Column 10'},
              {value: 'gcs-xs-11', name: 'Column 11'},
              {value: 'gcs-xs-12', name: 'Column 12'}
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
    id: 'intro',
    extends: 'image',
    model: {
      defaults: {
        traits: [
          {
            label: 'Source',
            name: 'src',
            type: 'asset-select',
            path: 'pages',
            types: ['image'],
            selectable: 'single'
          },
          {
            label: 'Alt Text',
            name: 'alt',
            type: 'text'
          }
        ],
        components: [
          {
            tagName: 'div',
            attributes: { class: 'intro-content' },
            components: []
          }
        ]
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
      initToolbar() {
        const model = this as Component;

        let toolbar = model.get('toolbar');

        if (!toolbar) {
          toolbar = [];
        }

        toolbar.push({
          label: `<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#fff"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,
          command: 'jp-info',
        });

        model.set('toolbar', toolbar);
      },
      defaults: {
        traits: [
          {
            label: 'Source',
            name: 'src',
            type: 'asset-select',
            path: 'pages',
            types: ['image'],
            selectable: 'single'
          },
          {
            label: 'Alt',
            name: 'alt'
          },
          {
            type: 'text',
            name: 'width',
            label: 'Width',
          },
          {
            type: 'text',
            name: 'height',
            label: 'Height',
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
            label: 'Link',
            name: 'href'
          },
          {
            label: 'Target',
            name: 'target',
            type: 'select',
            default: '_self',
            options: [
              {value: '_blank', name: 'Blank'},
              {value: '_self', name: 'Self'}
            ]
          },
          {
            type: 'select',
            label: 'Animation',
            name: 'animation',
            default: 'instanct',
            options: [
              {value: 'instant', name: 'instant'},
              {value: 'smooth', name: 'smooth'}
            ]
          }
        ]
      }
    }
  },
  {
    id: 'asset-download-link',
    extend: 'link',
    // isComponent: (el: HTMLAnchorElement) => true,
    model: {
      defaults: {
        type: 'asset-download-link',
        draggable: true,
        droppable: true,
        content: 'Link',
        attributes: {
          // target: '_blank',
          download: true
        },
        traits: [
          {
            label: 'Content',
            name: 'content',
            type: 'text',
            changeProp: 1
          },
          {
            label: 'Target',
            type: 'select',
            name: 'target',
            default: '_self',
            options: [
              {value: '_blank', name: 'Blank'},
              {value: '_self', name: 'Self'}
            ]
          },
          {
            label: 'Link',
            name: 'href',
            type: 'asset-select',
            path: 'pages',
            types: ['pdf'],
            selectable: 'single'
          }
        ]
      }
    },
    init() {
      this.on('change:content', this.updateContent);
    },
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
              {id: 'text', label: 'Text'},
              {id: 'email', label: 'Email'},
              {id: 'password', label: 'Password'},
              {id: 'url', label: 'URL'},
              {id: 'tel', label: 'Tel'}
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
        attributes: {type: 'checkbox'},
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
        attributes: {type: 'radio'},
        traits: [idTrait, nameTrait, valueTrait, requiredTrait, checkedTrait]
      }
    }
  },

  /**
   * Custom Components
   */
  {
    id: 'pb-forensics',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-FORENSICS',
    model: {
      defaults: {
        tagName: 'pb-forensics',
        cName: 'Forensics',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-epigenetics',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-EPIGENETICS',
    model: {
      defaults: {
        tagName: 'pb-epigenetics',
        cName: 'Epigenetics',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-services',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-SERVICES',
    model: {
      defaults: {
        tagName: 'pb-services',
        cName: 'Services',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-team',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-TEAM',
    model: {
      defaults: {
        tagName: 'pb-team',
        cName: 'Team',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-publications',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-PUBLICATIONS',
    model: {
      defaults: {
        tagName: 'pb-publications',
        cName: 'Publications',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-glycomics',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-GLYCOMICS',
    model: {
      defaults: {
        tagName: 'pb-glycomics',
        cName: 'Glycomics',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-price-list',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-PRICE-LIST',
    model: {
      defaults: {
        tagName: 'pb-price-list',
        cName: 'Price list',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-projects',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-PROJECTS',
    model: {
      defaults: {
        tagName: 'pb-projects',
        cName: 'Projects',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-navigation',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-NAVIGATION',
    model: {
      defaults: {
        tagName: 'pb-navigation',
        cName: 'Navigation',
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
    id: 'pb-hero-content-landing',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-HERO-CONTENT-LANDING',
    model: {
      defaults: {
        tagName: 'pb-hero-content-landing',
        cName: 'HeroContentLanding',
        draggable: true,
        droppable: false
      }
    }
  },
  {
    id: 'pb-mobile-menu',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-MOBILE-MENU',
    model: {
      defaults: {
        tagName: 'pb-mobile-menu',
        cName: 'Mobile Menu',
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
        cName: 'Submit',
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
        cName: 'Featured Products',
        traits: [
          {
            type: 'text',
            label: 'Sort Property',
            name: 'property',
            options: [
              {id: 'price', label: 'Price'},
              {id: 'name', label: 'Name'}
            ]
          },
          {
            type: 'select',
            label: 'Sort Direction',
            name: 'direction',
            options: [
              {id: 'asc', label: 'Ascending'},
              {id: 'desc', label: 'Descending'}
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
        cName: 'Products',
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
              {id: 'price', label: 'Price'},
              {id: 'name', label: 'Name'},
              {id: 'createdOn', label: 'Created On'}
            ]
          },
          {
            type: 'select',
            label: 'Sort Direction',
            name: 'direction',
            options: [
              {id: 'asc', label: 'Ascending'},
              {id: 'desc', label: 'Descending'}
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
        cName: 'Product Card',
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
  {
    id: 'pb-google-map',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-GOOGLE-MAP',
    model: {
      defaults: {
        tagName: 'pb-google-map',
        cName: 'Google Map',
        traits: [
          {
            type: 'address-lookup',
            label: 'Address',
            name: 'address'
          },
          {
            label: 'Zoom',
            name: 'mapZoom',
            type: 'number'
          },
          {
            label: 'Latitute',
            name: 'lat',
            type: 'number'
          },
          {
            label: 'Longitute',
            name: 'lng',
            type: 'number'
          }
        ]
      }
    }
  },
  {
    id: 'pb-image-gallery',
    isComponent: (el: HTMLElement) => el.tagName === 'PB-IMAGE-GALLERY',
    model: {
      defaults: {
        tagName: 'pb-image-gallery',
        traits: [
          {
            type: 'checkbox',
            label: 'Enable Pagination',
            name: 'enablePagination'
          },
          {
            type: 'checkbox',
            label: 'Slider Bar',
            name: 'sliderBar'
          },
          {
            type: 'checkbox',
            label: 'Auto Slide',
            name: 'autoSlide'
          },
          {
            type: 'number',
            label: 'Interval',
            name: 'interval'
          },
          {
            type: 'number',
            label: 'Column Count',
            name: 'columnCount'
          },
          {
            type: 'number',
            label: 'Column Count Tablet',
            name: 'columnCountTablet'
          },
          {
            type: 'number',
            label: 'Column Count Mobile',
            name: 'columnCountMobile'
          },
          {
            type: 'number',
            label: 'Gap X',
            name: 'gapX'
          },
          {
            type: 'number',
            label: 'Gap Y',
            name: 'gapY'
          },
          {
            type: 'checkbox',
            label: 'Enable Gallery',
            name: 'enableGallery'
          },
          {
            label: 'Source',
            name: 'images',
            type: 'asset-select',
            path: 'pages',
            types: ['image'],
            selectable: 'multiple'
          }
          /*{
            type: 'array',
            label: 'Images',
            name: 'images',
            items: [
              {
                type: 'object',
                properties: [
                  {
                    type: 'text',
                    label: 'Image Source',
                    name: 'src',
                  },
                  {
                    type: 'text',
                    label: 'Alt Text',
                    name: 'alt',
                  },
                ]
              }
            ]
          }*/
        ],
        attributes: {
          label: 'Submit',
          success: `Form submitted successfully!`,
          error: `There was an error submitting the form. Please try again later.`
        }
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
        cName: 'Blog',
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
              {id: 'Yes', label: 'Yes'},
              {id: 'No', label: 'No'}
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
        cName: 'Featured Blog',
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
