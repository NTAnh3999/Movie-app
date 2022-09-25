// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { googleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACJfo3rRfemNnloG7VuKBa3bqnBZpAelI",
    authDomain: "moview-app-2659e.firebaseapp.com",
    projectId: "moview-app-2659e",
    storageBucket: "moview-app-2659e.appspot.com",
    messagingSenderId: "1046898005403",
    appId: "1:1046898005403:web:1d820345699385d7befd3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const provider = new googleAuthProvider();

provider.setCustomParameters({
    login_hints: "user@example.com",
});
