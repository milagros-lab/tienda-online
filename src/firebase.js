import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA1P1DbC4eJgdK074ixn5Efv07r6Qv7ASo",
    authDomain: "ecommerce-bef86.firebaseapp.com",
    projectId: "ecommerce-bef86",
    storageBucket: "ecommerce-bef86.appspot.com",
    messagingSenderId: "88838239296",
    appId: "1:88838239296:web:c81a197cd2d956bb9bdba5"
  };
 /*  const firebaseApp = firebase.initializeApp(firebaseConfig) */
 const firebaseApp = firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  export default auth;
  