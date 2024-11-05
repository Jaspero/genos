import { DateTime } from 'luxon';

type TrackedCollection = {
  collection: 'products' | 'tags' | 'categories' | 'pages';
  titleKey: string;
  urlKey: string;
  prefix: string;
  keysToTrack: string[];
  skipGenerateJsonFile?: boolean;
};

export interface ChangeDocument {
  data: { [key: string]: any };
  collection: string;
  name: string;
  url: string;
  page: string;
  updatedAt: string;
  skipGenerateJsonFile: boolean;
  id: string;
  type: 'create' | 'update' | 'delete';
}

export const TRACKED_COLLECTIONS: TrackedCollection[] = [
  // {
  //   collection: 'products',
  //   titleKey: 'name',
  //   urlKey: 'url',
  //   prefix: '/products',
  //   keysToTrack: ['id', 'name', 'price', 'description', 'tags', 'categories', 'createdOn', 'image'],
  // },
  // { collection: 'tags', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name'] },
  // { collection: 'categories', titleKey: 'name', urlKey: 'url', prefix: '/products', keysToTrack: ['id', 'name'] },
  {
    collection: 'pages',
    titleKey: 'title',
    urlKey: 'url',
    prefix: '',
    keysToTrack: ['id', 'title', 'lastUpdatedOn'],
    skipGenerateJsonFile: true
  }
];

type CollectionNames = (typeof TRACKED_COLLECTIONS)[number]['collection'];

type CollectionKeysMap = {
  [K in CollectionNames]: { [key: string]: string };
};

export const COLLECTION_KEYS_MAP: CollectionKeysMap = TRACKED_COLLECTIONS.reduce(
  (acc: CollectionKeysMap, { keysToTrack, collection }) => {
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
  },
  {} as CollectionKeysMap
);

interface ItemConfig {
  collection: string;
  titleKey: string;
  urlKey: string;
  prefix: string;
  keysToTrack: string[];
  skipGenerateJsonFile?: boolean;
}

/**
 * Creates a document object that will be stored in the release history
 */
export const document = (
  itemConfig: ItemConfig,
  changedDataset: any,
  item: any,
  websiteUrl: string,
  type: 'create' | 'update' | 'delete'
): ChangeDocument => {

  const page = item[itemConfig.urlKey] ? itemConfig.prefix + item[itemConfig.urlKey] : ''

  return {
    data: itemConfig.keysToTrack.reduce((acc: any, key: string) => {
      let shortKey = key[0];
      let count = 1;
  
      while (acc.hasOwnProperty(shortKey)) {
        shortKey = key[0] + count;
        count++;
      }
  
      if (changedDataset[key] !== undefined) {
        acc[shortKey] = changedDataset[key];
      }
  
      return acc;
    }, {}),
    collection: itemConfig.collection,
    name: item[itemConfig.titleKey] || '',
    url: websiteUrl + page,
    page,
    updatedAt: DateTime.now().toUTC().toISO(),
    skipGenerateJsonFile: !!itemConfig.skipGenerateJsonFile,
    id: item.id,
    type
  } as ChangeDocument;
};
