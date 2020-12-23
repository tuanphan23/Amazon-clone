import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOlB-KMrEr-enYRpVAGZKaMW3BWRGaVTk",
  authDomain: "clone-dbb60.firebaseapp.com",
  databaseURL: "https://clone-dbb60.firebaseio.com",
  projectId: "clone-dbb60",
  storageBucket: "clone-dbb60.appspot.com",
  messagingSenderId: "673937686900",
  appId: "1:673937686900:web:38584a7380a03e2dd12c21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
