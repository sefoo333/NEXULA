// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWIfQwBELryxORjXOjsOADIWfiWNVwOec",
  authDomain: "tedx-13ca7.firebaseapp.com",
  projectId: "tedx-13ca7",
  storageBucket: "tedx-13ca7.firebasestorage.app",
  messagingSenderId: "891212161376",
  appId: "1:891212161376:web:dbb877e26cdf29e5093e05",
  measurementId: "G-ETTYSBBMCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);