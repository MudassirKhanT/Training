// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Hzwid5Zw4pHJ0q74z64SnZQFzVcofxk",
  authDomain: "auth-service-632ef.firebaseapp.com",
  projectId: "auth-service-632ef",
  storageBucket: "auth-service-632ef.firebasestorage.app",
  messagingSenderId: "578437601751",
  appId: "1:578437601751:web:4642cf7c3cbc89c0571392",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth();
export const dataBase = getFirestore(app);
