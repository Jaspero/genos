type TrackedCollection = {
  collection: 'products' | 'tags' | 'categories' | 'pages';
  titleKey: string;
  urlKey: string;
  prefix: string;
  keysToTrack: string[];
  skipGenerateJsonFile?: boolean;
};

export const TRACKED_COLLECTIONS: TrackedCollection[] = [
  {
    collection: 'products',
    titleKey: 'name',
    urlKey: 'url',
    prefix: '/products',
    keysToTrack: ['id', 'name', 'price', 'description', 'tags', 'categories', 'createdOn', 'image'],
  },
  { collection: 'tags', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name'] },
  { collection: 'categories', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name'] },
  { collection: 'pages', titleKey: 'name', urlKey: 'url', prefix: '/pages', keysToTrack: ['id', 'name'], skipGenerateJsonFile: true }
];

type CollectionNames = typeof TRACKED_COLLECTIONS[number]['collection'];

type CollectionKeysMap = {
  [K in CollectionNames]: { [key: string]: string };
};

export const COLLECTION_KEYS_MAP: CollectionKeysMap = TRACKED_COLLECTIONS.reduce((acc: CollectionKeysMap, { keysToTrack, collection }) => {
  acc[collection] = keysToTrack.reduce((sAcc: { [key: string]: string }, key: string) => {
    let shortKey = key[0];
    let count = 1;

    while (sAcc.hasOwnProperty(shortKey)) {
      shortKey = key[0] + count;
      count++;
    }

    sAcc[key] = shortKey;
    return sAcc;
  }, {});

  return acc;
}, {} as CollectionKeysMap);

/**
 * Creates a document object that will be stored in the release history
 */
export const document = (item: any, id: string, data: any, websiteUrl: string): { skipGenerateJsonFile: boolean; name: string; url: string; updatedAt: string; data: { [key: string]: any }, collection: string, id: string } => ({
  data: item.keysToTrack.reduce((acc: any, key: string) => {
    let shortKey = key[0];
    let count = 1;

    while (acc.hasOwnProperty(shortKey)) {
      shortKey = key[0] + count;
      count++;
    }

    if (data[key] !== undefined) {
      acc[shortKey] = data[key];
    }

    return acc;
  }, {}),
  collection: item.collection,
  name: data[item.titleKey],
  url: data[item.urlKey] ? websiteUrl + item.prefix + '/' + data[item.urlKey] : '',
  updatedAt: new Date().toUTCString(),
  skipGenerateJsonFile: !!item.skipGenerateJsonFile,
  id
});
