import { redirectUnauthorized } from '$lib/guards/redirect-unauthoirzed';

export const prerender = false;

export async function load() {
  await redirectUnauthorized();
}
