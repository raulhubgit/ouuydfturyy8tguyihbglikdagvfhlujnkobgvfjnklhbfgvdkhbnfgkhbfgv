import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDZB9mu6-BhD5yk2QGxdiM4Zfq6ZNRr8Hk",

  authDomain: "aaaa-b0a2c.firebaseapp.com",

  projectId: "aaaa-b0a2c",

  storageBucket: "aaaa-b0a2c.appspot.com",

  messagingSenderId: "96117553816",

  appId: "1:96117553816:web:a3b263b0ae2273f9a86eed"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
