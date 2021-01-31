module.exports = {
  data: async ({request, data}) => data.shared.projects.find(it => it.id === request.slug),
  permalink: ({request}) => `/projekti/${request.slug}`,
  all: ({data}) => data.shared.projects.map(({id}) => ({slug: id}))
};
