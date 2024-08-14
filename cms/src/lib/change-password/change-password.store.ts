import { writable } from 'svelte/store';

export const changePassword = writable<null | { id: string; collection?: string }>(null);
