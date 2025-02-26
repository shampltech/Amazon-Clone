// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDve7yhHedj_malvkTyPB5-37MsjSPkAFk",
  authDomain: "clone-83faf.firebaseapp.com",
  projectId: "clone-83faf",
  storageBucket: "clone-83faf.firebasestorage.app",
  messagingSenderId: "53470120980",
  appId: "1:53470120980:web:26ff10bd44a93e1c476b01",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()