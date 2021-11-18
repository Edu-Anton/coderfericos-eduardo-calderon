import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-3f7Ef1gYI_wC54w4orpCNqYAJl9M83Y",
  authDomain: "coderfericos.firebaseapp.com",
  projectId: "coderfericos",
  storageBucket: "coderfericos.appspot.com",
  messagingSenderId: "467717429841",
  appId: "1:467717429841:web:0bc49d4c929144c8f57670"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore(){
  return firebase.firestore(app);
}