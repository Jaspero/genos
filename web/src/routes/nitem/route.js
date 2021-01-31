module.exports = {
  data: async ({request, data}) => data.shared.news.find(it => it.id === request.slug),
  permalink: ({request}) => `/novosti/${request.slug}`,
  all: ({data}) => data.shared.news.map(({id}) => ({slug: id}))
};
