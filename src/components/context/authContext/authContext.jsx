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
    const [modalCount, setModalCount] = useState([])
    const [Total, SetTotal] = useState(0)
    const [userName, setUserName] = useState([])
    const [profileInfo, setProfileInfo] = useState({})
    const [listPromo, setListPromo] = useState([])
    const [payMethod, setPayMethod] = useState('')

    const [user, setUser] = useState({
       
    })


    return(
        <AuthContext.Provider value={ {user, setUser,payMethod, setPayMethod,listPromo, setListPromo,userName, setUserName,Total, SetTotal, isAuth, setIsAuth,adminTrue, setAdminTrue,nextInfo, setNextInfo,buyCount, setBuyCount, buyMassiv, setBuyMassiv, modalCount, setModalCount, profileInfo, setProfileInfo} }>
            {children}
        </AuthContext.Provider>
    )
}