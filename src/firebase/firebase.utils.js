import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATILxx2CWSwumAhK3gx9HDpFEK3ObBsIM",
  authDomain: "mymindecom.firebaseapp.com",
  projectId: "mymindecom",
  storageBucket: "mymindecom.appspot.com",
  messagingSenderId: "1085452382769",
  appId: "1:1085452382769:web:4e517a62e4b9599956db10",
  measurementId: "G-ESHZ5RLJW9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
