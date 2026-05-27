import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
 apiKey: "AIzaSyCJgwdqnSr4JkGslMnzfNSGwsQDf11JJ3c",
  authDomain: "lilylockswebsite.firebaseapp.com",
  projectId: "lilylockswebsite",
  storageBucket: "lilylockswebsite.firebasestorage.app",
  messagingSenderId: "170663434526",
  appId: "1:170663434526:web:6b45f6e6df9a2e4f8e510f",
  measurementId: "G-1VBRLV7851"


  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); 

export { db, auth, storage, analytics, collection, addDoc };
