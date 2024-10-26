import { onCall } from 'firebase-functions/v2/https';
import { REGION } from '../shared/consts/region.const';
import { hasRole } from '../shared/utils/authenticate';
import { EmailService } from '../shared/services/email/email.service';

export const sendSampleEmail = onCall(
  { maxInstances: 1, region: REGION, secrets: ['SENDGRID_API_KEY'] },
  async (request) => {
    hasRole(request, ['admin']);

    const { templateId, emails, context } = request.data;

    await new EmailService().parseEmail(templateId, context, emails);
  }
);
