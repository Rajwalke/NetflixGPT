// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-RhhNNZ2r99lHXbzhNMDHgnZ7xHO8JoY",
  authDomain: "netflixgpt-77033.firebaseapp.com",
  projectId: "netflixgpt-77033",
  storageBucket: "netflixgpt-77033.firebasestorage.app",
  messagingSenderId: "265277244256",
  appId: "1:265277244256:web:d19ebbeb55dc2c46bfd405",
  measurementId: "G-0NPFVSXMV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//  export const auth = getAuth();
export default app;