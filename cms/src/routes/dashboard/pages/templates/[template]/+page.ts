import type { PageBuilderForm } from '$lib/page-builder/page-builder-form.interface';
import { fromStorage } from '$lib/page-builder/utils/from-storage';
import { BucketImageService } from '$lib/services/image.service.js';
import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { template } = params;
  const col = 'templates';

  const imageService = new BucketImageService();
  (imageService.prefix = col + '/'),
    (imageService.metadata = [
      {
        folder: 'pages/',
        width: 1080
      }
    ]);

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
      field: '/category',
      options: {
        label: 'Category',
        name: 'category',
        required: true
      }
    },
    {
      component: 'jp-chips',
      field: '/tags',
      options: {
        label: 'Tags',
        name: 'tags'
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

  const [sectionsSnap, popupsSnap, formsSnap] = await Promise.all([
    getDocs(collection(db, 'sections')),
    getDocs(collection(db, 'popups')),
    getDocs(collection(db, 'forms'))
  ]);

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

  const forms = formsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as PageBuilderForm[];

  if (template === 'new') {
    return {
      col,
      items,
      value: {
        tags: ['Any', 'Pages']
      },
      sections,
      popups,
      forms
    };
  }

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, template)),
    fromStorage(`page-configurations/${col}/${template}/content.json`)
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return {
    snap,
    col,
    items,
    value,
    json: JSON.parse(jsonSnap),
    sections,
    popups,
    forms
  };
}
