import type {PageBuilderForm} from '$lib/page-builder/page-builder-form.interface';
import {fromStorage} from '$lib/page-builder/utils/from-storage.js';
import {BucketImageService} from '$lib/services/image.service.js';
import {db, storage} from '$lib/utils/firebase';
import {redirect} from '@sveltejs/kit';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import {getBlob, ref} from 'firebase/storage';

export async function load({params, parent}) {
  await parent();

  const {layout} = params;
  const col = 'layouts';

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
      field: '/name',
      options: {
        label: 'Name',
        name: 'name',
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
  ];

  const [popupsSnap, formsSnap] = await Promise.all([
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

  const forms = formsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as PageBuilderForm[];

  if (layout === 'new') {
    return {
      col,
      items,
      value: {},
      popups,
      forms
    };
  }

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, layout)),
    getBlob(ref(storage, `page-configurations/${col}/${layout}/content.json`))
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = {id: snap.id, ...(snap.data() as any)};

  return {
    snap,
    col,
    items,
    value,
    json: JSON.parse(await jsonSnap.text()),
    popups,
    forms
  };
}
