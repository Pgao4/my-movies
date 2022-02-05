import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARxgZrjkPsTsMVWSOlMnlXMue3XOnIiss",
  authDomain: "kyro-disney-plus.firebaseapp.com",
  projectId: "kyro-disney-plus",
  storageBucket: "kyro-disney-plus.appspot.com",
  messagingSenderId: "985318584385",
  appId: "1:985318584385:web:d6b89b3a972f9ac9f596c0",
  measurementId: "G-NHQX8E3YSE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
