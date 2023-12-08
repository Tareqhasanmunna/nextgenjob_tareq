// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCvheKp_i_LhjczSHxdl7N7GR1ntLLZahk",
  authDomain: "nextgenjob-codecanva.firebaseapp.com",
  projectId: "nextgenjob-codecanva",
  storageBucket: "nextgenjob-codecanva.appspot.com",
  messagingSenderId: "148665060434",
  appId: "1:148665060434:web:607fba41f33cb46fda638b",
  measurementId: "G-QV3NVL6MJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth (app);
export default auth;
