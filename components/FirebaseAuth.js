import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db, USERS_REF } from "./FirebaseConfig";
import { createContext, useEffect, useState } from "react";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";

export async function signIn(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error;
    }
}

export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        return error;
    }
}