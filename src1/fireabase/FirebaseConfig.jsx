
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUNnGmkJ5XNJJV3ZAj82t9jQ98X5wqXes",
  authDomain: "ashish-772cd.firebaseapp.com",
  projectId: "ashish-772cd",
  storageBucket: "ashish-772cd.appspot.com",
  messagingSenderId: "196331977752",
  appId: "1:196331977752:web:cea379ca20670c1381576d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;

 






