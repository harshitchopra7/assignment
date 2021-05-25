import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCumBIu59_Sl9eED5XexeVYdqeikOYRzI0",
    authDomain: "assignment-9999.firebaseapp.com",
    projectId: "assignment-9999",
    storageBucket: "assignment-9999.appspot.com",
    messagingSenderId: "611890917318",
    appId: "1:611890917318:web:ca96e98a3d115f6fcf4cc7",
    measurementId: "G-4NXJ3K7HQR"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };