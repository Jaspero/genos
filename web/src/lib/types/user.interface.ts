export interface User {
  id: string;
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  recoveryEmail?: string;
  institution?: string;
  position?: string;
  institutionAddress?: string;
  vatId?: string;
  favorites?: string[];
}
