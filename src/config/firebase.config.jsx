// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHP-iMK_lHJOg0phU2zLLqlbkKq6pmquQ",
  authDomain: "tourism-app-looming.firebaseapp.com",
  projectId: "tourism-app-looming",
  storageBucket: "tourism-app-looming.appspot.com",
  messagingSenderId: "598205052610",
  appId: "1:598205052610:web:5ff810b1e77ca0e2ab2d5b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
