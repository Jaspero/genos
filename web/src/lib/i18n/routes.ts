export type Lang = 'en' | 'hr';

/**
 * English and Croatian versions of the same CMS page.
 * Used for the language switch, the <html lang> of each page and the hreflang alternates.
 */
export const ROUTE_PAIRS: Array<{ en: string; hr: string }> = [
  { en: '/home', hr: '/pocetna' },
  { en: '/about', hr: '/o-nama' },
  { en: '/projects', hr: '/projekti' },
  { en: '/publications', hr: '/publikacije' },
  { en: '/services', hr: '/usluge' },
  { en: '/resources', hr: '/korisni-linkovi' },
  { en: '/team', hr: '/tim' },
  { en: '/news', hr: '/novosti' },
  { en: '/contact', hr: '/kontakt' }
];

function normalize(path: string) {
  const p = path.replace(/\/+$/, '').replace(/\.html$/, '');
  return p === '' ? '/home' : p;
}

/** The language a page is written in, or null for pages that follow the visitor's choice (tools, account...). */
export function langFromPath(path: string): Lang | null {
  const p = normalize(path);
  for (const pair of ROUTE_PAIRS) {
    if (pair.en === p) return 'en';
    if (pair.hr === p) return 'hr';
  }
  return null;
}

/** The same page in the given language, or null when the page has no language version. */
export function pathInLang(path: string, lang: Lang): string | null {
  const p = normalize(path);
  const pair = ROUTE_PAIRS.find((r) => r.en === p || r.hr === p);
  return pair ? pair[lang] : null;
}
