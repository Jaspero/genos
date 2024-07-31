import {onDocumentDeleted} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';
import {deleteFilesInFolder} from '../shared/utils/delete-files-in-folder';

export const sectionDeleted = onDocumentDeleted(
  {
    region: REGION,
    document: 'sections/{sectionId}',
  },
  async (event) => {
    if (!event.data) {
      return;
    }

    await deleteFilesInFolder(`page-configurations/sections/${event.data.id}`);
  }
);
