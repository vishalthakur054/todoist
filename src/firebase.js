import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB5ft5sI4pUQ0PQ0hDTbpgnBTQG4_Jzwj8",
  authDomain: "todoist-dfcd0.firebaseapp.com",
  databaseURL: "https://todoist-dfcd0.firebaseio.com",
  projectId: "todoist-dfcd0",
  storageBucket: "todoist-dfcd0.appspot.com",
  messagingSenderId: "206282575777",
  appId: "1:206282575777:web:f4bab3ae361e4a3a3bc5e0"
});

export { firebaseConfig as firebase };
