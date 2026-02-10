import { r as redirect } from "./index.js";
import { a as authenticated } from "./firebase.js";
async function redirectAuthorized(path = "/") {
  const user = await new Promise((resolve) => {
    const unsub = authenticated.subscribe((data) => {
      if (data === null) {
        return;
      }
      try {
        unsub();
      } catch {
      }
      resolve(data);
    });
  });
  if (user) {
    redirect(301, path);
  }
  return user;
}
export {
  redirectAuthorized as r
};
