// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyD-pMvkADR3u29rJMOPYxhVkrpiTQZmUdM",
authDomain: "blogproject-cdaaf.firebaseapp.com",
projectId: "blogproject-cdaaf",
storageBucket: "blogproject-cdaaf.appspot.com",
messagingSenderId: "513879693374",
appId: "1:513879693374:web:01abc90392f3ae7e21996f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();