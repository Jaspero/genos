import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';
import type { SelectOptions } from '$lib/interfaces/select-options.interface.js';
import type { PageBuilderForm } from '$lib/page-builder/types/page-builder-form.interface';
import { fromStorage } from '$lib/page-builder/utils/from-storage';
import { BucketImageService } from '$lib/services/image.service.js';
import { db } from '$lib/utils/firebase';
import { getOptions } from '$lib/utils/get-options';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { page } = params;
  const col = 'pages';

  const imageService = new BucketImageService();
  (imageService.prefix = col + '/'),
    (imageService.metadata = [
      {
        folder: 'pages/',
        width: 1080
      }
    ]);
  const layouts: SelectOptions = [];

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
        label: 'URL',
        name: 'url',
        pattern: '[a-z0-9\\-\\/]+'
      }
    },
    {
      component: 'jp-datepicker',
      field: '/publicationDate',
      options: {
        label: 'Publication Date',
        returnFormat: 'unix'
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

  const [pagesSnap, sectionsSnap, templatesSnap, popupsSnap, formsSnap, layoutData] =
    await Promise.all([
      getDocs(collection(db, 'pages')),
      getDocs(
        query(collection(db, 'sections'), where('tags', 'array-contains-any', ['Any', 'Products']))
      ),
      getDocs(
        query(collection(db, 'templates'), where('tags', 'array-contains-any', ['Any', 'Products']))
      ),
      getDocs(collection(db, 'popups')),
      getDocs(collection(db, 'forms')),
      getOptions('layouts', 'name', [
        { key: 'tags', operation: 'array-contains-any', value: ['Any', 'Pages'] }
      ])
    ]);

  layouts.push(...layoutData);

  const sections = (
    await Promise.all(
      sectionsSnap.docs.map(async (d) => {
        const data = d.data();

        const jsonSnap = await fromStorage(`page-configurations/sections/${d.id}/content.json`);

        return {
          id: d.id,
          title: data.title,
          json: JSON.parse(jsonSnap),
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

        const jsonSnap = await fromStorage(`page-configurations/templates/${d.id}/content.json`);

        return {
          id: d.id,
          title: data.title,
          json: JSON.parse(jsonSnap),
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

      return {
        id: d.id,
        title: data.title,
        html: await fromStorage(`page-configurations/popups/${d.id}/content.html`),
        style: await fromStorage(`page-configurations/popups/${d.id}/content.css`),
        description: data.description,
        image: data.image
      };
    })
  );

  const forms = formsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as PageBuilderForm[];

  let pages = pagesSnap.docs
    .map((it) => {
      const dt = it.data();

      return {
        id: it.id,
        title: dt.title,
        active: dt.active
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  if (page === 'new') {
    return {
      col,
      items,
      metaItems: META_FORM_FIELDS(col),
      value: {},
      pages,
      sections,
      templates,
      popups,
      forms
    };
  }

  pages = pages.filter((p) => p.id !== page);

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, page)),
    fromStorage(`page-configurations/${col}/${page}/content.json`)
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
    json: JSON.parse(jsonSnap),
    pages,
    sections,
    templates,
    popups,
    forms
  };
}
