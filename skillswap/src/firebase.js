import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnVhM5MIdolr6cha5HAG5ivsD2zOfSZ5E",
  authDomain: "swipeit-dd9f0.firebaseapp.com",
  projectId: "swipeit-dd9f0",
  storageBucket: "swipeit-dd9f0.firebasestorage.app",
  messagingSenderId: "605623456631",
  appId: "1:605623456631:web:c2afe8419c0eb310518772",
  measurementId: "G-M3NQHVXTVF"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);