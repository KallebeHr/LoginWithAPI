// main.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY9t_NdGtHHpNCQ48iZ3Z2_p7CDqovXp4",
  authDomain: "loginwithapi-585e0.firebaseapp.com",
  projectId: "loginwithapi-585e0",
  storageBucket: "loginwithapi-585e0.appspot.com",
  messagingSenderId: "638028549822",
  appId: "1:638028549822:web:c7b38007e46d1d2e17d8ef",
  measurementId: "G-1LZRW1RFMD"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

// Plugins
import { registerPlugins } from '@/plugins'
registerPlugins(app)

app.mount('#app')
