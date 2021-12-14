import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyC7Zix3CU1k33V6shToFfAfaLpuPXbI8cI",
   authDomain: "booksanta-5db2b.firebaseapp.com",
   databaseURL: "https://booksanta-5db2b.firebaseio.com",
   projectId: "booksanta-5db2b",
   storageBucket: "booksanta-5db2b.appspot.com",
   messagingSenderId: "827508146496",
   appId: "1:827508146496:web:f7eeba311a992ae416faa5",
   measurementId: "G-DRZDLKCNE9"
 };
 
 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
 }

  export default firebase.firestore()