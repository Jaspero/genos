import {onDocumentDeleted} from 'firebase-functions/v2/firestore';
import {REGION} from '../shared/consts/region.const';
import {deleteFilesInFolder} from '../shared/utils/delete-files-in-folder';

export const templateDeleted = onDocumentDeleted(
  {
    region: REGION,
    document: 'templates/{templateId}',
  },
  async (event) => {
    if (!event.data) {
      return;
    }

    await deleteFilesInFolder(`page-configurations/templates/${event.data.id}`);
  }
);
