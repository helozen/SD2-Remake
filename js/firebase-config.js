<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAiUw7hCOjJwJm5RJRfxV7iJ9gNjNLtfkI",
  authDomain: "sd-2-66867.firebaseapp.com",
  projectId: "sd-2-66867",
  storageBucket: "sd-2-66867.firebasestorage.app",
  messagingSenderId: "910745957167",
  appId: "1:910745957167:web:f454cebdff8ffff7c727da",
  measurementId: "G-M7X7XNRBW1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</script>