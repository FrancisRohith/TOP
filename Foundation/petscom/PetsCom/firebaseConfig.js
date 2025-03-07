// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOG2Lc68i0AMx8sCQ8a-FFn85R3sRP7g4",
  authDomain: "petscom-94291.firebaseapp.com",
  projectId: "petscom-94291",
  storageBucket: "petscom-94291.firebasestorage.app",
  messagingSenderId: "227108233086",
  appId: "1:227108233086:web:aa15ffba7849ee4d835d2f",
  measurementId: "G-WYCDN18MTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);