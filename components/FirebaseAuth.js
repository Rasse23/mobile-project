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

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [userdata, setUserData] = useState();

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoggedIn(true);
                setUserData(user);
            } else {
                setLoggedIn(false);
                setUserData(null);
            }
        });

        return unsubscribe;

    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, userdata }}>
            {children}
        </AuthContext.Provider>
    );
}