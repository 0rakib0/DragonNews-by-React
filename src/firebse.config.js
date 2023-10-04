// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkYIpz0y5ZEDezfkm-sGc_msE5iYi8Ukc",
  authDomain: "react-news-paper.firebaseapp.com",
  projectId: "react-news-paper",
  storageBucket: "react-news-paper.appspot.com",
  messagingSenderId: "961132007127",
  appId: "1:961132007127:web:a445ddc3bccdbaffbeaa92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;