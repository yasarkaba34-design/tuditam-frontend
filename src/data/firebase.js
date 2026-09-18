// src/data/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebase yalnızca bir kez başlatılır.
// Vite Hot Reload sırasında siyah ekran ve duplicate-app hatasını önler.
const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

// Firestore veritabanı bağlantısı
export const db = getFirestore(app);

export default app;