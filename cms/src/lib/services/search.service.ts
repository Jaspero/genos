import {collection, doc, DocumentSnapshot, getDoc, getDocs, limit, query, QueryDocumentSnapshot, where} from 'firebase/firestore';
import {db} from '../utils/firebase';

export class SearchService {

  constructor(
    private collection: string,
    private searchKey: string,
    private displayKey: string,
    private valueKey: string,
    private limit = 10
  ) { }

  mapEntry(snap: QueryDocumentSnapshot | DocumentSnapshot) {
    const data = {id: snap.id, ...snap.data()} as any;

    const getKeyValue = (obj: any, path: string) => {
      const keys = path.split('.')
      while (keys.length) {
        let loc = keys.shift()!;
        if (obj.hasOwnProperty(loc)) {
          obj = obj[loc]
        } else {
          obj = undefined
          break
        }
      }
      return obj
    }

    return {
      label: getKeyValue(data, this.displayKey) || getKeyValue(data, this.searchKey),
      value: data[this.valueKey]
    }
  }

  async search(value: string) {

    value = value.trim();

    if (!value) {
      return [];
    }

    const {docs} = await getDocs(
      query(
        collection(db, this.collection),
        where(this.searchKey, '>=', value),
        where(this.searchKey, '<', value.replace(/.$/, c => String.fromCharCode(c.charCodeAt(0) + 1))),
        limit(this.limit)
      )
    );

    return docs.map(snap => this.mapEntry(snap));
  }

  async getSingle(id: string) {

    if (this.valueKey === 'id') {
      const snap = await getDoc(
        doc(db, this.collection, id)
      );

      return this.mapEntry(snap)
    }

    const {docs} = await getDocs(
      query(
        collection(db, this.collection),
        where(this.valueKey, '==', id),
        limit(1)
      )
    );

    if (docs.length) {
      return this.mapEntry(docs[0]);
    }
  }
}