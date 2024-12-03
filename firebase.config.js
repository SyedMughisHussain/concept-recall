// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_XDYkqD-54TJXgSc1k6jfTBzA18tpreE",
  authDomain: "concept-recall-23c57.firebaseapp.com",
  projectId: "concept-recall-23c57",
  storageBucket: "concept-recall-23c57.firebasestorage.app",
  messagingSenderId: "967598777665",
  appId: "1:967598777665:web:bea770b993d0f38c192dc0",
  measurementId: "G-R3R6MQL3VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);