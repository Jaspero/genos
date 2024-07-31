import { writable } from 'svelte/store';

export const changePassword = writable<null | string>(null);
