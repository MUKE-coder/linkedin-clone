import "firebase/compat/auth";

import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlLsNcTcITtRs37IbfW8XAcywXS-9i2Co",
  authDomain: "linkedin-clone-f75ff.firebaseapp.com",
  projectId: "linkedin-clone-f75ff",
  storageBucket: "linkedin-clone-f75ff.appspot.com",
  messagingSenderId: "214595392556",
  appId: "1:214595392556:web:9885d32b167e4e942d6d89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
