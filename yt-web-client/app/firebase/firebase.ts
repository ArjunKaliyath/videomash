import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth"; //Adding auth related imports from firebase auth SDK 
//firebase is actually a service provider that provides various services like authentication, firestore database, real-time database, storage etc.
import { getFunctions } from "firebase/functions";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdFZQYAIo5Qp4wAQmEinrBIIeM6eBUPuo",
  authDomain: "yt-clone-82a10.firebaseapp.com",
  projectId: "yt-clone-82a10",
  appId: "1:168576336989:web:c1ce73d003edc2fed6b9b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app); // Initialize Firebase Authentication and get a reference to the service

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider()); //This function uses the signInWithPopup method from firebase auth SDK to sign in the user with a Google popup.
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
  return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback); //callback is a function that takes a user object or null as an argument and returns void.
}

export const functions = getFunctions(app);
