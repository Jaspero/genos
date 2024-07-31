import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';
import { BucketImageService } from '$lib/services/image.service.js';
import type { PageBuilderForm } from '$lib/page-builder/types/page-builder-form.interface';
import { getOptions } from '$lib/utils/get-options';
import type { SelectOptions } from '$lib/interfaces/select-options.interface.js';

export async function load({ params, parent }) {
  await parent();

  const { product } = params;
  const categories: SelectOptions = [];
  const tags: SelectOptions = [];
  const layouts: SelectOptions = [];
  const col = 'products';
  const imageService = new BucketImageService();

  imageService.prefix = 'products/';
  imageService.metadata = [
    {
      height: 1000,
      width: 1000,
      filePrefix: 'thumb_m_',
      folder: '/products/generated'
    },
    {
      filePrefix: 'thumb_s_',
      width: 500,
      height: 500,
      folder: '/products/generated'
    }
  ];

  const items = [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        label: 'Name',
        name: 'name',
        required: true
      }
    },
    {
      component: 'jp-input',
      field: '/url',
      options: {
        label: 'URL',
        name: 'url',
        pattern: '[a-z0-9\\-\\/]+'
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
      component: 'jp-multiselect',
      field: '/tags',
      options: {
        label: 'Tags',
        name: 'tags',
        options: tags
      }
    },
    {
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Description',
        name: 'description'
      }
    },
    {
      component: 'jp-select',
      field: '/header',
      options: {
        label: 'Header',
        options: layouts
      }
    },
    {
      component: 'jp-select',
      field: '/footer',
      options: {
        label: 'Footer',
        options: layouts
      }
    },
    {
      component: 'jp-file-upload',
      field: '/image',
      options: {
        label: 'Featured Image',
        name: 'featuredImage',
        service: imageService
      }
    }
  ];

  const [
    sectionsSnap,
    templatesSnap,
    popupsSnap,
    formsSnap,
    layoutData,
    categorieOptions,
    tagOptions
  ] = await Promise.all([
    getDocs(
      query(collection(db, 'sections'), where('tags', 'array-contains-any', ['Any', 'Products']))
    ),
    getDocs(
      query(collection(db, 'templates'), where('tags', 'array-contains-any', ['Any', 'Products']))
    ),
    getDocs(collection(db, 'popups')),
    getDocs(collection(db, 'forms')),
    getOptions('layouts', 'name', [
      { key: 'tags', operation: 'array-contains-any', value: ['Any', 'Products'] }
    ]),
    getOptions('categories', 'name'),
    getOptions('tags', 'name')
  ]);

  layouts.push(...layoutData);

  const sections = (
    await Promise.all(
      sectionsSnap.docs.map(async (d) => {
        const data = d.data();

        const jsonSnap = await getDoc(doc(db, 'sections', d.id, 'content', 'json'));

        return {
          id: d.id,
          title: data.title,
          json: jsonSnap?.data(),
          category: data.category,
          image: data.image
        };
      })
    )
  ).reduce((acc: any[], cur) => {
    const { category, ...data } = cur;
    const idx = acc.findIndex((it) => it.category === category);

    if (idx === -1) {
      acc.push({
        category,
        sections: [data]
      });
    } else {
      acc[idx].sections.push(data);
    }

    return acc;
  }, []);

  const templates = (
    await Promise.all(
      templatesSnap.docs.map(async (d) => {
        const data = d.data();

        const jsonSnap = await getDoc(doc(db, 'templates', d.id, 'content', 'json'));

        return {
          id: d.id,
          title: data.title,
          json: jsonSnap?.data(),
          category: data.category,
          image: data.image
        };
      })
    )
  ).reduce((acc: any[], cur) => {
    const { category, ...data } = cur;
    const idx = acc.findIndex((it) => it.category === category);

    if (idx === -1) {
      acc.push({
        category,
        sections: [data]
      });
    } else {
      acc[idx].sections.push(data);
    }

    return acc;
  }, []);

  const popups = await Promise.all(
    popupsSnap.docs.map(async (d) => {
      const data = d.data();

      const htmlSnap = await getDoc(doc(db, 'page-popups', d.id, 'content', 'html'));
      const styleSnap = await getDoc(doc(db, 'page-popups', d.id, 'content', 'css'));

      return {
        id: d.id,
        title: data.title,
        html: htmlSnap?.data(),
        style: styleSnap?.data(),
        description: data.description,
        image: data.image
      };
    })
  );

  const forms = formsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as PageBuilderForm[];

  categories.push(...categorieOptions);
  tags.push(...tagOptions);

  if (product === 'new') {
    return {
      col,
      items,
      metaItems: META_FORM_FIELDS(col),
      value: {},
      sections,
      templates,
      popups,
      forms
    };
  }

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, product)),
    getDoc(doc(db, col, product, 'content', 'json'))
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return {
    snap,
    col,
    items,
    metaItems: META_FORM_FIELDS(col),
    value,
    json: jsonSnap?.data(),
    sections,
    templates,
    popups,
    forms
  };
}
