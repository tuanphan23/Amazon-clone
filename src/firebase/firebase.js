import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "clone-dbb60.firebaseapp.com",
  databaseURL: "https://clone-dbb60.firebaseio.com",
  projectId: "clone-dbb60",
  storageBucket: "clone-dbb60.appspot.com",
  messagingSenderId: "",
  appId: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
