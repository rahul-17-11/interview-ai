// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3UGGDAiaGMQyQeW3OLIuLQ5vhiRj5RFU",
  authDomain: "interviewai-9b63d.firebaseapp.com",
  projectId: "interviewai-9b63d",
  storageBucket: "interviewai-9b63d.firebasestorage.app",
  messagingSenderId: "533477695022",
  appId: "1:533477695022:web:1ae9dbe8c8e816d21109bf",
  measurementId: "G-JBS84NVCEL",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
