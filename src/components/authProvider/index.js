import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthContext } from '../../contexts/auth';

const auth = getAuth();

export const AuthProvider = (props) => {
    const [user, setUser] = useState(auth.currentUser);
    const { children } = props;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};
