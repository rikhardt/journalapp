import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFSTb7AY2UwDjuJc04d0h-EWHy3pyI4kI",
    authDomain: "react-auth-store-app.firebaseapp.com",
    databaseURL: "https://react-auth-store-app.firebaseio.com",
    projectId: "react-auth-store-app",
    storageBucket: "react-auth-store-app.appspot.com",
    messagingSenderId: "410867951095",
    appId: "1:410867951095:web:0fb944e032e49334a73af2"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }

