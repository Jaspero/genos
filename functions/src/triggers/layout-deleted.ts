import {onDocumentDeleted} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';
import {deleteFilesInFolder} from '../shared/utils/delete-files-in-folder';

export const layoutDeleted = onDocumentDeleted(
  {
    region: REGION,
    document: 'layouts/{layoutId}',
  },
  async (event) => {
    if (!event.data) {
      return;
    }

    await deleteFilesInFolder(`page-configurations/layouts/${event.data.id}`);
  }
);
