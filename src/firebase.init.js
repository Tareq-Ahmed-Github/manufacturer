// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkMwPui-UIMIrIgEz3ca9eteL0RJgVi5s",
    authDomain: "manufacturer-58509.firebaseapp.com",
    projectId: "manufacturer-58509",
    storageBucket: "manufacturer-58509.appspot.com",
    messagingSenderId: "13526494626",
    appId: "1:13526494626:web:970c5ca6310b6e7f6816fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;