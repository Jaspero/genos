const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const team = await fs.collection('members').limit(11).get();

    return {
      members: team.docs.map(it => ({
        id: it.id,
        ...it.data()
      }))
    };
  },
  all: () => [{slug: 'tim'}]
};
