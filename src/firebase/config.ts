import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "csec-maths-calculator.firebaseapp.com",
  projectId: "csec-maths-calculator",
  storageBucket: "csec-maths-calculator.firebasestorage.app",
  messagingSenderId: "998761186760",
  appId: "1:998761186760:web:b2b8a08920b61bcf4a2cfd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
