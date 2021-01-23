import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCDSKse50ZeJHMMS_7eJNXg-Qoq9c171Wo",
  authDomain: "crwn-clothing-45a90.firebaseapp.com",
  projectId: "crwn-clothing-45a90",
  storageBucket: "crwn-clothing-45a90.appspot.com",
  messagingSenderId: "248715424007",
  appId: "1:248715424007:web:b2db8c8bd4f74ce5b015a2",
  measurementId: "G-R7QXH4L05S"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}else {
  firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;