import React, { useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(false)
    const [userInfo, setUserInfo] = useState(5)

    const signInUser = (email, password) => {
         return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const data = {
       signInUser,
       userLogin,
       setUser,
       user,
       setUserInfo,
       userInfo
    }

    return (
        <AuthContext value={data}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;