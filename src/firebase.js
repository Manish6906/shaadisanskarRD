import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDud8yzaAbwHqx9nxaJDbwcIJaosPMJT7w",
  authDomain: "shaddi-b6f88.firebaseapp.com",
  projectId: "shaddi-b6f88",
  storageBucket: "shaddi-b6f88.firebasestorage.app",
  messagingSenderId: "395418576948",
  appId: "1:395418576948:web:a5b9c5661d1a2eeeb70261",
  measurementId: "G-XJM2FE9Y4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Storage
const storage = getStorage(app);
export { storage,ref,uploadBytesResumable,getDownloadURL };