import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDXKaH35AUPBKsUdCcrdvUOV4JlKyv_WTg",
    authDomain: "eth-lagos.firebaseapp.com",
    databaseURL: "https://eth-lagos.firebaseio.com",
    projectId: "eth-lagos",
    storageBucket: "eth-lagos.appspot.com",
    messagingSenderId: "119140133214",
    appId: "1:119140133214:web:04930d50b5614c6ca607cf"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;