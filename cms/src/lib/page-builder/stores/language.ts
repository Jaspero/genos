import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';
const savedLanguage = isBrowser ? (localStorage.getItem('language') as 'en' | 'hr') || 'en' : 'en';

export const language = writable<'en' | 'hr'>(savedLanguage);

if (isBrowser) {
  language.subscribe((value) => {
    localStorage.setItem('language', value);
  });
}
