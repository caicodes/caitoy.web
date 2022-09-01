// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF4490c7nCn8G16n_FlaAWAiv0_1esOLE",
  authDomain: "cai-toy.firebaseapp.com",
  projectId: "cai-toy",
  storageBucket: "cai-toy.appspot.com",
  messagingSenderId: "742076604482",
  appId: "1:742076604482:web:26bc2775138c1ee6e28ddb",
  measurementId: "G-6T0GKYLR39",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
