import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const AuthContext=createContext();

const auth= getAuth(app);
const UserContext = ({children}) => {
    const [user, setUser]= useState(null);
    const [loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userLogIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
}
const githubProvider= new GithubAuthProvider();

const signInWithGithub=()=>{
    return signInWithPopup(auth,githubProvider);
}

const logOut=()=>{
    return signOut(auth);
}
    useEffect( ()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser); console.log(currentUser)
            setLoading(false)
        })
           
    return ()=>{unsubscribe();}
}, [])
    
    const authInfo={user,loading,
        createUser,userLogIn,
        logOut,signInWithGoogle, 
        signInWithGithub};
return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;