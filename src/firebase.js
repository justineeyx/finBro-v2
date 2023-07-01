// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc4StBdHFS-eVtKK_QHndlG5iovU6vvjU",
  authDomain: "finbro-72a70.firebaseapp.com",
  projectId: "finbro-72a70",
  storageBucket: "finbro-72a70.appspot.com",
  messagingSenderId: "614003877266",
  appId: "1:614003877266:web:0bf2bc0352b001d8280d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);