import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC3NdW4zyyHWLX_sHXfVJ-_1llco0HcmXc",
  authDomain: "tcc---iubs.firebaseapp.com",
  projectId: "tcc---iubs",
  storageBucket: "tcc---iubs.appspot.com",
  messagingSenderId: "82300384414",
  appId: "1:82300384414:web:2f1ce6124e1a9a19d7f78f"
};

// Certifique-se de que essa inicialização acontece apenas uma vez
const app = initializeApp(firebaseConfig);

// Certifique-se de que essas chamadas são feitas onde necessário
const database = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, database, auth, storage };
