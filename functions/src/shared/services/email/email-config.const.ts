export const EMAIL_CONFIG = {
  /**
   * TODO(Project Specific)
   * This is URL of the emailTracking cloud functions, you'll
   * be able to retrieve it from GCE once you deploy functions.
   */
  trackingUrl: 'https://emailtracking-cp6basztla-ew.a.run.app/et',

  /**
   * TODO(Project Specific)
   * This is the email of the sender it needs to match information
   * in sendgrid or email sending will fail.
   */
  fromEmail: {
    email: 'info@jaspero.co',
    name: 'Jaspero'
  }
};
