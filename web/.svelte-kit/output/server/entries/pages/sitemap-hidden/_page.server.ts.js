import { b as blogData } from "../../../chunks/blog.js";
import { f as firestore } from "../../../chunks/firebase-admin.js";
const load = async () => {
  const { articles, authors } = await blogData();
  const { docs } = await firestore.collection("pages").where("active", "==", true).get();
  return {
    pages: docs.map((doc) => {
      const dt = doc.data();
      return {
        title: dt.title,
        url: dt.url
      };
    }),
    blog: {
      articles,
      authors
    }
  };
};
export {
  load
};
