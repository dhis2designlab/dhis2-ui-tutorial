
import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBN_UVpipsj8KvrToiFGArN4q15xRlYl8I",
  authDomain: "dhis2-ui-tutorial.firebaseapp.com",
  databaseURL: "https://dhis2-ui-tutorial.firebaseio.com",
  projectId: "dhis2-ui-tutorial",
  storageBucket: "dhis2-ui-tutorial.appspot.com",
  messagingSenderId: "1051072921094",
  appId: "1:1051072921094:web:d410d45674eb05bf5d0d87",
  measurementId: "G-Q0E15QYBYZ"
};


firebase.initializeApp(firebaseConfig)

export default firebase

export const auth = firebase.auth;
export const db = firebase.firestore();
