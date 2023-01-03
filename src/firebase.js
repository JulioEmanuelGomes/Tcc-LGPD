import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCWw8Ru9dOouix7KAxhpDfvDxdtxYVFMb0",
  authDomain: "lgpd-ed98d.firebaseapp.com",
  databaseURL: "https://lgpd-ed98d-default-rtdb.firebaseio.com",
  projectId: "lgpd-ed98d",
  storageBucket: "lgpd-ed98d.appspot.com",
  messagingSenderId: "176173049068",
  appId: "1:176173049068:web:227994be01f2bba98cf1c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);