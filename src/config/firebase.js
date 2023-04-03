import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage";


// its  dumb and fake data replace with orginal firebase config files 
const firebaseConfig = {
  apiKey: "AIzaSyD0pjTfXfTjDC88P1",
  authDomain: "ekart-6ef16.fakebaseapp.com",
  projectId: "ekart-06ef16",
  storageBucket: "ekart.fake.appspot.com",
  messagingSenderId: "710519329",
  appId: "1:61cd6af90a8d2e49c648a0"
}
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
