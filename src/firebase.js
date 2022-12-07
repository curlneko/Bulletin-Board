import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBLk--FggDZyzUfDCzdQsMs1rNKGvUlCY",
  authDomain: "bulletin-board-b7795.firebaseapp.com",
  projectId: "bulletin-board-b7795",
  storageBucket: "bulletin-board-b7795.appspot.com",
  messagingSenderId: "457478777475",
  appId: "1:457478777475:web:5b7f788be2012b8e2b49b6",
  measurementId: "G-11SDPB77LW",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
