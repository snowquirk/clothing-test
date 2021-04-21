import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCMmUxFP-hUay5ofMUO9J-M6LRWfflbN6w',
  authDomain: 'crwn-db-8d366.firebaseapp.com',
  projectId: 'crwn-db-8d366',
  storageBucket: 'crwn-db-8d366.appspot.com',
  messagingSenderId: '569774231446',
  appId: '1:569774231446:web:1c7a067ad2dae65c1c17b7',
  measurementId: 'G-HZY5FRKX6Q',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
