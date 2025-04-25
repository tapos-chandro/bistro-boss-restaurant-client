import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import useAxiosSecure from '../hooks/useAxiosSecure';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const axiosSecure = useAxiosSecure()


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
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log(user, 'current user in auth provider')
            const name = user?.displayName;
            const email = user?.email;

            if (name) {
                await axiosSecure.post('/users', {
                    name,
                    email
                })
            }

            if (currentUser) {
                setLoading(true)
                setUser(currentUser)
                console.log(currentUser, 'current user in auth provider')



            } else {
                logOutUser()
                setLoading(false)
                setUser(null)

            }
        })
        return () => {
            unSubscribe()
        }
    }, [user?.displayName])




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