import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3NdW4zyyHWLX_sHXfVJ-_1llco0HcmXc",
  authDomain: "tcc---iubs.firebaseapp.com",
  projectId: "tcc---iubs",
  storageBucket: "tcc---iubs.appspot.com",
  messagingSenderId: "82300384414",
  appId: "1:82300384414:web:2f1ce6124e1a9a19d7f78f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);