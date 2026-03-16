import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db, TODOS_REF, USERS_REF } from "./FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


export const LocationContext = createContext();

export function LocationProvider({ children }) {

    const [locations, setLocations] = useState([]);


    useEffect(() => {

        let unsubscribe;
        onAuthStateChanged(auth, user => {
            if (user) {
                unsubscribe = onSnapshot(collection(db, USERS_REF, user.uid, TODOS_REF ), qSnapshot =>
                    setLocations(
                        qSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                    )
                )
            }else{
                if(unsubscribe){
                    unsubscribe();
                }
                unsubscribe = null;
                setLocations([]);
            }
        });
    }, [])

    return (
        <LocationContext.Provider value={locations}>
            {children}
        </LocationContext.Provider>
    );
}


export async function addLocation(locationText, description, starrating) {
    try {
        let uid = auth?.currentUser?.uid;
        if (locationText.trim() != '' && uid) {
            await addDoc(collection(db, USERS_REF, uid, TODOS_REF), 
                { done: false, locationText, description, starrating });
        }
    } catch (error) {
        return error;
    }
}



export async function removeLocation(id) {
    try {
        deleteDoc(doc(db, USERS_REF, auth.currentUser.uid, TODOS_REF, id));
    } catch (error) {
        return error;
    }   
}

export async function updateLocation(id, data) {
    try {
        await updateDoc(doc(db, USERS_REF, auth.currentUser.uid, TODOS_REF, id), data);
    } catch (error) {
        return error;
    }
}