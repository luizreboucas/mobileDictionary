import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGt10PWO_0-PeResGMgT5vePvho9yPOC0",
    authDomain: "deovita-teste-imagens-cache.firebaseapp.com",
    projectId: "deovita-teste-imagens-cache",
    storageBucket: "deovita-teste-imagens-cache.firebasestorage.app",
    messagingSenderId: "314505515535",
    appId: "1:314505515535:web:7749f37cc511e34fc6c97a"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
