const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const projects = await fs.collection('projects')
      .orderBy('createdOn', 'desc')
      .limit(11)
      .get();

    return {
      projects: projects.docs.map(it => ({
        id: it.id,
        ...it.data()
      }))
    };
  },
  all: () => [{slug: 'projekti'}]
};
