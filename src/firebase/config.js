import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGLBmTqvO98NQtW_w86djsk4zzlaU4Z2Y",
    authDomain: "miniblog-98f6f.firebaseapp.com",
    projectId: "miniblog-98f6f",
    storageBucket: "miniblog-98f6f.appspot.com",
    messagingSenderId: "740036450506",
    appId: "1:740036450506:web:384e14461f0a56325dbc33"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }