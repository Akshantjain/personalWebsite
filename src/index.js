import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDpZFZ6Jez4EQVun8B1qeV_pz5Vytq83F4",
  authDomain: "mypersonalwebsite-b3da2.firebaseapp.com",
  databaseURL: "https://mypersonalwebsite-b3da2-default-rtdb.firebaseio.com",
  projectId: "mypersonalwebsite-b3da2",
  storageBucket: "mypersonalwebsite-b3da2.appspot.com",
  messagingSenderId: "578977779676",
  appId: "1:578977779676:web:41e3c361e5c4bb6272c919",
  measurementId: "G-TRYJGHG7Z2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
