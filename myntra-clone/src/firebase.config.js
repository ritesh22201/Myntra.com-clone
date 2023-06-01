// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbvv_R3o5WzKTo78LhYmVZklsiwyYH2FQ",
  authDomain: "giant-jupiter.firebaseapp.com",
  projectId: "giant-jupiter",
  storageBucket: "giant-jupiter.appspot.com",
  messagingSenderId: "1012110105195",
  appId: "1:1012110105195:web:0f16729731ffb811556f2e",
  measurementId: "G-E1VP9JGSBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);