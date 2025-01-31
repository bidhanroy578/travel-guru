// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiLxTO4O2UbKdDNYD7ZwlKC7bRKV1CBzg",
  authDomain: "travel-guru-broy.firebaseapp.com",
  projectId: "travel-guru-broy",
  storageBucket: "travel-guru-broy.firebasestorage.app",
  messagingSenderId: "420292475854",
  appId: "1:420292475854:web:87083da9cf5890d50b099f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);