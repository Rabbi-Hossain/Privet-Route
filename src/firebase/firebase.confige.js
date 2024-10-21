// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhZNMTLAm_B_gge614xM969H32vEZ5bXY",
  authDomain: "moha-milon-1e53c.firebaseapp.com",
  projectId: "moha-milon-1e53c",
  storageBucket: "moha-milon-1e53c.appspot.com",
  messagingSenderId: "745519781338",
  appId: "1:745519781338:web:3a9753f382b8440429dce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth