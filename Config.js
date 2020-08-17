import * as firebase from 'firebase'
require('@firebase/firestore');


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDaPaoMYl-tLgur0Nv7TG6PV0SaREMOGzE",
    authDomain: "book-santa-app-95aaf.firebaseapp.com",
    databaseURL: "https://book-santa-app-95aaf.firebaseio.com",
    projectId: "book-santa-app-95aaf",
    storageBucket: "book-santa-app-95aaf.appspot.com",
    messagingSenderId: "122152259958",
    appId: "1:122152259958:web:72276faff8b97c862baa57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();