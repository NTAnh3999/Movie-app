// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
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
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "moview-app-2659e.firebaseapp.com",
  projectId: "moview-app-2659e",
  storageBucket: "moview-app-2659e.appspot.com",
  messagingSenderId: "1046898005403",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
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
export const uploadImageToStorage = async function (image) {
  const imageRef = ref(storage, image.name);
  const uploadTask = uploadBytesResumable(imageRef, image);
  return uploadTask;
};
export const getUserRef = async function (auth) {
  const userRef = doc(db, "users", auth.uid);
  try {
    const userDoc = await getDoc(userRef);
    return userDoc.data();
  } catch (err) {
    console.err(err.message);
  }
};

export const addNewWishlist = async function (auth, movie) {
  const userRef = doc(db, "users", auth.uid);
  try {
    const userDoc = await getDoc(userRef);
    await updateDoc(userRef, {
      wishList: [...userDoc.data().wishList, movie],
    });
    return movie;
  } catch (err) {
    console.error(err.message);
  }
};
export const deleteBookmarkItem = async function (auth, deletedMovie) {
  const userRef = doc(db, "users", auth.uid);
  try {
    const userDoc = await getDoc(userRef);
    const newWishList = userDoc
      .data()
      ?.wishList?.filter((movie) => movie.id !== deletedMovie.id);
    await updateDoc(userRef, { wishList: newWishList });
    return newWishList;
  } catch (err) {
    console.error(err.message);
  }
};
