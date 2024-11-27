import { useState } from "react"
import { Input } from "../../input/input"
import { Modal } from "../../modal/modal"
import "./login.scss"
import { useModalRegister } from "../../context/modalContext/modalContext"
import { useForm } from "react-hook-form"
import { Admin, useAuth } from "../../context/authContext/authContext"
import { ModalRegister } from "../../modal/modalRegister"
import { getAuth } from "../../request/request"
import { Registerr } from "../register/register"
import { useNavigate } from "react-router-dom"

export var Name = ''

export const Login = () => {

    const { modalActiveRegister, modalActive, setModalActiveRegister, setModalActive } = useModalRegister()

    const {
        register,
        handleSubmit,
        watch,
    } = useForm();

    const { setIsAuth, setAdminTrue } = useAuth()

    const onSubmit = (data) => {
        const emailExists = Registerr.some(prev => Registerr[Registerr.length - 1].email == data.email);
        const passwordExists = Registerr.some(prev => Registerr[Registerr.length - 1].password === data.password)
            if (watch("password")) {
                if (data.email === Admin.email) {
                    if (data.password === Admin.password) {
                        alert("О великий админ вернулся")
                        setIsAuth(prev => !prev)
                        setAdminTrue(prev => !prev)
                        Name = Admin.password
                        // getAuth().then(({ data }) => {
                        //     localStorage.setItem("token", data.token);
                        // })
                        setModalActive(prev => !prev)
                    }
                } else if (emailExists) {
                    if (passwordExists) {
                        setIsAuth(prev => !prev)
                        Name = Registerr[Registerr.length - 1].user
                        alert("вы успешно вошли")
                        localStorage.setItem("token", data.token);
                        // getAuth().then(({ data }) => {
                        //     localStorage.setItem("token", data.token);
                        // })
                        setModalActive(prev => !prev)
                    } else {
                        alert('не правильный пароль')
                    }
                } else {
                    alert("такого пользователя нет")
                }

            } else {
                alert("вы не ввели пароль")
            }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div className="modal__contentLogin__header">
                <button className="modal__contentLogin__header-login" >Login</button>
                <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.854 12H1.43V0.12H0.854V12Z" fill="#3D3D3D" />
                </svg>
                <button className="modal__contentLogin__header-register" onClick={() => (setModalActiveRegister(prev => !prev), setModalActive(prev => !prev))} >Register</button>
            </div>

            <div className="modal__contentLogin__inputBox">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal__contentLogin__inputBox-smallText">Enter your username and password to login.</div>
                    <Input
                        classNameWrapper={'wrapper'}
                        input_type={'email'}
                        name={"email"}
                        label={"Email"}
                        register={register}
                        validate={{ validate: true }}
                        classNameInput={'modal__contentLogin__inputBox__input'}
                        classNameLabel={'modal__contentLogin__inputBox__label'}
                    />
                    <Input
                        classNameWrapper={'wrapper'}
                        input_type={'password'}
                        name={"password"}
                        label={"Password"}
                        register={register}
                        validate={{ validate: true }}
                        classNameInput={'modal__contentLogin__inputBox__input'}
                        classNameLabel={'modal__contentLogin__inputBox__label'}
                    />
                    <div className="modal__contentLogin__inputBox__forgot">Forgot Password?</div>
                    <button className="modal__contentLogin__inputBox__button">Login</button>
                </form>
            </div>

            <div className="modal__contentLogin__orLogin">
                <div className="modal__contentLogin__orLogin__boxLine">
                    <div className="modal__contentLogin__orLogin__boxLine-lineOne"></div>
                    <div className="modal__contentLogin__orLogin__boxLine-text">Or login with</div>
                    <div className="modal__contentLogin__orLogin__boxLine-lineTwo"></div>
                </div>
                <button className="modal__contentLogin__orLogin-button"><div className="modal__contentLogin__orLogin-buttonImageGoogle" /> Login with Google</button>
                <button className="modal__contentLogin__orLogin-button"><div className="modal__contentLogin__orLogin-buttonImageFacebook" />Login with Facebook</button>
            </div>

        </div>
    )
}