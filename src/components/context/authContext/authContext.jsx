import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthhContext = ({children}) =>{

    const [isAuth, setIsAuth] = useState(true)

    return(
        <AuthContext.Provider value={ {isAuth, setIsAuth} }>
            {children}
        </AuthContext.Provider>
    )
}