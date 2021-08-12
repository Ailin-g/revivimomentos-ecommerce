import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDRa_8JhanArV8Varxhs1nKjgv5Sd6BZtk",
    authDomain: "proyecto-coderhouse-8e210.firebaseapp.com",
    projectId: "proyecto-coderhouse-8e210",
    storageBucket: "proyecto-coderhouse-8e210.appspot.com",
    messagingSenderId: "634600681469",
    appId: "1:634600681469:web:88f314d9cedd35871db394",
    measurementId: "G-EM1TNE6NB4"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}