import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext=createContext();

const auth= getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser]= useState({displayName:'Mehedi'});
    const googleProvider=new GoogleAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userLogIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
}

const logOut=()=>{
    return signOut(auth);
}
    useEffect( ()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser); console.log(currentUser)})
    return ()=>{unsubscribe();}
}, [])
    
    const authInfo={user,createUser,userLogIn,logOut,signInWithGoogle};
return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;