import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    AuthDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
    projectid: process.env.EXPO_PUBLIC_PROJECT_ID,
    storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
    messagingSenderid: process.env.EXPO_PUBLIC_MSG_SENDER_ID,
    appId: process.env.EXPO_PUBLIC_APP_ID



}


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth()