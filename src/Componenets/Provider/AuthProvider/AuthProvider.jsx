import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { app } from "../../Firebase/firebase.config";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    // user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleAuth = (email, password) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const githubAuth = (email, password) => {
        setLoading(true);
        return signInWithPopup(auth , githubProvider)
    }
    const logOut = (email, password) => {
        setLoading(true);
        return signOut(auth)
    }
    const upadateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser , {
            displayName: name, photoURL : photo
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("currnent user", currentUser);
            if(currentUser){
             const userInfo = {email : currentUser.email}
             axiosPublic.post("/jwt" , userInfo)
             .then(res => {
                console.log(res.data);
                if(res.data.token){
                    localStorage.setItem( "access-token",res.data.token )
                }
             })
            }
            else{
              localStorage.removeItem("access-token" , )
            }
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
        googleAuth,
        githubAuth,
        logOut,
        upadateUserProfile

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;