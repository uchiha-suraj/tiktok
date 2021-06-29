import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDen5Kh-tCl--3YectvhOYgTKh6hZaFrxQ",
  authDomain: "tiktok-c2046.firebaseapp.com",
  projectId: "tiktok-c2046",
  storageBucket: "tiktok-c2046.appspot.com",
  messagingSenderId: "304192079469",
  appId: "1:304192079469:web:abfa3fb7c218c0514b6164"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
