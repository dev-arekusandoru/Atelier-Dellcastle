// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// imagesRef now points to 'images'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCEn7-v4ChAifU7LDlL7Oh8oeem7FFYlc",
  authDomain: "atelierdellcastle-e2483.firebaseapp.com",
  databaseURL: "https://atelierdellcastle-e2483-default-rtdb.firebaseio.com",
  projectId: "atelierdellcastle-e2483",
  storageBucket: "atelierdellcastle-e2483.appspot.com",
  messagingSenderId: "769113896482",
  appId: "1:769113896482:web:d97c86a899374f49b4bc7b",
  measurementId: "G-F9EYRRB0RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);
