import { BottomBlock } from "../../components/footer/bottomBlock"
import { ColorBlock } from "../../components/footer/colorBlock"
import { Contact } from "../../components/footer/contact"
import "./footer.scss"

export const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__container__color">
                <div className="footer__container__color__top">
                    <div className="footer__container__color__top__left">
                        <ColorBlock
                            className={'footer__container__color__top__left__block-imgOne'}
                            bigText={'Garden Care'}
                            smallText={'We are an online plant shop offering a wide range of cheap and trendy plants.'}
                        />
                        <ColorBlock
                            className={'footer__container__color__top__left__block-imgTwo'}
                            bigText={'Plant Renovation'}
                            smallText={'We are an online plant shop offering a wide range of cheap and trendy plants.'}
                        />
                        <ColorBlock
                            className={'footer__container__color__top__left__block-imgTree'}
                            bigText={'Watering Graden'}
                            smallText={'We are an online plant shop offering a wide range of cheap and trendy plants.'}
                        />
                    </div>

                    <div className="footer__container__color__top__right">
                        <div className="footer__container__color__top__right-bigText">Would you like to join newsletters?</div>
                        <div className="footer__container__color__top__right__inputBlock">
                            <input className="footer__container__color__top__right__inputBlock-input" type="text" placeholder="enter your email address..." />
                            <button className="footer__container__color__top__right__inputBlock-button">Join</button>
                        </div>
                        <div className="footer__container__color__top__right-smallText">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </div>
                    </div>
                </div>

                <div className="footer__container__color__center">
                    <div className="footer__container__color__center__logo"></div>
                    <Contact
                        svg={
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0918 8.92531C12.0918 7.77425 11.1591 6.84155 10.0081 6.84155C8.85787 6.84155 7.92517 7.77425 7.92517 8.92531C7.92517 10.0755 8.85787 11.0082 10.0081 11.0082C11.1591 11.0082 12.0918 10.0755 12.0918 8.92531Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        }
                        text={'70 West Buckingham Ave. Farmingdale, NY 11735'}
                    />
                    <Contact
                        svg={
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6208 7.51587C14.6208 7.51587 11.9457 10.7264 9.98919 10.7264C8.03347 10.7264 5.32837 7.51587 5.32837 7.51587" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.0434 9.97404C2.0434 4.27562 4.02753 2.37671 9.97991 2.37671C15.9323 2.37671 17.9164 4.27562 17.9164 9.97404C17.9164 15.6716 15.9323 17.5714 9.97991 17.5714C4.02753 17.5714 2.0434 15.6716 2.0434 9.97404Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        }
                        text={'contact@greenshop.com'}
                    />
                    <Contact
                        svg={
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41708 13.5825C0.668758 7.83352 1.48616 5.20096 2.09213 4.35263C2.16997 4.21552 4.08873 1.34323 6.1455 3.02839C11.2507 7.23288 4.78759 6.63843 9.0745 10.9261C13.3623 15.2128 12.7669 8.74996 16.9716 13.8541C18.6568 15.9117 15.7844 17.8303 15.6482 17.9073C14.7998 18.5141 12.1663 19.3315 6.41708 13.5825Z" stroke="#46A358" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        }
                        text={'+88 01911 717 490'}
                    />
                </div>

                <div className="footer__container__color__bottom">

                    <div className="footer__container__color__bottom__container">

                        <BottomBlock
                            bigText={'My Account'} smalltextOne={'My Account'} smalltextTwo={'Our stores'}
                            smalltextTree={'Contact us'} smalltextFour={'Career'} smalltextFive={'Specials'}
                        />

                        <BottomBlock
                            bigText={'Help & Guide'} smalltextOne={'Help Center'} smalltextTwo={'How to Buy'}
                            smalltextTree={'Shipping & Deliver'} smalltextFour={'Product Policy'} smalltextFive={'How to Return'}
                        />
                        <BottomBlock
                            bigText={'Categories'} smalltextOne={'House Plants'} smalltextTwo={'Potter Plants'}
                            smalltextTree={'Seeds'} smalltextFour={'Small Plants'} smalltextFive={'Accessories'}
                        />
                    </div>

                    <div className="footer__container__color__bottom__social">

                        <div className="footer__container__color__bottom__social-bigText">Social Media</div>

                        <div className="footer__container__color__bottom__social-social">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="#46A358" stroke-opacity="0.2" />
                                <path d="M14 13.3333H12V16H14V24H17.3333V16H19.7333L20 13.3333H17.3333V12.2C17.3333 11.6 17.4667 11.3333 18.0667 11.3333H20V8H17.4667C15.0667 8 14 9.06667 14 11.0667V13.3333Z" fill="#46A358" fill-opacity="0.6" />
                            </svg>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="#46A358" stroke-opacity="0.2" />
                                <path d="M16 9.46667C18.1333 9.46667 18.4 9.46667 19.2667 9.53333C21.4667 9.6 22.4667 10.6667 22.5333 12.8C22.6 13.6667 22.6 13.8667 22.6 16C22.6 18.1333 22.6 18.4 22.5333 19.2C22.4667 21.3333 21.4 22.4 19.2667 22.4667C18.4 22.5333 18.2 22.5333 16 22.5333C13.8667 22.5333 13.6 22.5333 12.8 22.4667C10.6 22.4 9.6 21.3333 9.53333 19.2C9.46667 18.3333 9.46667 18.1333 9.46667 16C9.46667 13.8667 9.46667 13.6 9.53333 12.8C9.6 10.6667 10.6667 9.6 12.8 9.53333C13.6 9.46667 13.8667 9.46667 16 9.46667ZM16 8C13.8 8 13.5333 8 12.7333 8.06667C9.8 8.2 8.2 9.8 8.06667 12.7333C8 13.5333 8 13.8 8 16C8 18.2 8 18.4667 8.06667 19.2667C8.2 22.2 9.8 23.8 12.7333 23.9333C13.5333 24 13.8 24 16 24C18.2 24 18.4667 24 19.2667 23.9333C22.2 23.8 23.8 22.2 23.9333 19.2667C24 18.4667 24 18.2 24 16C24 13.8 24 13.5333 23.9333 12.7333C23.8 9.8 22.2 8.2 19.2667 8.06667C18.4667 8 18.2 8 16 8ZM16 11.8667C13.7333 11.8667 11.8667 13.7333 11.8667 16C11.8667 18.2667 13.7333 20.1333 16 20.1333C18.2667 20.1333 20.1333 18.2667 20.1333 16C20.1333 13.7333 18.2667 11.8667 16 11.8667ZM16 18.6667C14.5333 18.6667 13.3333 17.4667 13.3333 16C13.3333 14.5333 14.5333 13.3333 16 13.3333C17.4667 13.3333 18.6667 14.5333 18.6667 16C18.6667 17.4667 17.4667 18.6667 16 18.6667ZM20.2667 10.8C19.7333 10.8 19.3333 11.2 19.3333 11.7333C19.3333 12.2667 19.7333 12.6667 20.2667 12.6667C20.8 12.6667 21.2 12.2667 21.2 11.7333C21.2 11.2 20.8 10.8 20.2667 10.8Z" fill="#46A358" fill-opacity="0.6" />
                            </svg>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="#46A358" stroke-opacity="0.2" />
                                <path d="M13.0319 22.0036C19.0699 22.0036 22.3718 17.0012 22.3718 12.6636C22.3718 12.5214 22.3689 12.38 22.3624 12.2392C23.0033 11.7759 23.5605 11.1976 24 10.5395C23.4118 10.8008 22.7789 10.9768 22.1149 11.0562C22.7926 10.6498 23.313 10.0067 23.5585 9.24021C22.9241 9.61636 22.2217 9.88969 21.4742 10.0371C20.8749 9.39908 20.0218 9 19.0779 9C17.2648 9 15.7946 10.4702 15.7946 12.2823C15.7946 12.54 15.8236 12.7904 15.8796 13.0308C13.1516 12.8938 10.7324 11.5874 9.11352 9.60125C8.83127 10.0862 8.66877 10.65 8.66877 11.2511C8.66877 12.3899 9.24837 13.3953 10.1297 13.9836C9.59121 13.9671 9.08531 13.8189 8.64293 13.5729C8.6422 13.5866 8.6422 13.6004 8.6422 13.6148C8.6422 15.2047 9.77392 16.532 11.2758 16.8329C11.0001 16.908 10.71 16.9484 10.4105 16.9484C10.199 16.9484 9.99338 16.9273 9.79339 16.8893C10.2112 18.1933 11.4232 19.1425 12.8601 19.1693C11.7364 20.0499 10.3209 20.5745 8.78305 20.5745C8.51827 20.5745 8.25695 20.5594 8 20.529C9.45273 21.46 11.1777 22.0036 13.0319 22.0036Z" fill="#46A358" fill-opacity="0.6" />
                            </svg>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="#46A358" stroke-opacity="0.2" />
                                <path d="M11.3333 9.66667C11.3333 10.6 10.6 11.3333 9.66667 11.3333C8.73333 11.3333 8 10.6 8 9.66667C8 8.73333 8.73333 8 9.66667 8C10.6 8 11.3333 8.73333 11.3333 9.66667ZM11.3333 12.6667H8V23.3333H11.3333V12.6667ZM16.6667 12.6667H13.3333V23.3333H16.6667V17.7333C16.6667 14.6 20.6667 14.3333 20.6667 17.7333V23.3333H24V16.6C24 11.3333 18.0667 11.5333 16.6667 14.1333V12.6667Z" fill="#46A358" fill-opacity="0.6" />
                            </svg>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="#46A358" stroke-opacity="0.2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1653 13.4299L22.168 13.4306C22.168 13.4306 22.1676 13.4305 22.1667 13.4303C22.1663 13.4302 22.1658 13.4301 22.1653 13.4299ZM11.3244 13.3569C13.9176 13.1957 18.7483 13.1957 21.3415 13.3569L21.3422 13.3644C21.4047 13.9972 21.4299 14.8414 21.4299 16.0192C21.4299 17.1824 21.4053 18.0269 21.3441 18.665C18.6962 18.7703 13.9713 18.7703 11.3228 18.665C11.261 18.0332 11.236 17.1914 11.236 16.0192C11.236 14.8414 11.2612 13.9972 11.3237 13.3644L11.3244 13.3569ZM22.2422 18.6111C22.2422 18.6111 22.2405 18.6115 22.237 18.6122L22.2422 18.6111ZM10.4979 18.6077L10.5006 18.6084C10.4988 18.6079 10.4979 18.6077 10.4979 18.6077ZM7 16.0192C7 20.8412 7.38887 22.63 10.4221 22.8633C13.222 23.0189 19.4439 23.0189 22.2438 22.8633C25.277 22.7078 25.6659 20.8412 25.6659 16.0192C25.6659 11.1971 25.277 9.40832 22.2438 9.17499C19.4439 8.94167 13.222 8.94167 10.4221 9.17499C7.38887 9.40832 7 11.1971 7 16.0192ZM10.4979 13.4306C10.4979 13.4306 10.4988 13.4304 10.5007 13.4299L10.4979 13.4306ZM16.7823 17.7389C15.5039 18.3781 13.9997 17.4484 13.9997 16.0192C13.9997 14.5899 15.5039 13.6602 16.7823 14.2994C18.1994 15.008 18.1994 17.0303 16.7823 17.7389Z" fill="#46A358" fill-opacity="0.6" />
                            </svg>

                        </div>

                        <div className="footer__container__color__bottom__social-bigText">We accept</div>

                        <div className="footer__container__color__bottom__social-pay"></div>

                    </div>

                </div>
            </div>
        </div>
    )
}