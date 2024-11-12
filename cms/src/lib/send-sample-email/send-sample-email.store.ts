import { writable } from 'svelte/store';

export const sendSampleEmail = writable<null | { id: string }>(null);
