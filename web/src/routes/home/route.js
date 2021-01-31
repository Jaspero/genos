const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const [publications, projects, news, members, services] = await Promise.all ([
      fs.collection('publications')
        .where('featured', '==', true)
        .orderBy('createdOn', 'desc')
        .limit(5)
        .get(),
      fs.collection('projects')
        .orderBy('createdOn', 'desc')
        .limit(4)
        .get(),
      fs.collection('news')
        .orderBy('createdOn', 'desc')
        .limit(4)
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
      projects: projects.docs
        .map((it) => {
          const item = it.data();

          return {
            id: it.id,
            title: item.title,
            excerpt: item.excerpt
          }
        }),
      news: news.docs.map((it) => {
        const item = it.data();

        return {
          id: item.id,
          createdOn: item.createdOn,
          title: item.title,
          subTitle: item.subTitle,
        }
      }),
      members: members.docs.map(it => it.data()),
      services: services.docs.map((it) => it.data().title),
    };
  },
  all: () => [{slug: '/'}]
};
