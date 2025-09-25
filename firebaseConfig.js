// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// 👇 Replace with your own Firebase config (from Firebase Console)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4LRSh9BCrbhzuX58EXNBFiLx1KoOIq0",
  authDomain: "fuelmap-60989.firebaseapp.com",
  databaseURL: "https://fuelmap-60989-default-rtdb.firebaseio.com",
  projectId: "fuelmap-60989",
  storageBucket: "fuelmap-60989.firebasestorage.app",
  messagingSenderId: "201855370607",
  appId: "1:201855370607:web:71e3343b6bddca920cd49a",
  measurementId: "G-52N549X9H2"
};


const app = initializeApp(firebaseConfig);

// ✅ Export database correctly
const database = getDatabase(app);
export { database };
