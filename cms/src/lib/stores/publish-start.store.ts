import { writable } from 'svelte/store';

export const publishStartOn = writable<number | null>(null);
