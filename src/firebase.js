import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBIETN2KrZqCxB-HQ_UYNRtLpr9k0YxZqM",
    authDomain: "vue-basic-d0cd6.firebaseapp.com",
    databaseURL: "https://vue-basic-d0cd6.firebaseio.com",
    projectId: "vue-basic-d0cd6",
    storageBucket: "vue-basic-d0cd6.appspot.com",
    messagingSenderId: "43970385904",
    appId: "1:43970385904:web:5abc4928dd644086e9af35",
    measurementId: "G-XWMCJZNE9H"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

