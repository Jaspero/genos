module.exports = {
  all: () => [{ slug: '404' }],
  template: '404.svelte',
  permalink: ({ request }) => `/${request.slug}`,
};
