import {onCall} from 'firebase-functions/v2/https';
import {REGION} from '../shared/consts/region.const';
import {hasRole} from '../shared/utils/authenticate';
import {getAuth} from 'firebase-admin/auth';

export const updateUser = onCall(
  {maxInstances: 1, region: REGION},
  async (request) => {
    hasRole(request, ['admin']);

    const auth = getAuth();

    auth.updateUser(request.data.uid, request.data.data);
  }
);
