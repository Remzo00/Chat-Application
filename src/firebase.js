import firebase from 'firebase/compat'

 const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9j4TflFfN3MN_e79jiDN0_-a9KPucDKg",
  authDomain: "chatapp-e35f5.firebaseapp.com",
  projectId: "chatapp-e35f5",
  storageBucket: "chatapp-e35f5.appspot.com",
  messagingSenderId: "612490214117",
  appId: "1:612490214117:web:11f05b1ceea9e361ab320c",
  measurementId: "G-3C0426DG3H"
})

const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db}