import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    console.log(user, 'user in auth provider')


    const createUser = async (name, email, password) => {

        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(result.user, { displayName: name });
            return result;
        } catch (error) {
            console.error("Error creating user:", error);
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
        
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }



    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser, 'current user in auth provider')
            

            if (currentUser) {
                setLoading(true)
                setUser(currentUser)
                console.log(currentUser, 'current user in auth provider')
            } else {
                logOutUser()
                setLoading(false)

            }
        })
        return () => {
            unSubscribe()
        }
    }, [])




    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOutUser,
        signInWithGoogle,
        setLoading,
        error,

    }



    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};


export default AuthProvider;