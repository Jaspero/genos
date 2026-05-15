import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { w as writable } from "./index2.js";
import { E as ENV_CONFIG } from "./env-config.js";
import { getFunctions } from "firebase/functions";
const firebaseApp = initializeApp(ENV_CONFIG.firebase);
const auth = getAuth(firebaseApp);
getStorage(firebaseApp);
const db = getFirestore(firebaseApp);
const functions = getFunctions(firebaseApp, ENV_CONFIG.region);
const authenticated = writable(null);
const user = writable(null);
onAuthStateChanged(auth, async (authUser) => {
  if (authUser) {
    try {
      const userRef = doc(db, "customers", authUser.uid);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        user.set({ id: authUser.uid, ...userData });
      } else {
        user.set({ id: authUser.uid });
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  } else {
    user.set(null);
  }
  authenticated.set(authUser ? authUser : false);
});
export {
  authenticated as a,
  functions as f,
  user as u
};
