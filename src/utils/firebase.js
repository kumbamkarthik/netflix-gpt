// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBveofVHkTErnFPloapzjMsFyHChFCB-sA",
  authDomain: "netflixgpt-162f6.firebaseapp.com",
  projectId: "netflixgpt-162f6",
  storageBucket: "netflixgpt-162f6.appspot.com",
  messagingSenderId: "236139498779",
  appId: "1:236139498779:web:acc4c0e6e3c3a0e96f97be",
  measurementId: "G-3G1ZJPRPNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

export default firebase;