import { initializeApp } from 'firebase-admin/app';
import { tracking } from './website-releases/tracking-changes';
import { releaseUpdated } from './website-releases/release-updated';
import {fileDeleted} from './image-processing/file-deleted';
import {fileCreated} from './image-processing/file-created';

initializeApp();

/**
 * Callable
 */
// export {processCheckout} from './callable/process-checkout';
export { createAdmin } from './callable/create-admin';
export { updateUser } from './callable/update-user';
export { sendSampleEmail } from './callable/send-sample-email';

/**
 * Triggers
 */
export { adminUpdated } from './triggers/admin-updated';
export { adminDeleted } from './triggers/admin-deleted';
export { userCreated } from './triggers/user-created';
export { productCreated } from './triggers/product-created';
export { formResponsesCreated } from './triggers/form-responses-created';
export { formResponsesDeleted } from './triggers/form-responses-deleted';

// Pages cleanup
export { pageDeleted } from './triggers/page-deleted';
export { layoutDeleted } from './triggers/layout-deleted';
export { popupDeleted } from './triggers/popup-deleted';
export { sectionDeleted } from './triggers/section-deleted';
export { templateDeleted } from './triggers/template-deleted';


export const imageProcessing = {
  fileCreated,
  fileDeleted
};


/**
 * Rest
 */
export { actionController } from './rest/action-controller';
export { emailTracking } from './rest/email-tracking';
// export {stripeWebhook} from './rest/stripe-webhook';

export const websiteReleaseTracking = tracking;
export const websiteReleases = {
  releaseUpdated
};
