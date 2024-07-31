import {onDocumentDeleted} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';
import {deleteFilesInFolder} from '../shared/utils/delete-files-in-folder';

export const popupDeleted = onDocumentDeleted(
  {
    region: REGION,
    document: 'popups/{popupId}',
  },
  async (event) => {
    if (!event.data) {
      return;
    }

    await deleteFilesInFolder(`page-configurations/popups/${event.data.id}`);
  }
);
