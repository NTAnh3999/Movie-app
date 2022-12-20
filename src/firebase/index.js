// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore/lite";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, getStorage, uploadBytesResumable } from "firebase/storage";
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

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  login_hints: "user@example.com",
  prompt: "select_account",
});
const auth = getAuth(app);
const storage = getStorage(app);
export const loginWithGooglePopup = function () {
  return signInWithPopup(auth, googleProvider);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
export const createAuthUserFromEmailAndPassword = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginAuthUserWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (userAuth, addInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = serverTimestamp();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addInfo,
      });
    } catch (err) {
      console.err(err.message);
    }
  }
  return userDocRef;
};
export const uploadImageToStorage = function (image) {
  const imageRef = ref(storage, image);
  const uploadTask = uploadBytesResumable(imageRef, image);
  return uploadTask;
};
