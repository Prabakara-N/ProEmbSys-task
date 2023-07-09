import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNizkTL74SE4Mu4DKQqw-4g161EjXojzw",
  authDomain: "react-authendication.firebaseapp.com",
  projectId: "react-authendication",
  storageBucket: "react-authendication.appspot.com",
  messagingSenderId: "31161923510",
  appId: "1:31161923510:web:ac7597ec82ffc3fa0ff317",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const firestore = getFirestore(app);

export { db, firestore };
