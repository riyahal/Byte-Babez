// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKGRAqe7XBlicVzYfLWpogcRueutJIGtA",
  authDomain: "bit-plaza.firebaseapp.com",
  projectId: "bit-plaza",
  storageBucket: "bit-plaza.firebasestorage.app",
  messagingSenderId: "723568559363",
  appId: "1:723568559363:web:5d3475a2723644e240d536",
  measurementId: "G-QHQ47HQ36Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services (or app)
export { auth, db };