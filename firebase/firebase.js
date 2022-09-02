import { initializeApp } from "firebase/app"
import { getAnalytics, logEvent } from "firebase/analytics"
const firebaseConfig = {
  apiKey: "AIzaSyDF4490c7nCn8G16n_FlaAWAiv0_1esOLE",
  authDomain: "cai-toy.firebaseapp.com",
  projectId: "cai-toy",
  storageBucket: "cai-toy.appspot.com",
  messagingSenderId: "742076604482",
  appId: "1:742076604482:web:26bc2775138c1ee6e28ddb",
  measurementId: "G-6T0GKYLR39",
}
const firebase = initializeApp(firebaseConfig)

export default firebase
