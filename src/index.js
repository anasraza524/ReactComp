import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getAuth } from "firebase/auth";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5zFvIWQKqQQcJ0ZpB9FIzfVSbwOmZjto",
  authDomain: "attendance-admin1.firebaseapp.com",
  projectId: "attendance-admin1",
  storageBucket: "attendance-admin1.appspot.com",
  messagingSenderId: "304074174391",
  appId: "1:304074174391:web:c3d5d0749d4f64f5534232",
  measurementId: "G-H0K4JSZ9MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
const auth = getAuth(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
