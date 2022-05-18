// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_OfpubgH2knreYf5S3j7ts0C7lZCbQGY",
    authDomain: "todolist-a8119.firebaseapp.com",
    projectId: "todolist-a8119",
    storageBucket: "todolist-a8119.appspot.com",
    messagingSenderId: "940933524405",
    appId: "1:940933524405:web:a019249d1efd45df6d07fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth