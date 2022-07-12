import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// `${process.env.REACT_APP_FIREBASE_API_KEY}`
const firebaseConfig = {
    apiKey: "AIzaSyALOsW5mTttSY46sI5HYnD2fuKd9pL_GYU",
    authDomain: "fir-auth-6810f.firebaseapp.com",
    projectId: "fir-auth-6810f",
    storageBucket: "fir-auth-6810f.appspot.com",
    messagingSenderId: "343339495105",
    appId: "1:343339495105:web:11eb5545111f81cb386e40"
  };

  
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
