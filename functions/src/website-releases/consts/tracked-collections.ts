/**
 * TODO(Project Specific)
 * Every collection change that should trigger
 * a website release should be added here
 */
export const TRACKED_COLLECTIONS = [
  {collection: 'blog-articles', titleKey: 'name', urlKey: 'url', prefix: '/blog'},
  {collection: 'pages', titleKey: 'name', urlKey: 'url'},
  /**
   * todo: replace urlKey with slug property
   */
  {collection: 'products', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['name', 'price', 'description', 'tags', 'categories']},
];
