import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage";


// its  dumb and fake data replace with orginal firebase config files 
const firebaseConfig = {
  apiKey: "AIzaSyBG0Wg3MvnJhd_Spc05jwhs5njtbCh2AE8",
  authDomain: "show-ping-kart.firebaseapp.com",
  projectId: "show-ping-kart",
  storageBucket: "show-ping-kart.appspot.com",
  messagingSenderId: "746496525225",
  appId: "1:746496525225:web:9ef07c90dbefcc3115fab8",
  measurementId: "G-58B0Q5W1D9"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
