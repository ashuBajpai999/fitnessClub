// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcAzfJ-TWgCeIMYYrsU_r6bE71exonrls",
  authDomain: "fitnessclub-386ac.firebaseapp.com",
  databaseURL: "https://fitnessclub-386ac-default-rtdb.firebaseio.com",
  projectId: "fitnessclub-386ac",
  storageBucket: "fitnessclub-386ac.appspot.com",
  messagingSenderId: "937508015054",
  appId: "1:937508015054:web:4931837d0a98a5b856f99f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
