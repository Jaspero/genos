import { blogData } from '$lib/server/blog';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { CONFIG } from '$lib/consts/config.const';
import { bucket } from '$lib/utils/firebase-admin';

export const load: PageServerLoad = async ({ params }) => {
  const { articles } = await blogData();

  const article = articles.find((it) => it.url === params.id);

  if (!article) {
    return redirect(303, '/404');
  }

  const data = {
    header: '',
    footer: '',
    article
  };
  const toLoad = [];

  if (CONFIG.singleHeader) {
    toLoad.push(
      Promise.all([
        bucket.file(`page-configurations/layouts/${CONFIG.singleHeader}/content.html`).download(),
        bucket.file(`page-configurations/layouts/${CONFIG.singleHeader}/content.css`).download()
      ]).then((refs) => {
        data.header = `${refs?.[0].toString()}<style>${refs?.[1]?.toString()}</style>`;
      })
    );
  }

  if (CONFIG.singleFooter) {
    toLoad.push(
      Promise.all([
        bucket.file(`page-configurations/layouts/${CONFIG.singleFooter}/content.html`).download(),
        bucket.file(`page-configurations/layouts/${CONFIG.singleFooter}/content.css`).download()
      ]).then((refs) => {
        data.footer = `${refs?.[0].toString()}<style>${refs?.[1]?.toString()}</style>`;
      })
    );
  }

  await Promise.all(toLoad);

  return data;
};
