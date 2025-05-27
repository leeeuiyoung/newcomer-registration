
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhUpZCNmorIaROzu1MbRY_H_wfjkoSKKg",
  authDomain: "newcomer-registration.firebaseapp.com",
  projectId: "newcomer-registration",
  storageBucket: "newcomer-registration.firebasestorage.app",
  messagingSenderId: "130912078772",
  appId: "1:130912078772:web:abc285526bef8489d840e1",
  measurementId: "G-F1NLV4PL20"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
