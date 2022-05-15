import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3zk3k8M8q8aC_5zDQ1_2xhvMgfOIhy9E",
    authDomain: "juniorvision-52768.firebaseapp.com",
    projectId: "juniorvision-52768",
    storageBucket: "juniorvision-52768.appspot.com",
    messagingSenderId: "807307314810",
    appId: "1:807307314810:web:0e8aaadb0f1820cce19dc3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export
 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 