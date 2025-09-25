import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const signInUser = (email, password) => {
         return createUserWithEmailAndPassword(auth,email,password)
    }
    const data = {
       signInUser
    }

    return (
        <AuthContext value={data}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;