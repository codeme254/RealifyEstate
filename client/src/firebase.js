// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-9aedb.firebaseapp.com",
  projectId: "realestate-9aedb",
  storageBucket: "realestate-9aedb.appspot.com",
  messagingSenderId: "963805565081",
  appId: "1:963805565081:web:6c19cb2979beb24b7c2808",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
