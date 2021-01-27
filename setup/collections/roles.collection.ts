export const ROLES_COLLECTION = {
  name: 'roles',
  documents: [
    {
      id: 'admin',
      name: 'Admin',
      description: 'Korisnik sa pristupom svim kolekcijama',
      createdOn: Date.now()
    }
  ]
};
