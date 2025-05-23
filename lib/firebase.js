// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
  // Add any other keys from your Firebase config
};

const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);

export { auth };
