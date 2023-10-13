// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9mmbW8oa3fVd4B0iL0BanOyjCM9s3vSQ",
  authDomain: "edl-chat.firebaseapp.com",
  databaseURL: "https://edl-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "edl-chat",
  storageBucket: "edl-chat.appspot.com",
  messagingSenderId: "536580411933",
  appId: "1:536580411933:web:99e6cbbb13cb00399decf4",
  measurementId: "G-VFB82KKTW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);