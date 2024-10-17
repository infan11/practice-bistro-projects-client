import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { app } from "../../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleProvider = (email, password) => {
        setLoading(true)
        return signInWithPopup(auth);
    }
    const githubProvider = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth)
    }
    const logOut = (email, password) => {
        setLoading(false);
        return signOut(auth, email, password)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("currnent user", currentUser);
            setLoading(false)
        });
        return () => {
            return unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        signIn,
        googleProvider,
        githubProvider,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;