import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage";


// its  dumb and fake data replace with orginal firebase config files 
const firebaseConfig = {
  apiKey: "AIzaSyD0pjTfXfTjDC88P1fTuWpWbg7t6INX2KY",
  authDomain: "ekart-6ef16.firebaseapp.com",
  projectId: "ekart-6ef16",
  storageBucket: "ekart-6ef16.appspot.com",
  messagingSenderId: "710530319329",
  appId: "1:710530319329:web:61cd6af90a8d2e49c648a0"
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
