import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage";


// its  dumb and fake data replace with orginal firebase config files 
const firebaseConfig = {
  apiKey: "AIzaSyD0pjTfXfTjDC88P1f",
  authDomain: "ekart-6ef16.fakebaseapp.com",
  projectId: "ekart-6ef",
  storageBucket: "ekartappspot.com",
  messagingSenderId: "7105303100",
  appId: "1:710530319329:c648a0"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
