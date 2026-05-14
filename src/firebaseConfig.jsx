import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWhvu1q1zp1FrX0tXbziQZcTwtVG9c4dM",
  authDomain: "eskamaq.firebaseapp.com",
  projectId: "eskamaq",
  storageBucket: "eskamaq.appspot.com",
  messagingSenderId: "919729566287",
  appId: "1:919729566287:web:989ea6a200314514c1f03a",
  measurementId: "G-BV0VDEHVQV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;