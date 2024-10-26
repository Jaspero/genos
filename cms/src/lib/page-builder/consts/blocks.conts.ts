import type { PageBuilderForm } from '../types/page-builder-form.interface';
import type { Popup } from '../types/popup.interface';
import { TYPES } from './types.const';

export const BLOCKS = (forms: PageBuilderForm[], popups?: Popup[]) => {
  const typeMap = TYPES(forms).reduce((acc: any, { id, ...dt }) => {
    const { tagName, ...data } = dt.model.defaults;

    acc[id] = {
      type: tagName,
      tagName,
      ...data
    };

    return acc;
  }, {});

  return [
    {
      id: 'heading',
      label: 'Heading',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M420-160v-520H200v-120h560v120H540v520H420Z"/></svg>`,
      category: 'Content',
      select: true,
      content: {
        type: 'text',
        tagName: 'h2',
        content: 'This is a heading',
        classes: ['h2'],
        traits: [
          {
            type: 'select',
            name: 'tagName',
            label: 'Type',
            changeProp: 1,
            options: [
              { value: 'h1', name: 'Heading 1' },
              { value: 'h2', name: 'Heading 2' },
              { value: 'h3', name: 'Heading 3' },
              { value: 'h4', name: 'Heading 4' },
              { value: 'h5', name: 'Heading 5' },
              { value: 'h6', name: 'Heading 6' }
            ]
          }
        ]
      }
    },
    {
      id: 'paragraph',
      label: 'Paragraph',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M120-240v-80h480v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`,
      category: 'Content',
      select: true,
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</p>`
    },
    {
      id: 'ordered-list',
      label: 'Ordered List',
      category: 'Content',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style="width: 100%; height: 48px"><path d="M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z"/></svg>`,
      select: true,
      content: `<ol><li>List Item</li><li>List Item</li><li>List Item</li></ol>`
    },
    {
      id: 'unordered-list',
      label: 'Unordered List',
      category: 'Content',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style="width: 100%; height: 48px"><path d="M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm0-240q-33 0-56.5-23.5T120-720q0-33 23.5-56.5T200-800q33 0 56.5 23.5T280-720q0 33-23.5 56.5T200-640Z"/></svg>`,
      select: true,
      content: `<ul><li>List Item</li><li>List Item</li><li>List Item</li></ul>`
    },
    {
      id: 'page-link',
      label: 'Page Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`,
      category: 'Content',
      content: typeMap['page-link']
    },
    {
      id: 'anchor-link',
      label: 'Anchor Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`,
      category: 'Content',
      content: typeMap['anchor-link']
    },
    {
      id: 'link',
      label: 'Link',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>`,
      category: 'Content',
      content: {
        type: 'link',
        content: 'Call to action',
        style: {},
        droppable: true
      }
    },
    {
      id: 'grid',
      label: 'Grid',
      media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 48px"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H3V11H11V3ZM9 5H5V9H9V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H3V21H11V13ZM9 15H5V19H9V15Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H13V11H21V3ZM19 5H15V9H19V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 13H13V21H21V13ZM19 15H15V19H19V15Z" fill="black"/></svg>`,
      category: 'Layout',
      content: {
        tagName: 'div',
        classes: ['grid', 'grid-large'],
        name: 'Grid'
      }
    },
    {
      id: 'grid-small',
      label: 'Grid - Small',
      media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 48px"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H3V11H11V3ZM9 5H5V9H9V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H3V21H11V13ZM9 15H5V19H9V15Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H13V11H21V3ZM19 5H15V9H19V5Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M21 13H13V21H21V13ZM19 15H15V19H19V15Z" fill="black"/></svg>`,
      category: 'Layout',
      content: {
        tagName: 'div',
        classes: ['grid', 'grid-small'],
        name: 'Grid - Small'
      }
    },
    {
      id: 'column',
      label: 'Column',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px"><path d="M760-760H599h5-4 160Zm-240 0q0-33 23.5-56.5T600-840h160q33 0 56.5 23.5T840-760v400h-80v-400H600v640q-33 0-56.5-23.5T520-200v-560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160q33 0 56.5 23.5T440-760v560q0 33-23.5 56.5T360-120H200Zm160-640H200v560h160v-560Zm0 0H200h160ZM760-40v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>`,
      category: 'Layout',
      content: {
        ...typeMap.column
      }
    },
    {
      id: 'div',
      label: 'Div',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
      category: 'Layout',
      content: {
        ...typeMap.div
      }
    },
    {
      id: 'header',
      label: 'Header',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-520h560v-120H200v120Zm560 80H200v360h560v-360Zm-560-80v80-80Zm0 0v-120 120Zm0 80v360-360Z"/></svg>`,
      content: typeMap.header
    },
    {
      id: 'nav',
      label: 'Nav',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" width="24" style="width: 100%; height: 48px;"><path d="M240-560h360v-120H240v120Zm-40 440q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
      content: typeMap.nav
    },
    {
      id: 'section',
      label: 'Section',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm560-200H200v120h560v-120Zm-100-80h100v-360H660v360Zm-460 0h100v-360H200v360Zm180 0h200v-360H380v360Z"/></svg>`,
      content: typeMap.section
    },
    {
      id: 'article',
      label: 'Article',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
      content: typeMap.article
    },
    {
      id: 'aside',
      label: 'Aside',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-80h280v-560H480v560Z"/></svg>`,
      content: typeMap.aside
    },
    {
      id: 'footer',
      label: 'Footer',
      category: 'Layout',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" style="width: 100%; height: 48px;"><path d="M240-240h480v-80H240v80Zm-40 120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`,
      content: typeMap.footer
    },
    {
      id: 'image',
      label: 'Image',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/></svg>`,
      category: 'Media',
      select: true,
      activate: true,
      content: {
        type: 'image'
      }
    },
    {
      id: 'video',
      label: 'Video',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="m380-300 280-180-280-180v360ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>`,
      category: 'Media',
      select: true,
      activate: true,
      content: {
        type: 'video'
      }
    },
    {
      id: 'iframe',
      label: 'iframe',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M460-420h200v-80H460v80Zm-60 60v-200h320v200H400ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Z"/></svg>`,
      category: 'Media',
      select: true,
      content: {
        type: 'iframe'
      }
    },
    {
      id: 'quote',
      label: 'Quote',
      category: 'Content',
      select: true,
      media: `<svg viewBox="0 0 24 24" style="width: 100%; height: 48px"><path fill="currentColor" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" /></svg>`,
      content: `<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>`
    },
    {
      id: 'form',
      label: 'Form',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>`,
      category: 'Forms',
      content: {
        tagName: 'form',
        droppable: ':not(form)',
        draggable: ':not(form)',
        style: {
          padding: '16px'
        }
      },
      view: {
        events: {
          // The submit of the form might redirect the user from the editor so
          // we should always prevent the default here.
          submit: (e: Event) => e.preventDefault()
        } as any
      }
    },
    {
      id: 'label',
      label: 'Input container',
      category: 'Forms',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>`,
      content: typeMap.label
    },
    {
      id: 'input',
      label: 'Input',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
      content: typeMap.input
    },
    {
      id: 'number-input',
      label: 'Number Input',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>',
      content: typeMap['number-input']
    },
    {
      id: 'textarea',
      label: 'Textarea',
      category: 'Forms',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"/><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"/></svg>`,
      content: typeMap.textarea
    },
    {
      id: 'select',
      label: 'Select',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"/></svg>',
      content: typeMap.select
    },
    {
      id: 'checkbox',
      label: 'Checkbox',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"></path></svg>',
      content: typeMap.checkbox
    },
    {
      id: 'radio',
      label: 'Radio',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>',
      content: typeMap.radio
    },
    {
      id: 'submit-button',
      label: 'Submit',
      category: 'Forms',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 11.5h16v1H4z"/></svg>',
      content: typeMap['pb-submit']
    },
    {
      id: 'mobile-menu',
      label: 'Mobile Menu',
      category: 'Misc',
      media:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" style="width: 100%; height: 48px;"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>',
      content: typeMap['pb-mobile-menu']
    },
    {
      id: 'products',
      label: 'Products',
      category: 'Shop',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" style="width: 100%; height: 48px;"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>`,
      content: typeMap['pb-products']
    },
    {
      id: 'featured-products',
      label: 'Featured Products',
      category: 'Shop',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" style="width: 100%; height: 48px;"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>`,
      content: typeMap['pb-featured-products']
    },
    {
      id: 'product-card',
      label: 'Product Card',
      category: 'Shop',
      media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" style="width: 100%; height: 48px;"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>`,
      content: typeMap['pb-product-card']
    },
    {
      id: 'swiper-container',
      label: 'Swiper Container',
      category: 'Misc',
      media: `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 48px;"><path d="M22 7.6c0-1-.5-1.6-1.3-1.6H3.4C2.5 6 2 6.7 2 7.6v9.8c0 1 .5 1.6 1.3 1.6h17.4c.8 0 1.3-.6 1.3-1.6V7.6zM21 18H3V7h18v11z" fill-rule="nonzero"/><path d="M4 12.5L6 14v-3zM20 12.5L18 14v-3z"/></svg>`,
      content: {
        type: 'swiper-container'
      }
    },

    /**
     * Blog
     */
    {
      id: 'blog',
      label: 'Blog Segment',
      category: 'Blog',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z"/></svg>`,
      content: typeMap['pb-blog']
    },
    {
      id: 'pb-featured-blog-articles',
      label: 'Featured Blog Articles',
      category: 'Misc',
      media: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000" style="width: 100%; height: 48px;"><path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z"/></svg>`,
      content: typeMap['pb-featured-blog-articles']
    },

    ...(popups
      ? [
          {
            id: 'popup-trigger',
            label: 'Popup Trigger',
            category: 'Misc',
            media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000" style="width: 100%; height: 48px;"><path d="M240-120h480v-80H520v-288l64 64 56-56-160-160-160 160 56 56 64-64v288H240v80Zm240-360ZM160-320q-33 0-56.5-23.5T80-400v-360q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H600v-80h200v-360H160v360h200v80H160Z"/></svg>`,
            content: {
              type: `pb-popup`,
              traits: [
                {
                  type: 'text',
                  label: 'Label',
                  name: 'label'
                },
                {
                  type: 'select',
                  name: 'popup',
                  label: 'Popup',
                  options: popups.map((popup) => ({
                    id: popup.id,
                    label: popup.title
                  }))
                }
              ]
            }
          }
        ]
      : [])
  ];
};
