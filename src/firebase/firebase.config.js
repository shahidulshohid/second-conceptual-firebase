// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgELWwWGhC423KgdMw6LM4b3tuHyeX2DA",
  authDomain: "second-conceptual-fireba-1e0e7.firebaseapp.com",
  projectId: "second-conceptual-fireba-1e0e7",
  storageBucket: "second-conceptual-fireba-1e0e7.firebasestorage.app",
  messagingSenderId: "850107727359",
  appId: "1:850107727359:web:f75fa2fc545c244b6ffbca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
