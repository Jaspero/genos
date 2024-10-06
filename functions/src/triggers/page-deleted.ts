import { onDocumentDeleted } from 'firebase-functions/v2/firestore';
import { REGION } from '../shared/consts/region.const';
import { deleteFilesInFolder } from '../shared/utils/delete-files-in-folder';

export const pageDeleted = onDocumentDeleted(
  {
    region: REGION,
    document: 'pages/{pageId}'
  },
  async (event) => {
    if (!event.data) {
      return;
    }

    await deleteFilesInFolder(`page-configurations/pages/${event.data.id}`);
  }
);
