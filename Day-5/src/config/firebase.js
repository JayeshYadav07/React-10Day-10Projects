// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCkjQoLq5jeJ6w5HGvy4A-kMoMx1clINXc",
	authDomain: "vite-contact-1888e.firebaseapp.com",
	projectId: "vite-contact-1888e",
	storageBucket: "vite-contact-1888e.appspot.com",
	messagingSenderId: "1006220724615",
	appId: "1:1006220724615:web:241cae3500a20bdb32ab22",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
