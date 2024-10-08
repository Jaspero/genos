type TrackedCollection = {
  collection: 'products' | 'tags' | 'categories';
  titleKey: string;
  urlKey: string;
  prefix: string;
  keysToTrack: string[];
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
