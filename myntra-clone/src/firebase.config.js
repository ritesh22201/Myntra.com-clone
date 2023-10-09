import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyAbvv_R3o5WzKTo78LhYmVZklsiwyYH2FQ",
  // authDomain: "giant-jupiter.firebaseapp.com",
  // projectId: "giant-jupiter",
  // storageBucket: "giant-jupiter.appspot.com",
  // messagingSenderId: "1012110105195",
  // appId: "1:1012110105195:web:0f16729731ffb811556f2e",
  // measurementId: "G-E1VP9JGSBT"
  apiKey: "AIzaSyAUJS_WzjiwLd3Rto4M9VFFTHnq9BDrYnE",
  authDomain: "myntra-clone-f2d04.firebaseapp.com",
  projectId: "myntra-clone-f2d04",
  storageBucket: "myntra-clone-f2d04.appspot.com",
  messagingSenderId: "641009424951",
  appId: "1:641009424951:web:dc1bcd2c64c38182c27db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);