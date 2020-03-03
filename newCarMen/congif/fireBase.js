import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBfnfDmQGjyxl1AzAl8gOVCImjScF1QkF0",
    authDomain: "n-c-m-efbf2.firebaseapp.com",
    databaseURL: "https://n-c-m-efbf2.firebaseio.com",
    projectId: "n-c-m-efbf2",
    storageBucket: "n-c-m-efbf2.appspot.com",
    messagingSenderId: "380711842606",
    appId: "1:380711842606:web:7c2642cb48ba523c4c40bf",
    measurementId: "G-1CM6PQ40YW"
  };
  
  const initialize = firebase.initializeApp(firebaseConfig);
  
  export default initialize