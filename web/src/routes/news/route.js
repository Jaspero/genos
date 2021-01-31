const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const news = await fs.collection('news')
      .orderBy('news', 'desc')
      .limit(11)
      .get();

    return {
      news: news.docs.map(it => ({
        id: it.id,
        ...it.data()
      }))
    };
  },
  all: () => [{slug: 'novosti'}]
};
