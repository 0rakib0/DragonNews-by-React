import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useState } from "react"
import auth from "../firebse.config"

export const authContext = createContext(null)

const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null)


    const createUser = (email, password) =>{
         return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
        LoginUser
    }
    return(
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )

}


export default AuthProvider;