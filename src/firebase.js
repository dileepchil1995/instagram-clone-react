import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAcSE_3Gt4F472IMVKwrnZe513DG_625iY",
    authDomain: "instagram-clone-p1.firebaseapp.com",
    databaseURL: "https://instagram-clone-p1.firebaseio.com",
    projectId: "instagram-clone-p1",
    storageBucket: "instagram-clone-p1.appspot.com",
    messagingSenderId: "450982255312",
    appId: "1:450982255312:web:ea0d7f79f7afeae594dcd5",
    measurementId: "G-990D6JXFV3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };



