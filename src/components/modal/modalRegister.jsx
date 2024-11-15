import React from "react"
import "./modalRegister.scss"

export const ModalRegister = ({
    children,
    setActiveRegister,
    activeRegister
}) => {
    return (
        <div className={activeRegister ? "modalRegister active" : "modalRegister"} onClick={() => setActiveRegister(prev => !prev)} >
            <div className={activeRegister ? "modal__contentRegister active" : "modal__contentRegister"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}