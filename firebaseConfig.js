// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfxiBzAcbGY0paKUuBjcqSDoyjhl1cys4",
  authDomain: "videogame-login.firebaseapp.com",
  projectId: "videogame-login",
  storageBucket: "videogame-login.appspot.com",
  messagingSenderId: "894581591632",
  appId: "1:894581591632:web:64451aec993f3508dc4b55",
  measurementId: "G-W6RHK76ZRX"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);