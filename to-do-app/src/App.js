import React from 'react';
import './App.css';
import { Login } from './components/Login'
import axios from 'axios';
import firebase from 'firebase/app'
import { firebaseConfig } from './lib/firebase'

firebase.initializeApp(firebaseConfig);



function App() {
  return (
    <Login/>
  );
}

export default App;
