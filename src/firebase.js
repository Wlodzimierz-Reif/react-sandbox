import * as firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByd7d-14TwMCt2fZ9L94GzCXX11WNTYDc",
    authDomain: "database-26680.firebaseapp.com",
    databaseURL: "https://database-26680.firebaseio.com",
    projectId: "database-26680",
    storageBucket: "database-26680.appspot.com",
    messagingSenderId: "409147116207",
    appId: "1:409147116207:web:04ad6c04c909ac44d9225a",
    measurementId: "G-DEMQTZTDS4"
};


firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
