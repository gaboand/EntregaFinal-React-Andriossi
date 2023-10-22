import {initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDvniSWSHB7JWWscBsegpFQE80ZDAViF5Y",
    authDomain: "react-a80e3.firebaseapp.com",
    projectId: "react-a80e3",
    storageBucket: "react-a80e3.appspot.com",
    messagingSenderId: "141854702371",
    appId: "1:141854702371:web:6ceb29391c7dbe7d6baa96"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

