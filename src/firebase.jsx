import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB6dvDA5hjVuHhZAVHG8re3ExczEnuHgns",
    authDomain: "ercmax-project-ecommerce.firebaseapp.com",
    projectId: "ercmax-project-ecommerce",
    storageBucket: "ercmax-project-ecommerce.appspot.com",
    messagingSenderId: "570864172054",
    appId: "1:570864172054:web:a6bbabf1f5ae98b4354937"
});

export const getFirebase = () =>app;

export const getFirestore = () => firebase.firestore(app);