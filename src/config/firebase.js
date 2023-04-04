import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/storage";


// its  dumb and fake data replace with orginal firebase config files 
const firebaseConfig = {
  apiKey: "AIzaSyCj6bYfjhvAa7oZpn1LAD5hnnINF6Z9qeA",
  authDomain: "showpingkart.firebaseapp.com",
  projectId: "showpingkart",
  storageBucket: "showpingkart.appspot.com",
  messagingSenderId: "483419608950",
  appId: "1:483419608950:web:de1573d4f9e8d15b0f0c57"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
