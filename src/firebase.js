import firebase from 'firebase/app'
import 'firebase/app' 
import 'firebase/database' 

const firebaseConfig = {
    apiKey: "AIzaSyDpN6zIeNsfw-zhhOXBWM-8nbuEq9PhzdM",
    authDomain: "m-city-db.firebaseapp.com",
    databaseURL: "https://m-city-db.firebaseio.com",
    projectId: "m-city-db",
    storageBucket: "m-city-db.appspot.com",
    messagingSenderId: "36928429769",
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database()
const firebaseMatches= firebaseDB.ref('matches')

export {
    firebase,
    firebaseMatches
}