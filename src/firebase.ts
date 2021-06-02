import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';


const firebaseConfig = {
    apiKey: "AIzaSyDixW82MRbObFD92dyJyNQwGV8zWRixMsA",
    authDomain: "firestore-todo-34dbb.firebaseapp.com",
    projectId: "firestore-todo-34dbb",
    storageBucket: "firestore-todo-34dbb.appspot.com",
    messagingSenderId: "304887019609",
    appId: "1:304887019609:web:f4abc9a8792fb918ced948"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, marcaTiempo, firebase }