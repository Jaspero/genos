import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { db } from '../utils/firebase';

export class SearchService {
  constructor(
    private collection: string,
    private searchKey: string,
    private displayKey: string,
    private valueKey: string,
    private limit = 10
  ) {}

  async search(value: string) {
    value = value.trim();

    if (!value) {
      return [];
    }

    const { docs } = await getDocs(
      query(
        collection(db, this.collection),
        where(this.searchKey, '>=', value),
        where(
          this.displayKey,
          '<',
          value.replace(/.$/, (c) => String.fromCharCode(c.charCodeAt(0) + 1))
        ),
        limit(this.limit)
      )
    );

    return docs.map((doc) => {
      const data = { id: doc.id, ...doc.data() } as any;

      return {
        label: data.hasOwnProperty(this.displayKey) ? data[this.displayKey] : data[this.valueKey],
        value: data[this.valueKey]
      };
    });
  }
}
