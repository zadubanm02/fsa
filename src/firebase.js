import * as firebase from "firebase";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDe7sWxae50R0w7DR7d89YwiQRe0N8hwpE",
  authDomain: "fsamz-9849b.firebaseapp.com",
  databaseURL: "https://fsamz-9849b.firebaseio.com",
  projectId: "fsamz-9849b",
  storageBucket: "fsamz-9849b.appspot.com",
  messagingSenderId: "443430739772",
  appId: "1:443430739772:web:d7d51f8ba74518246ec839",
  measurementId: "G-VM2E0H4F7P",
};
// Initialize Firebase

export const fr = firebase.initializeApp(firebaseConfig);

const db = fr.firestore();

export const fbstorage = fr.storage();

export default db;

class Firebase {
  constructor() {
    this.auth = fr.auth();
  }
  logIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }
  async signUp(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name,
    });
  }
  logOut() {
    this.auth.signOut();
  }
}

export const firebaseClass = new Firebase();
