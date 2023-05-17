import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userUpdate = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('logged user', loggedUser)
            setUser(loggedUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const logOut = () =>{
        return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        userUpdate,
        signInUser,
        logOut

    }


  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
