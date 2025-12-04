// Install first:
// npm install firebase

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtjta9Q4RYxhNybUxTgyOsvlGgUUoPHzA",
  authDomain: "compliancexconsultants-adedc.firebaseapp.com",
  projectId: "compliancexconsultants-adedc",
  storageBucket: "compliancexconsultants-adedc.firebasestorage.app",
  messagingSenderId: "898997600044",
  appId: "1:898997600044:web:7925851e58a07551d73689",
  measurementId: "G-KLVJ4F3GC3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
