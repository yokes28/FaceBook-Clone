import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDG9YDe3Hd6nqxDN8DH4a7UO6W5lYfxRAE",
  authDomain: "facebook-rebuild.firebaseapp.com",
  projectId: "facebook-rebuild",
  storageBucket: "facebook-rebuild.appspot.com",
  messagingSenderId: "514202080669",
  appId: "1:514202080669:web:2804657b2906bf36220b74",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
