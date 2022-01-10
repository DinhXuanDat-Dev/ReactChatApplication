import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACbmiIX_G1lyExgOjGVaYSSBaXkS-xmNk",
  authDomain: "chat-app-f673b.firebaseapp.com",
  projectId: "chat-app-f673b",
  storageBucket: "chat-app-f673b.appspot.com",
  messagingSenderId: "927642343254",
  appId: "1:927642343254:web:9a98c4d9ab2b030ee928f7",
  measurementId: "G-1QF47HL5XN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db};
export default firebase;