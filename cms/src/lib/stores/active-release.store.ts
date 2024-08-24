import { writable } from 'svelte/store';

export const activeRelease = writable<{
  release: number;
  changes: Array<{
    page: string;
    cmsLink: string;
    name: string;
    updatedAt: string;
  }>;
} | null>(null);
