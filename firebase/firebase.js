import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBbbxTCrZTn07yqcRgt4tRCFFxqkwABsYc",
    authDomain: "clouddemoproject-bfd2c.firebaseapp.com",
    projectId: "clouddemoproject-bfd2c",
    storageBucket: "clouddemoproject-bfd2c.appspot.com",
    messagingSenderId: "833767310459",
    appId: "1:833767310459:web:09d31e16ca22b4c12e8ede"
});


const db = getFirestore(firebaseApp);


export default db;


