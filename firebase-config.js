
// ============================================
// FIREBASE CONFIGURATION
// ============================================
// Replace the values below with YOUR Firebase project config.
// Go to: Firebase Console → Project Settings → General → Your apps → Web app
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyAwrophmS3WQwd2JV1rfc8kXLkd8ukkf9g",
  authDomain: "citk-lost-found-7e05c.firebaseapp.com",
  projectId: "citk-lost-found-7e05c",
  storageBucket: "citk-lost-found-7e05c.firebasestorage.app",
  messagingSenderId: "842073533819",
  appId: "1:842073533819:web:a5a7e1a5a63fe9eb9821de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

console.log("✅ Firebase initialized successfully");