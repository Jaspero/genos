import { b as blogData } from "../../../../chunks/blog.js";
import { r as redirect } from "../../../../chunks/index.js";
import "../../../../chunks/firebase-admin.js";
const load = async ({ params }) => {
  const { articles } = await blogData();
  const article = articles.find((it) => it.url === params.id);
  if (!article) {
    return redirect(303, "/404");
  }
  const data = {
    header: "",
    footer: "",
    article
  };
  const toLoad = [];
  await Promise.all(toLoad);
  return data;
};
export {
  load
};
