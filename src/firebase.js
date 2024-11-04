import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATQXI6JdvrRrDOnEQwm8Zkl6L_H9D9p5w",
  authDomain: "upskillfam.firebaseapp.com",
  projectId: "upskillfam",
  storageBucket: "upskillfam.appspot.com",
  messagingSenderId: "502712882651",
  appId: "1:502712882651:web:d7b51c80f4af74a376c3fe",
  measurementId: "G-0PB22B45ES"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const firestore = getFirestore(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup };
