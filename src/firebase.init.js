// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjeOeEaJTT0ePKeKtkSKVgN8kJws6r4U0",
  authDomain: "nextgenjob-2f685.firebaseapp.com",
  projectId: "nextgenjob-2f685",
  storageBucket: "nextgenjob-2f685.appspot.com",
  messagingSenderId: "875059957067",
  appId: "1:875059957067:web:88484cb19503aca3bc6cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);
export default auth;