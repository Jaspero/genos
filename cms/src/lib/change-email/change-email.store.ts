import {writable} from 'svelte/store';

export const changeEmail = writable<null | {id: string; collection?: string;}>(null);