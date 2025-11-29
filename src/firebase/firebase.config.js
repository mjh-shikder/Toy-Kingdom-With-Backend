import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyADMwpxXZjFip-lspZrb_JjR8GQPX3Zgkw",
  authDomain: "toy-kingdom-a09.firebaseapp.com",
  projectId: "toy-kingdom-a09",
  storageBucket: "toy-kingdom-a09.firebasestorage.app",
  messagingSenderId: "458045951076",
  appId: "1:458045951076:web:ab50aeda149f60dfa56371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

