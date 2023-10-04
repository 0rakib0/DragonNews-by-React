import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebse.config"

export const authContext = createContext(null)

const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() =>{
        const unSubscrive = onAuthStateChanged(auth, currrentUser =>{
            setUser(currrentUser)
            setLoading(false)
        });
        return () =>{
            unSubscrive()
        }
    },[])


    const authInfo = {
        user,
        createUser,
        LoginUser,
        Logout,
        loading
    }
    return(
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )

}


export default AuthProvider;