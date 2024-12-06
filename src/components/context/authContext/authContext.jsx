import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const Admin = {email: "admin@admin", password: "admin"}

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthhContext = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false)
    const [adminTrue, setAdminTrue] = useState(false)
    const [nextInfo, setNextInfo] = useState(1) 
    const [buyCount, setBuyCount] = useState(0)
    const [buyMassiv, setBuyMassiv] = useState([])
    return(
        <AuthContext.Provider value={ {isAuth, setIsAuth,adminTrue, setAdminTrue,nextInfo, setNextInfo,buyCount, setBuyCount,buyMassiv, setBuyMassiv} }>
            {children}
        </AuthContext.Provider>
    )
}