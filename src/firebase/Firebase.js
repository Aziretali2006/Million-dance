import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzR6-Wag4Ib3T9s0mAl6LKCzyX4zepcok",
  authDomain: "million-dance.firebaseapp.com",
  projectId: "million-dance",
  storageBucket: "million-dance.appspot.com",
  messagingSenderId: "754858717712",
  appId: "1:754858717712:web:5ddd8fcba2d4a0119c5095",
  measurementId: "G-4G2DP2GE5H"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth
}