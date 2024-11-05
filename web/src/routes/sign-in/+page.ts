import { redirectAuthorized } from '$lib/guards/redirect-authorized';

export const ssr = false;

export async function load() {
  await redirectAuthorized();
}
