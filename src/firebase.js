// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuea7P1Sork6Pgib4np9fe4VUlIPTvFQ8",
    authDomain: "message-clone-26086.firebaseapp.com",
    databaseURL: "http://message-clone-26086.firebaseio.com",
    projectId: "message-clone-26086",
    storageBucket: "message-clone-26086.appspot.com",
    messagingSenderId: "380473460252",
    appId: "1:380473460252:web:b57684248cd5c8c68b01d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
// console.log(app);

export { auth, db, storage };