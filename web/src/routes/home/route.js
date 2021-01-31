const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async ({data}) => {
    const [publications, members, services] = await Promise.all ([
      fs.collection('publications')
        .where('featured', '==', true)
        .orderBy('createdOn', 'desc')
        .limit(5)
        .get(),
      fs.collection('members')
        .orderBy('order', 'asc')
        .get(),
      fs.collection('services')
        .orderBy('createdOn', 'desc')
        .get(),
    ]);

    return {
      publications: publications.docs.map((it) => it.data()),
      projects: data.shared.projects.slice(0, 4)
        .map((it) => ({
          id: it.id,
          title: it.title,
          excerpt: it.excerpt
        })),
      news: data.shared.news.slice(0, 4).map((it) => ({
        id: it.id,
        createdOn: it.createdOn,
        title: it.title,
        subTitle: it.subTitle,
      })),
      members: members.docs.map(it => it.data()),
      services: services.docs.map((it) => it.data().title),
    };
  },
  all: () => [{slug: '/'}]
};
