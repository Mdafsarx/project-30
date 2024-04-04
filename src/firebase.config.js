// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP8qW82N7pMvamstWwbvw6AIa4Z09x6So",
  authDomain: "project-30-b2e7b.firebaseapp.com",
  projectId: "project-30-b2e7b",
  storageBucket: "project-30-b2e7b.appspot.com",
  messagingSenderId: "10464464234",
  appId: "1:10464464234:web:6807351867959987b5e913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth