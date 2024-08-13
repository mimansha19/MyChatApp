// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAAPfyJ9FNaC5PgeOKf7hYmlQMXCBAROFY",
  authDomain: "chatapp2024-3eb87.firebaseapp.com",
  projectId: "chatapp2024-3eb87",
  storageBucket: "chatapp2024-3eb87.appspot.com",
  messagingSenderId: "20583828835",
  appId: "1:20583828835:web:618989d3ec4d9a9e471756",
  measurementId: "G-8NMLTJJ271"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const db = getFirestore(app);