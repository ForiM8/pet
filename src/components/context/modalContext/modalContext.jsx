import { createContext, useContext, useState } from "react"

const ModalRegisterContext = createContext(null)
export const useModalRegister = () => useContext(ModalRegisterContext)

export const ModallRegisterContext = ({  
    children
}) => {
    const [modalActiveRegister, setModalActiveRegister] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    return (
        <ModalRegisterContext.Provider value={{ modalActive,setModalActive, modalActiveRegister,setModalActiveRegister }}>
            {children}
        </ModalRegisterContext.Provider>
    )
}