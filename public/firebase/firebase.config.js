// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtFJBbpf65gexij0lK9ea8fjgXNTRgWPo",
  authDomain: "dragon-news-14043.firebaseapp.com",
  projectId: "dragon-news-14043",
  storageBucket: "dragon-news-14043.firebasestorage.app",
  messagingSenderId: "242569135759",
  appId: "1:242569135759:web:514f9742e2a2d520bb12fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
