import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_eAIBwa6c_4f99XEaIXF-u9CrBK12-9o",
  authDomain: "clone-a3d52.firebaseapp.com",
  projectId: "clone-a3d52",
  storageBucket: "clone-a3d52.appspot.com",
  messagingSenderId: "311234784721",
  appId: "1:311234784721:web:ba2e8dea57d671cceec4f0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
