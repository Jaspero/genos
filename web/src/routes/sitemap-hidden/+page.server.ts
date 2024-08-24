import { blogData } from '$lib/server/blog';
import { paginateArray } from '$lib/utils/paginate-array';
import { firestore } from '$lib/utils/firebase-admin';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const { articles, authors } = await blogData();
  const { docs } = await firestore.collection('pages').where('active', '==', true).get();

  return {
    pages: docs.map((doc) => {
      const dt = doc.data();

      return {
        title: dt.title,
        url: dt.url
      };
    }),
    blog: {
      articles,
      authors
    }
  };
};
