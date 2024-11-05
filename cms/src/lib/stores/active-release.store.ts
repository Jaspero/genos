import { writable } from 'svelte/store';
import type { TrackedCollectionChange } from '$lib/interfaces/tracked-collection-change.interface';

export const activeRelease = writable<{
  release: number;
  changes: TrackedCollectionChange[];
} | null>(null);
