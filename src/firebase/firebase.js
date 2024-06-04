import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg7MuGr_xyAOiOFltAjwRcKrx3vwRLtTg",
  authDomain: "insta-clone-0311.firebaseapp.com",
  projectId: "insta-clone-0311",
  storageBucket: "insta-clone-0311.appspot.com",
  messagingSenderId: "325437478289",
  appId: "1:325437478289:web:00fb4e17cae50eb65e7630",
  measurementId: "G-3MG5L4F42D",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
