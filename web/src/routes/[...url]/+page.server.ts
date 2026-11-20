import { firestore, bucket } from '$lib/utils/firebase-admin';
import { redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { langFromPath } from '$lib/i18n/routes';
import { building } from '$app/environment';
import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';

const FIELD_LABELS: Record<string, { en: string; hr: string }> = {
  email: { en: 'Email', hr: 'E-pošta' },
  message: { en: 'Message', hr: 'Poruka' }
};

function attr(tag: string, name: string) {
  // Preceded by whitespace, so that "?alt=media" inside a URL is not taken for the alt attribute.
  const m = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`));
  return m ? (m[1] ?? m[2] ?? m[3]) : null;
}

/**
 * Where prerendered files are collected before the adapter copies them to the site (public/web),
 * after it has cleared the old build. Files written here are published with the pages.
 */
const MEDIA_DIR = '.svelte-kit/output/prerendered/pages/media';
const MEDIA_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/gif': 'gif'
};
const localCopies = new Map<string, Promise<string | null>>();

function decodeEntities(value: string) {
  return value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}

/**
 * The intro photos live in Firebase Storage (firebasestorage.googleapis.com), which takes a few
 * hundred milliseconds to answer and needs its own connection, so the page's main image was late.
 * When the site is built, each intro photo of a page being built is copied next to the pages as
 * /media/<content hash>.<ext> (a new photo gets a new name, so the long image cache is safe).
 * Partial builds copy the photos of the pages they build. If the copy fails, the Storage URL is
 * kept, and if a copy is ever missing on the site the image falls back to the Storage URL.
 */
function localCopy(src: string) {
  if (!building || !/^https:\/\/firebasestorage\.googleapis\.com\//.test(src)) {
    return Promise.resolve(null);
  }

  if (!localCopies.has(src)) {
    localCopies.set(
      src,
      (async () => {
        try {
          const response = await fetch(src);
          const ext = MEDIA_TYPES[(response.headers.get('content-type') || '').split(';')[0].trim()];

          if (!response.ok || !ext) {
            return null;
          }

          const data = Buffer.from(await response.arrayBuffer());
          const name = `${createHash('sha256').update(data).digest('hex').slice(0, 16)}.${ext}`;

          await mkdir(MEDIA_DIR, { recursive: true });
          await writeFile(`${MEDIA_DIR}/${name}`, data);

          return `/media/${name}`;
        } catch (e) {
          console.warn('Intro photo not copied, the Storage URL is kept:', src, e);
          return null;
        }
      })()
    );
  }

  return localCopies.get(src)!;
}

/**
 * The intro photo was only added by JavaScript after the app started, which made it the late
 * Largest Contentful Paint. It is now part of the page HTML; the pb-intro block reuses it.
 * Returns the HTML and the first photo (the page's main image, preloaded in the head).
 */
async function prerenderIntroImage(html: string) {
  const tags = html.match(/<pb-intro\b[^>]*>/g) ?? [];
  const copies = new Map<string, string | null>();

  for (const tag of tags) {
    const src = attr(tag, 'src');

    if (src && !copies.has(src)) {
      copies.set(src, await localCopy(decodeEntities(src)));
    }
  }

  let first = true;
  let lcpImage: string | null = null;

  const result = html.replace(/<pb-intro\b[^>]*>/g, (tag) => {
    const src = attr(tag, 'src');

    if (!src) return tag;

    const alt = attr(tag, 'alt') ?? '';
    const priority = first ? ' fetchpriority="high"' : ' loading="lazy"';
    const local = copies.get(src);
    const storageSrc = src.replace(/"/g, '&quot;');
    // If the copy is missing, load the photo from Storage instead (once).
    const fallback = local
      ? ` onerror="this.onerror=null;this.src=this.dataset.src" data-src="${storageSrc}"`
      : '';

    if (first) {
      lcpImage = local ?? decodeEntities(src);
    }

    first = false;

    return `${tag}<img class="intro-bg" src="${local ?? storageSrc}"${fallback} alt="${alt.replace(/"/g, '&quot;')}"${priority}>`;
  });

  return { html: result, lcpImage };
}

