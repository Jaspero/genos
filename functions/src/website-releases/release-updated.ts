import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import { REGION } from '../shared/consts/region.const';
import { GITHUB_REPO } from './consts/github-repo.const';

export const releaseUpdated = onDocumentUpdated(
  {
    region: REGION,
    document: 'releases/{release}',
    secrets: ['GITHUB_TOKEN']
  },
  async (event) => {
    const newValue = event.data!.after.data();
    const oldValue = event.data!.before.data();

    if (newValue.publishStart && !oldValue.publishStart) {
      await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/update-web.workflow.yml/dispatches`,
        {
          method: 'POST',
          headers: {
            accept: 'application/vnd.github.v3+json',
            authorization: `bearer ${process.env.GITHUB_TOKEN}`
          },
          body: JSON.stringify({
            ref: 'build',
            inputs: {
              release: event.data!.after.id,
              type: newValue.type
            }
          })
        }
      );
    }
  }
);
