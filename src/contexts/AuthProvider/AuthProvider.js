import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, signInWithPopup, getAuth, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, signOut,updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const logOut = () =>{
        localStorage.removeItem('genius-token');
        return signOut(auth);
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state change', currentUser);

            if(currentUser === null || currentUser.emailVerified  ){
                setUser(currentUser);
            }
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        setUser, 
        loading,
        createUser, 
        login, 
        logOut,
        updateUserProfile,
        verifyEmail,
        providerLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;