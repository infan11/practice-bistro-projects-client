// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: meta.env.VITE_apiKey,
  authDomain: meta.env.VITE_authDomain,
  projectId: meta.env.VITE_projectId,
  storageBucket: meta.env.VITE_storageBucket,
  messagingSenderId: meta.env.VITE_messagingSenderIdy,
  appId: meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);