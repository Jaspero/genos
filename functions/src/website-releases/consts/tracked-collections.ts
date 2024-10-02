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
  {collection: 'products', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name', 'price', 'description', 'tags', 'categories', 'createdOn', 'image']},
  {collection: 'tags', titleKey: 'name', urlKey: 'url', prefix: '/tags', keysToTrack: ['id', 'name']},
  {collection: 'categories', titleKey: 'name', urlKey: 'url', prefix: '/categories', keysToTrack: ['id', 'name']},
];
