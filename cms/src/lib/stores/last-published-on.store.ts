import { writable } from 'svelte/store';

export const lastPublishedOn = writable<number|null>(null);
