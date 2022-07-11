import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-auth-6810f.firebaseapp.com",
  projectId: "fir-auth-6810f",
  storageBucket: "fir-auth-6810f.appspot.com",
  messagingSenderId: "343339495105",
  appId: "1:343339495105:web:11eb5545111f81cb386e40"
};

const app = initializeApp(firebaseConfig);