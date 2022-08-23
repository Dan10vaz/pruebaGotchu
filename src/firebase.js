// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBUFGmeBf81-Ih-0aGsMTxE-5z3cPvmWUE",
    authDomain: "prueba-tecnica-c1d11.firebaseapp.com",
    projectId: "prueba-tecnica-c1d11",
    storageBucket: "prueba-tecnica-c1d11.appspot.com",
    messagingSenderId: "192111232744",
    appId: "1:192111232744:web:a4c8bf7cc219c463c1ab5d",
    measurementId: "G-MVV9BY32XK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
/* const analytics = getAnalytics(app); */