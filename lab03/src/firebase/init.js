// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDAioWutVC9ek5D0nWUNEskWjP2ADTQQ9M",
    authDomain: "piw-lab-39bf3.firebaseapp.com",
    projectId: "piw-lab-39bf3",
    storageBucket: "piw-lab-39bf3.appspot.com",
    messagingSenderId: "667242310370",
    appId: "1:667242310370:web:fae566a9a5e685fdd5ccbb",
    measurementId: "G-NGFW15GKF7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
