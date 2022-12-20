import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqo5L4l3iMHLHBs9T2aB2UskTiwTpTukM",
    authDomain: "lessons-87cfb.firebaseapp.com",
    projectId: "lessons-87cfb",
    storageBucket: "lessons-87cfb.appspot.com",
    messagingSenderId: "672043388234",
    appId: "1:672043388234:web:c63e42fa7538afaaa6c5b3",
    measurementId: "G-ST7QXFFT9Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider };
