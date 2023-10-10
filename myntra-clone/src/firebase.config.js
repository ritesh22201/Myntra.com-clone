import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY1BrkVJinAcpJyIgI721jQQ0q0An_AP0",
  authDomain: "myntra-clone-project-b6162.firebaseapp.com",
  projectId: "myntra-clone-project-b6162",
  storageBucket: "myntra-clone-project-b6162.appspot.com",
  messagingSenderId: "890403662572",
  appId: "1:890403662572:web:6263d2d496f51ebb3053c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
