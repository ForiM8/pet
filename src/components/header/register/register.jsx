import { useState } from "react"
import { Input } from "../../input/input"
import { Modal } from "../../modal/modal"
import "./register.scss"
import { useModalRegister } from "../../context/modalContext/modalContext"
import { useForm } from "react-hook-form"
import { useAuth } from "../../context/authContext/authContext"
import { ModalRegister } from "../../modal/modalRegister"
import { getAuth } from "../../request/request"

export const Registerr = []

export const Register = () => {

    const { modalActiveRegister, modalActive, setModalActiveRegister, setModalActive } = useModalRegister()

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const { isAuth, setIsAuth } = useAuth()


    const onSubmit = (data) => {
        if (watch("password") === watch("confirmPassword")) {
            //setIsAuth(prev => !prev)
            //console.log(data)
            console.log(isAuth)
            Registerr.push(data)
            console.log(data)
            
            console.log(Registerr[Registerr.length - 1].email)
            setModalActiveRegister(prev => !prev)
            setModalActive(prev => !prev)
        } else {
            alert('пароли не совпадают')
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <div className="modal__contentLogin__header">
                <button className="modal__contentLogin__header-login" onClick={() => (setModalActiveRegister(prev => !prev), setModalActive(prev => !prev))}>Login</button>
                <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.854 12H1.43V0.12H0.854V12Z" fill="#3D3D3D" />
                </svg>
                <button className="modal__contentLogin__header-register" >Register</button>
            </div>

            <div className="modal__contentLogin__inputBox">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal__contentLogin__inputBox-smallText">Enter your email and password to register.</div>
                    <Input
                        classNameWrapper={'wrapper'}
                        input_type={'User'}
                        name={"user"}
                        label={"Username"}
                        register={register}
                        validate={{ validate: true }}
                        classNameInput={'modal__contentLogin__inputBox__input'}
                        classNameLabel={'modal__contentLogin__inputBox__label'}
                    />
                    <Input
                        classNameWrapper={'wrapper'}
                        input_type={"email"}
                        name={"email"}
                        label={"Enter your email address"}
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
                    <Input
                        classNameWrapper={'wrapper'}
                        input_type={'password'}
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        register={register}
                        validate={{ validate: true }}
                        classNameInput={'modal__contentLogin__inputBox__input'}
                        classNameLabel={'modal__contentLogin__inputBox__label'}
                    />

                    <button className="modal__contentLogin__inputBox__button">Register</button>
                </form>
            </div>

            <div className="modal__contentLogin__orLogin">
                <div className="modal__contentLogin__orLogin__boxLine">
                    <div className="modal__contentLogin__orLogin__boxLine-lineOne"></div>
                    <div className="modal__contentLogin__orLogin__boxLine-text">Or register with</div>
                    <div className="modal__contentLogin__orLogin__boxLine-lineTwo"></div>
                </div>
                <button className="modal__contentLogin__orLogin-button"><div className="modal__contentLogin__orLogin-buttonImageGoogle" />Continue with Google</button>
                <button className="modal__contentLogin__orLogin-button"><div className="modal__contentLogin__orLogin-buttonImageFacebook" />Continue with Facebook</button>
            </div>

        </div>
    )
}