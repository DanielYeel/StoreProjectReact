// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQzvPpQzayUxAc8zAqZ-O_TOzEK5hKacY",
  authDomain: "storeprojectreact.firebaseapp.com",
  projectId: "storeprojectreact",
  storageBucket: "storeprojectreact.firebasestorage.app",
  messagingSenderId: "685702079302",
  appId: "1:685702079302:web:09f359ce80ae62be557b47",
  measurementId: "G-D3CJBEH5V1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;