const {firestore} = require('firebase-admin');
const fs = firestore();

module.exports = {
  data: async () => {
    const [publications, projects, news, team, services] = await Promise.all ([
      fs.collection('publications').limit(5).get(),
      fs.collection('projects').limit(4).get(),
      fs.collection('news').limit(4).get(),
      fs.collection('team').get(),
      fs.collection('services').get(),
    ]);

    return {
      publications: publications.docs.map((it) => it.data()),
      projects: projects.docs.map((it) => it.data()),
      news: news.docs.map((it) => it.data()),
      team: team.docs.map((it) => it.data()),
      services: services.docs.map((it) => it.data()),
    };
  },
  all: () => [{slug: '/'}]
};
