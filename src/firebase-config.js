import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5KFgG2UgmHspATEa3EIG007T6hVf0Sw4",
  authDomain: "restaurant-c88d0.firebaseapp.com",
  projectId: "restaurant-c88d0",
  storageBucket: "restaurant-c88d0.appspot.com",
  messagingSenderId: "760488211015",
  appId: "1:760488211015:web:2ba5878442755e2673f762",
  measurementId: "G-ZV6H9CXV0B"
};

// Initialize Firebase Connection
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);