/**
 * Accessibility fixes applied to the CMS page HTML at build time; the stored content is not changed.
 * - Form fields the editor left with the placeholder label "Label" are named after their field.
 * - The intro photo is part of the HTML (see prerenderIntroImage).
 * - E-mail fields get autocomplete="email" (WCAG 1.3.5).
 */
async function fixCmsHtml(source: string, lang: 'en' | 'hr') {
  const { html, lcpImage } = await prerenderIntroImage(source);

  const fixed = html
    .replace(
      /(<label\b[^>]*>)\s*Label\s*(<(?:input|textarea)\b[^>]*?\bname=("?)([\w-]+)\3)/g,
      (match, open, field, _q, name) => (FIELD_LABELS[name] ? open + FIELD_LABELS[name][lang] + field : match)
    )
    .replace(/<input(?![^>]*\bautocomplete=)([^>]*\btype=("?)email\2)/g, '<input autocomplete=email$1');

  return { html: fixed, lcpImage };
}

export const entries: EntryGenerator = async () => {
  const snapshot = await firestore
    .collection('pages')
    .where('active', '==', true)
    .select('url')
    .get();

  const entries = snapshot.docs
    .map((doc) => doc.data().url as string)
    .filter((url) => typeof url === 'string')
    .map((url) => url.trim())
    .filter((url) => url && url !== '/')
    .map((url) => ({ url: url.replace(/^\/+/, '') }));

  // '/home' is a public route alias for the CMS homepage stored at '/'.
  entries.push({ url: 'home' });

  return entries;
};

export const load: PageServerLoad = async ({ params }) => {
  const rawUrl = params.url.trim();
  // The Firebase redirect sends '/' → '/home', but the CMS stores the homepage at URL '/'.
  // Map 'home' back to the root so the Firestore lookup succeeds.
  const url = rawUrl === 'home' ? '' : rawUrl;

  const { docs } = await firestore
    .collection('pages')
    .where('url', '==', '/' + url)
    .where('active', '==', true)
    .limit(1)
    .get();

  const [doc] = docs;

  if (!doc) {
    return redirect(303, '/404');
  }

  const toLoad: any[] = [
    bucket.file(`page-configurations/pages/${doc.id}/content.html`).download(),
    bucket.file(`page-configurations/pages/${doc.id}/content.css`).download(),
    bucket.file(`page-configurations/pages/${doc.id}/content.js`).download()
  ];

  const data = doc.data();

  if (data.header) {
    toLoad.push(
      bucket.file(`page-configurations/layouts/${data.header}/content.html`).download(),
      bucket.file(`page-configurations/layouts/${data.header}/content.css`).download()
    );
  }

  if (data.footer) {
    toLoad.push(
      bucket.file(`page-configurations/layouts/${data.footer}/content.html`).download(),
      bucket.file(`page-configurations/layouts/${data.footer}/content.css`).download()
    );
  }

  const [htmlRef, styleRef, scriptRef, ...layoutRefs] = await Promise.all(toLoad);

  const content = [layoutRefs[0], htmlRef, layoutRefs[2]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, '');
  const style = [layoutRefs[1], styleRef, layoutRefs[3]].reduce((acc, cur) => {
    if (cur) {
      acc += cur.toString();
    }
    return acc;
  }, '');

  const lang = langFromPath('/' + url) || 'en';

  // The English contact page was saved in the CMS with the Croatian title "Kontakt" (WCAG 2.4.2, 3.1.2).
  if (lang === 'en' && data.meta?.title === 'Kontakt') {
    data.meta = { ...data.meta, title: 'Contact' };
  }
  if (lang === 'en' && data.title === 'Kontakt') {
    data.title = 'Contact';
  }

  const fixed = await fixCmsHtml(content, lang);

  return {
    ...data,
    lcpImage: fixed.lcpImage,
    content: `${fixed.html}<style>${style}</style>`,
    scripts: await scriptRef.toString()
  };
};
