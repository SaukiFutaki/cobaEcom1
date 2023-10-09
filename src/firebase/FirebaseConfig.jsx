// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ-wE_Sa9Us8cNMaJ7zit9LpyHY63wEow",
  authDomain: "myecomapp1-41163.firebaseapp.com",
  projectId: "myecomapp1-41163",
  storageBucket: "myecomapp1-41163.appspot.com",
  messagingSenderId: "704237115549",
  appId: "1:704237115549:web:47314c363ae99f58ccdc74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
