export const FindMore = ({
    main__container__offers__columLeft__back__img,
    bigText,
}) => {
    return (
        <div className="main__container__offers__columLeft">
            <div className={main__container__offers__columLeft__back__img}></div>
            <div className="main__container__offers__columLeft__back">

                <div className="main__container__offers__columLeft__back__line">
                    <svg className="main__container__offers__columLeft__back__line-svgLarge" width="65" height="108" viewBox="0 0 65 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="-63" cy="128" r="127" stroke="#46A358" stroke-width="2" />
                    </svg>
                    <svg className="main__container__offers__columLeft__back__line-svg" width="57" height="116" viewBox="0 0 57 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="-71" cy="128" r="127.5" stroke="#46A358" />
                    </svg>
                </div>

                <div className="main__container__offers__columLeft__back__container">
                    <div className="main__container__offers__columLeft__back__container-bigText">{bigText} </div>
                    <div className="main__container__offers__columLeft__back__container-smallText">We are an online plant shop
                    offering a wide range of cheap and trendy plants</div>
                    <a className="main__container__offers__columLeft__back__container-findMore">Find More <svg style={{ marginLeft: '5px' }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.8126 8.79428H3.56258" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.2748 4.2759C10.2748 4.2759 14.8123 6.72165 14.8123 8.79315C14.8123 10.8662 10.2748 13.3127 10.2748 13.3127" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></a>
                </div>

            </div>
        </div>
    )
}