import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5jAL1yOkp4mJZskXcm5MUAeEYP4-nWM8",
    authDomain: "comments-c1a27.firebaseapp.com",
    projectId: "comments-c1a27",
    storageBucket: "comments-c1a27.appspot.com",
    messagingSenderId: "984620458452",
    appId: "1:984620458452:web:682a225f75277e4f5d7641",
    measurementId: "G-DC0J05SEP2"
};

const app1 = firebase.initializeApp(firebaseConfig)
export const authentication = getAuth(app1)

export default firebase