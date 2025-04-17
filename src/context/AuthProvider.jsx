import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider();



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }



    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser){
                setLoading(true)
                setUser(currentUser.uid)
            }else{
                logOutUser()
                setLoading(false)

            }
        })
        return () => {
            unSubscribe()
        }
    },[])




    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        signInWithGoogle
    }



    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};


export default AuthProvider;