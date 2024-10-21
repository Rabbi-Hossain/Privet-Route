import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.confige";



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }


    useEffect(() => {

     const unSubscribe =  onAuthStateChanged(auth, current => {
                setUser(current)
                console.log('obgerver curren user', current)
                setLoading(false)
            
        })

        return()=>{
            unSubscribe()
        }
        

    }, [])

    
    const authInfo = { user, createUser, signIn, logOut, loading }

   

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.node
}