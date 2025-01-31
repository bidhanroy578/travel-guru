import PropTypes from 'prop-types';
import { AuthContext } from "./Contexts";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/__auth__';
import { useEffect, useState } from 'react';


const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)

    // google login 
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // git hub login 
    const githubProvider = new GithubAuthProvider()
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // create new account using email , pass 
    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login using email , pass 
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logout = () =>{
        return signOut(auth)
    }
    // observer  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    let data = { isLoading, user, googleLogin, githubLogin, createAccount, login , logout }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider >
    );
};

ContextProvider.propTypes = {
    children: PropTypes.node
};
export default ContextProvider