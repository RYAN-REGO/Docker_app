// firebaseConfig.js

import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "storyard-16cf8.firebaseapp.com",
  projectId: "storyard-16cf8",
  storageBucket: "storyard-16cf8.appspot.com",
  messagingSenderId: "709984997831",
  appId: "1:709984997831:web:acf3f3f916bbfa8565c9e2",
  measurementId: "G-DTJ1DC52FB"
};

const app = initializeApp(firebaseConfig);
const imageDb = getStorage(app);

export {imageDb, app}