// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBP6pDyAsQeE7qrvi-dLix42UbvJg6T9Ro",
  authDomain: "social-media-96966.firebaseapp.com",
  databaseURL: "https://social-media-96966.firebaseio.com",
  projectId: "social-media-96966",
  storageBucket: "social-media-96966.appspot.com",
  messagingSenderId: "554228329313",
  appId: "1:554228329313:web:071555757be25945073320",
  measurementId: "G-Z1K2981P8W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage().ref();

export { auth, provider, storage };
export default db;

