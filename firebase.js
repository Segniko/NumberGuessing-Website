import firebase from 'firebase/app';

// Your Firebase project configuration (replace with placeholders)
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export function signup(username, password) {
  return auth.createUserWithEmailAndPassword(username, password)
    .then(userCredential => {
      userCredential.user.updateProfile({ displayName: username }); // Set username as display
