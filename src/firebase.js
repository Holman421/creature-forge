// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDd6FeXKGFFZc8UlRVYx8ge5FzflmtEmA",
  authDomain: "creature-forge.firebaseapp.com",
  projectId: "creature-forge",
  storageBucket: "creature-forge.appspot.com",
  messagingSenderId: "1011734402281",
  appId: "1:1011734402281:web:500d5646871e2e9324cc78",
  measurementId: "G-TG29C9MNQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);