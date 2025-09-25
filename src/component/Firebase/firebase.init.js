// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGeOco_56jpf5YZzxKOUKYJmVl07sjEWI",
  authDomain: "my-coffee-server-11c38.firebaseapp.com",
  projectId: "my-coffee-server-11c38",
  storageBucket: "my-coffee-server-11c38.firebasestorage.app",
  messagingSenderId: "435241043229",
  appId: "1:435241043229:web:8876fd6e7cb47e709d8df4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
