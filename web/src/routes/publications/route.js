const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const publications = await fs.collection('publications')
      .orderBy('createdOn', 'desc')
      .limit(11)
      .get();

    return {
      publications: publications.docs.map(it => ({
        id: it.id,
        ...it.data()
      }))
    };
  },
  all: () => [{slug: 'publikacije'}]
};
