const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const services = await fs.collection('services').get();

    return {
      services: services.docs.map(it => {
        const {title, content} = it.data();
        return {title, content};
      })
    };
  },
  all: () => [{slug: 'usluge'}]
};
