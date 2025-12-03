// Install first:
// npm install firebase

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDimDlSCh16Va99fTU-UHGVy-LD6FsuMDY",
  authDomain: "jmlegalhub.firebaseapp.com",
  projectId: "jmlegalhub",
  storageBucket: "jmlegalhub.firebasestorage.app",
  messagingSenderId: "13196761748",
  appId: "1:13196761748:web:563bdfc8282d45380c3281",
  measurementId: "G-NW2ND5D8CJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
