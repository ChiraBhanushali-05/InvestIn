// firebase.js

import { initializeApp } from "firebase/app";
import 'firebase/auth';
import firebaseConfig from './firebaseConfig'; // Removed curly braces from import

// Check if Firebase has been initialized

const app=initializeApp(firebaseConfig);

export default app;
