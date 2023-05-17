// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG6dC7YG7UWI_5HcQrobWVnA2U5l195RA",
  authDomain: "k-action-figure-client.firebaseapp.com",
  projectId: "k-action-figure-client",
  storageBucket: "k-action-figure-client.appspot.com",
  messagingSenderId: "445874483201",
  appId: "1:445874483201:web:4b8ba3b0e059a442f29000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;