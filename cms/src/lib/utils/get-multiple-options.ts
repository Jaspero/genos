import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import type { Filter } from '../interfaces/filter.interface';

export async function getMultipleOptions(
  col: string,
  label: string | ((fields: Record<string, any>) => string),
  keys: string[] = ['name'],
  filters: Filter[] = []
) {
  const { docs } = await getDocs(
    query(
      collection(db, col),
      ...filters.map((filter) => where(filter.key, filter.operation, filter.value))
    )
  );

  return docs
    .map((doc) => {
      const fields = keys.reduce(
        (acc, key) => {
          acc[key] = doc.data()[key];
          return acc;
        },
        {} as Record<string, any>
      );

      const formattedLabel = typeof label === 'function' ? label(fields) : fields[label];

      return {
        label: formattedLabel,
        value: doc.id
      };
    })
    .sort((a, b) => a[keys[0]]?.localeCompare(b[keys[0]]));
}
