import { useForm } from "react-hook-form";
import { Input } from "../../components/input/input"
import { ProfileElement } from "../../components/profile/profile"
import "./profile.scss"
import { useModalRegister } from "../../components/context/modalContext/modalContext";
import { useAuth } from "../../components/context/authContext/authContext";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
    const {setIsAuth, setAdminTrue} = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const navigate = useNavigate()

    const logout = () => {
        navigate("/");
    
        localStorage.removeItem("token");
        setIsAuth(false);
        setAdminTrue(false)
      };

    const onSubmit = (data) => {
        if (watch("password") === watch("confirmPassword")) {

        }
    }
    return (
        <div className="containerProfile">
            <div className="columLeft">
                <div className="columLeft__header">My Account</div>
                <div className="columLeft__container">
                    <ProfileElement
                        classNameContainer={'columLeft__container__elementActive'}
                        classNameText={'columLeft__container__elementActive-textActive'}
                        svg={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.65385C7.61038 2.65385 6.48387 3.77313 6.48387 5.15385C6.48387 6.53456 7.61038 7.65385 9 7.65385C10.3896 7.65385 11.5161 6.53456 11.5161 5.15385C11.5161 3.77313 10.3896 2.65385 9 2.65385ZM5.32258 5.15385C5.32258 3.13588 6.96902 1.5 9 1.5C11.031 1.5 12.6774 3.13588 12.6774 5.15385C12.6774 7.17181 11.031 8.80769 9 8.80769C6.96902 8.80769 5.32258 7.17181 5.32258 5.15385Z" fill="#46A358" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.09963 11.5C5.47683 11.5 4.16129 12.8071 4.16129 14.4195C4.16129 14.5042 4.17686 14.5639 4.19319 14.5987C4.20697 14.6281 4.21879 14.6365 4.22865 14.6418C4.67991 14.8858 5.94511 15.3462 9 15.3462C12.0549 15.3462 13.3201 14.8858 13.7713 14.6418C13.7812 14.6365 13.793 14.6281 13.8068 14.5987C13.8231 14.5639 13.8387 14.5042 13.8387 14.4195C13.8387 12.8071 12.5232 11.5 10.9004 11.5H7.09963ZM3 14.4195C3 12.1699 4.83547 10.3462 7.09963 10.3462H10.9004C13.1645 10.3462 15 12.1699 15 14.4195C15 14.8325 14.8495 15.3725 14.3264 15.6553C13.6335 16.03 12.1469 16.5 9 16.5C5.85311 16.5 4.36654 16.03 3.67359 15.6553C3.15048 15.3725 3 14.8325 3 14.4195Z" fill="#46A358" />
                        </svg>
                        }
                        text={'Account Details'}
                    />
                    <ProfileElement
                        classNameContainer={'columLeft__container__element'}
                        classNameText={'columLeft__container__element-text'}
                        svg={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2086 7.08331C9.40441 7.08331 8.75024 7.73748 8.75024 8.54248C8.75024 9.34665 9.40441 9.99998 10.2086 9.99998C11.0127 9.99998 11.6669 9.34665 11.6669 8.54248C11.6669 7.73748 11.0127 7.08331 10.2086 7.08331ZM10.2086 11.25C8.71524 11.25 7.50024 10.0358 7.50024 8.54248C7.50024 7.04831 8.71524 5.83331 10.2086 5.83331C11.7019 5.83331 12.9169 7.04831 12.9169 8.54248C12.9169 10.0358 11.7019 11.25 10.2086 11.25Z" fill="#727272" />
                            <mask id="mask0_150_969" maskUnits="userSpaceOnUse" x="3" y="1" width="15" height="17">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33325 1.66666H17.0828V17.9167H3.33325V1.66666Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_150_969)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2078 2.91666C7.1061 2.91666 4.58276 5.46416 4.58276 8.59416C4.58276 12.5767 9.26943 16.4567 10.2078 16.6633C11.1461 16.4558 15.8328 12.5758 15.8328 8.59416C15.8328 5.46416 13.3094 2.91666 10.2078 2.91666ZM10.2078 17.9167C8.71276 17.9167 3.33276 13.29 3.33276 8.59416C3.33276 4.77416 6.41693 1.66666 10.2078 1.66666C13.9986 1.66666 17.0828 4.77416 17.0828 8.59416C17.0828 13.29 11.7028 17.9167 10.2078 17.9167Z" fill="#727272" />
                            </g>
                        </svg>
                        }
                        text={'Addres'}
                    />
                    <ProfileElement
                        classNameContainer={'columLeft__container__element'}
                        classNameText={'columLeft__container__element-text'}
                        svg={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_150_975)">
                                <path d="M12.8646 15.1873H7.41669C5.0909 15.1873 3.19871 13.2951 3.19871 10.9693V6.64588C3.19871 4.48381 2.12108 2.48255 0.316103 1.29245C-0.00804932 1.07874 -0.0975409 0.642736 0.11617 0.318584C0.329881 -0.00560306 0.765845 -0.0951298 1.09007 0.118652C2.12045 0.798029 2.95638 1.69407 3.55414 2.72572C3.68332 2.87043 4.72495 3.97449 6.43253 3.97449H14.5278C16.7364 3.93319 18.4651 6.14963 17.8877 8.28147L16.9558 11.9958C16.4843 13.8749 14.802 15.1873 12.8646 15.1873ZM4.42734 4.98332C4.54421 5.52326 4.6047 6.08 4.6047 6.64588V10.9693C4.6047 12.5198 5.86616 13.7813 7.41669 13.7813H12.8646C14.1562 13.7813 15.2777 12.9064 15.592 11.6536L16.5239 7.93932C16.8671 6.67259 15.8397 5.35598 14.5278 5.38048H6.4325C5.66022 5.38048 4.98801 5.21398 4.42734 4.98332ZM7.06519 17.1205C7.06519 16.6352 6.67176 16.2418 6.18645 16.2418C5.02046 16.2882 5.02147 17.9533 6.18645 17.9993C6.67176 17.9993 7.06519 17.6059 7.06519 17.1205ZM14.06 17.1205C14.06 16.6352 13.6666 16.2418 13.1813 16.2418C12.0153 16.2882 12.0163 17.9533 13.1813 17.9993C13.6666 17.9993 14.06 17.6059 14.06 17.1205ZM15.2308 7.48948C15.2308 7.10121 14.9161 6.78648 14.5278 6.78648H6.71369C5.78096 6.8236 5.78166 8.15567 6.71369 8.19247H14.5278C14.9161 8.19247 15.2308 7.87774 15.2308 7.48948Z" fill="#727272" />
                            </g>
                            <defs>
                                <clipPath id="clip0_150_975">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        }
                        text={'Orders'}
                    />
                    <ProfileElement
                        classNameContainer={'columLeft__container__element'}
                        classNameText={'columLeft__container__element-text'}
                        svg={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15.1099C7.77222 15.1099 7.55261 15.0273 7.38147 14.8774C6.73511 14.3123 6.11194 13.7811 5.56213 13.3126L5.55933 13.3102C3.94739 11.9365 2.55542 10.7502 1.58691 9.58167C0.504272 8.27527 0 7.03662 0 5.68347C0 4.36877 0.450806 3.15588 1.26929 2.26807C2.09753 1.36975 3.23401 0.875 4.46973 0.875C5.39331 0.875 6.23914 1.16699 6.98364 1.7428C7.35938 2.03345 7.69995 2.38916 8 2.80408C8.30017 2.38916 8.64062 2.03345 9.01648 1.7428C9.76099 1.16699 10.6068 0.875 11.5304 0.875C12.766 0.875 13.9026 1.36975 14.7308 2.26807C15.5493 3.15588 16 4.36877 16 5.68347C16 7.03662 15.4958 8.27527 14.4132 9.58154C13.4447 10.7502 12.0529 11.9364 10.4412 13.3099C9.89038 13.7792 9.26624 14.3112 8.61841 14.8777C8.44739 15.0273 8.22766 15.1099 8 15.1099ZM4.46973 1.81226C3.4989 1.81226 2.60706 2.19971 1.95825 2.90332C1.2998 3.61755 0.937134 4.60486 0.937134 5.68347C0.937134 6.82153 1.36011 7.83936 2.30847 8.98364C3.2251 10.0897 4.5885 11.2516 6.16711 12.5969L6.17004 12.5994C6.72192 13.0697 7.34753 13.6029 7.99866 14.1722C8.65369 13.6018 9.28027 13.0677 9.83325 12.5967C11.4117 11.2513 12.775 10.0897 13.6917 8.98364C14.6399 7.83936 15.0629 6.82153 15.0629 5.68347C15.0629 4.60486 14.7002 3.61755 14.0417 2.90332C13.3931 2.19971 12.5011 1.81226 11.5304 1.81226C10.8192 1.81226 10.1663 2.03833 9.58972 2.48413C9.07593 2.88159 8.71802 3.38403 8.50818 3.7356C8.40027 3.91638 8.21033 4.02429 8 4.02429C7.78967 4.02429 7.59973 3.91638 7.49182 3.7356C7.2821 3.38403 6.92419 2.88159 6.41028 2.48413C5.83374 2.03833 5.18079 1.81226 4.46973 1.81226Z" fill="#727272" />
                        </svg>
                        }
                        text={'Wishlist'}
                    />
                    <ProfileElement
                        classNameContainer={'columLeft__container__element'}
                        classNameText={'columLeft__container__element-text'}
                        svg={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.18774 11.1404L7.43249 8.22368L9.99299 10.2337L12.1897 7.39868" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7503 1.76251C15.5468 1.76251 16.1918 2.40751 16.1918 3.20401C16.1918 3.99976 15.5468 4.64551 14.7503 4.64551C13.9538 4.64551 13.3088 3.99976 13.3088 3.20401C13.3088 2.40751 13.9538 1.76251 14.7503 1.76251Z" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.5667 6.95176C15.6664 7.62301 15.7122 8.37901 15.7122 9.22726C15.7122 14.4308 13.9782 16.1648 8.77466 16.1648C3.57191 16.1648 1.83716 14.4308 1.83716 9.22726C1.83716 4.02451 3.57191 2.28976 8.77466 2.28976C9.60716 2.28976 10.3504 2.33401 11.0119 2.43001" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        }
                        text={'Reports'}
                    />
                    <ProfileElement
                        classNameContainer={'columLeft__container__element'}
                        classNameText={'columLeft__container__element-text'}
                        svg={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.90942 11.0933V2.0625" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.0964 8.89815L8.90941 11.0941L6.72241 8.89815" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.2777 5.44403C14.962 5.69153 15.9377 6.69653 15.9377 10.694C15.9377 16.019 14.2045 16.019 9.00024 16.019C3.79449 16.019 2.06274 16.019 2.06274 10.694C2.06274 6.69653 3.03774 5.69153 5.72274 5.44403" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        }
                        text={'Downloads'}
                    />
                    <ProfileElement
                        classNameContainer={'columLeft__container__element'}
                        classNameText={'columLeft__container__element-text'}
                        svg={<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.75C4.12918 15.75 2.2175 15.404 1.90764 13.6525C1.59779 11.901 3.58037 8.60806 4.19131 7.52135C6.23443 3.88806 7.62279 2.25 9 2.25C10.3772 2.25 11.7656 3.88806 13.8087 7.52135C14.4196 8.60806 16.4022 11.901 16.0924 13.6525C15.7833 15.404 13.8708 15.75 9 15.75Z" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 6.375V9.29625" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.99687 11.9212H9.00362" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        }
                        text={'Support'}
                    />
                    <div className="columLeft__container-line"></div>
                    <button className="columLeft__container__logout" onClick={logout}><div className="columLeft__container__logout-svg"></div>Logout</button>
                </div>
            </div>
            <div className="columRight">
                <div className="columRight__container">
                    <div className="columRight__container-header">Personal Information</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="columRight__container__personal">
                            <Input
                                input_type={'text'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'First Name'}
                                labelSymbol={'*'}
                            />
                            <Input
                                input_type={'text'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'Last Name'}
                                labelSymbol={'*'}
                            />
                            <Input
                                input_type={'text'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'Email address'}
                                labelSymbol={'*'}
                            />
                            <Input
                                input_type={'text'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'Phone Number'}
                                labelSymbol={'*'}
                            />
                            <Input
                                input_type={'text'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'Username'}
                                labelSymbol={'*'}
                            />

                            
                            <div className="columRight__container__personal__photo">
                                <div className="columRight__container__personal__photo-header">Photo</div>
                                <div className="columRight__container__personal__photo__block">
                                    <div className="columRight__container__personal__photo__block-image"></div>
                                    <button className="columRight__container__personal__photo__block-change">Change</button>
                                    <button className="columRight__container__personal__photo__block-remove">Remove</button>
                                </div>
                            </div>


                        </div>
                    </form>
                    <div className="columRight__container-header">Password change</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="columRight__container__password">
                            <Input
                                input_type={'password'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'Current password'}
                                
                            />
                            <Input
                                input_type={'password'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'New password'}
                               
                            />
                            <Input
                                input_type={'password'}
                                name={"First_Name"}
                                classNameWrapper={'columRight__container__personal__wrapper'}
                                register={register}
                                classNameInput={'columRight__container__personal__wrapper-input'}
                                classNameLabel={'columRight__container__personal__wrapper-label'}
                                label={'Confirm new password'}
                                
                            />
                            <button className="columRight__container__password-button">Save Change</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}