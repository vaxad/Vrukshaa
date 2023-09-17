// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ueKmrX7_jIFu3OFJp9H4GMf2phV_Moo",
  authDomain: "test00-f7915.firebaseapp.com",
  projectId: "test00-f7915",
  storageBucket: "test00-f7915.appspot.com",
  messagingSenderId: "502615549061",
  appId: "1:502615549061:web:f9ec9c60daad2911bb75ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

