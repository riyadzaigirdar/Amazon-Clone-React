import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB25PdNEBUxBHshdIzFuZq5iS3ctl5w28Y",
  authDomain: "ecommerce-a750c.firebaseapp.com",
  databaseURL: "https://ecommerce-a750c.firebaseio.com",
  projectId: "ecommerce-a750c",
  storageBucket: "ecommerce-a750c.appspot.com",
  messagingSenderId: "609368047471",
  appId: "1:609368047471:web:7e15375bcf26183224329a",
  measurementId: "G-EC9WVDF2T3",
});

export const auth = firebase.auth();
