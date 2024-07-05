import {initializeApp} from 'firebase-admin/app';

initializeApp();

/**
 * Callable
 */
export {processCheckout} from './callable/process-checkout';
export {createAdmin} from './callable/create-admin';

/**
 * Triggers
 */
export {adminUpdated} from './triggers/admin-updated';
export {userCreated} from './triggers/user-created';
export {productCreated} from './triggers/product-created';

// Pages cleanup
export {pageDeleted} from './triggers/page-deleted';
export {layoutDeleted} from './triggers/layout-deleted';
export {popupDeleted} from './triggers/popup-deleted';
export {sectionDeleted} from './triggers/section-deleted';
export {templateDeleted} from './triggers/template-deleted';

/**
 * Rest
 */
export {actionController} from './rest/action-controller';
export {stripeWebhook} from './rest/stripe-webhook';
