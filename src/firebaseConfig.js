import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDocnpPQ_2NnNQlYGhAwZULyVzZVFI3eps",
    authDomain: "backend-miau.firebaseapp.com",
    projectId: "backend-miau",
    storageBucket: "backend-miau.firebasestorage.app",
    messagingSenderId: "690854278687",
    appId: "1:690854278687:web:412feedad116ccfdedc72a"
};

const app = initializeApp(firebaseConfig)  //conexión a la app gral 
export const db = getFirestore(app)  // conexión con la base de datos