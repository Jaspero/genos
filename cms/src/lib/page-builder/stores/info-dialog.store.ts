import {writable} from 'svelte/store';

export const infoDialog = writable<null | Array<{name: string; value: any}>>(null)