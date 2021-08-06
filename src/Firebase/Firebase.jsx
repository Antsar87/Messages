import firebase from 'firebase/app'; /// FireBase
import 'firebase/firestore'; /// Firebase Store
import 'firebase/auth'; /// Firebase autentificacion

const config = {
  apiKey: 'AIzaSyBYpF-vZBPEMgJEaXkxtQiPyusyFRM-HAc',
  authDomain: 'yare-yare-6338b.firebaseapp.com',
  projectId: 'yare-yare-6338b',
  storageBucket: 'yare-yare-6338b.appspot.com',
  messagingSenderId: '706418838962',
  appId: '1:706418838962:web:9dd083930c34da4dd3e8ab',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

///////////////////////
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
/////////////////////

export default firebase;
