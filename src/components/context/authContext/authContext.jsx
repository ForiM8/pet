import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const Admin = {email: "admin@admin", password: "admin"}

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthhContext = ({children}) =>{

    const [isAuth, setIsAuth] = useState(true)
    const [adminTrue, setAdminTrue] = useState(true) 
    return(
        <AuthContext.Provider value={ {isAuth, setIsAuth,adminTrue, setAdminTrue} }>
            {children}
        </AuthContext.Provider>
    )
}