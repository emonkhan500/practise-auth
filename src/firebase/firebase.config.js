// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ZyHtxbZ87rFTtmLEEDi6MIsOliHhdhw",
  authDomain: "email-pass-project-11395.firebaseapp.com",
  projectId: "email-pass-project-11395",
  storageBucket: "email-pass-project-11395.appspot.com",
  messagingSenderId: "837206274763",
  appId: "1:837206274763:web:2cfc13a1a1b94d1e4e614e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;