import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGcAMGlfc95EuvqtcvPyljxc7g1gsVJQs",
  authDomain: "my-rn--project.firebaseapp.com",
  projectId: "my-rn--project",
  storageBucket: "my-rn--project.appspot.com",
  messagingSenderId: "322698884210",
  appId: "1:322698884210:web:296563170d3e6948553eeb",
  measurementId: "G-1N9PGLPBK4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
