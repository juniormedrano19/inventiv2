import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBNHeWCgOLDROLA5yr1St3W6tpTq26PVQQ",
  authDomain: "inventi-v2.firebaseapp.com",
  projectId: "inventi-v2",
  storageBucket: "inventi-v2.appspot.com",
  messagingSenderId: "893106016301",
  appId: "1:893106016301:web:e44d9c34cab6b0fd5128a4",
  measurementId: "G-CL832H8486"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
  const facebookAuthProvider= new firebase.auth.FacebookAuthProvider();
  const twitterAuthProvider= new firebase.auth.TwitterAuthProvider();
  const appleAuthProvider= new firebase.auth.OAuthProvider('apple.com');
  const microsoftAuthProvider= new firebase.auth.OAuthProvider('microsoft.com');

  export  {
    db,
    googleAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider,
    appleAuthProvider,
    microsoftAuthProvider,
    firebase
  
  }