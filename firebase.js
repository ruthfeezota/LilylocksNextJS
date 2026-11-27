import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyAvobcqAbBG_1WPwdF2Hu964RE1_iCFzRg",
  authDomain: "lilylocks-main-website.firebaseapp.com",
  projectId: "lilylocks-main-website",
  storageBucket: "lilylocks-main-website.firebasestorage.app",
  messagingSenderId: "283211065148",
  appId: "1:283211065148:web:39d4433dc7255f684ee039",
  measurementId: "G-MB9567XP1P"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); 

export { db, auth, storage, analytics, collection, addDoc };
