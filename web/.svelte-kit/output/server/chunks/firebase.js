import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { w as writable } from "./index2.js";
import { getFunctions } from "firebase/functions";
const ENV_CONFIG = {
  firebase: {
    apiKey: "AIzaSyB1wW9Hh8dvPOvXpaHFahMI3p-yMQMgx4M",
    authDomain: "genos-ec52a.firebaseapp.com",
    projectId: "genos-ec52a",
    storageBucket: "genos-ec52a.firebasestorage.app",
    messagingSenderId: "544288786381",
    appId: "1:544288786381:web:75c86003e37636bc6c2684",
    measurementId: "G-7V96J4SS0Q"
  },
  region: "europe-west1"
};
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
  auth as a,
  authenticated as b,
  functions as f,
  user as u
};
