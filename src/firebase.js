
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAL_yxnjGntNMHhq8vXAvd8yaJi96muKi4",
    authDomain: "clone-8d935.firebaseapp.com",
    projectId: "clone-8d935",
    storageBucket: "clone-8d935.appspot.com",
    messagingSenderId: "125870443878",
    appId: "1:125870443878:web:f2f975bcd70e1a3009cca7",
    measurementId: "G-RFJFV683G5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };