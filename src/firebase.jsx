import firebase from 'firebase/app';
import 'firebase/firestore';


const {REACT_APP_APIKEY, REACT_APP_APPID} = process.env;

const app = firebase.initializeApp({
    apiKey: REACT_APP_APIKEY,
    authDomain: "ercmax-project-ecommerce.firebaseapp.com",
    projectId: "ercmax-project-ecommerce",
    storageBucket: "ercmax-project-ecommerce.appspot.com",
    messagingSenderId: "570864172054",
    appId: REACT_APP_APPID
});

export const getFirebase = () =>app;

export const getFirestore = () => firebase.firestore(app);