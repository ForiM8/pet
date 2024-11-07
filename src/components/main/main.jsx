import "./main.scss"

export const Main = () => {
    return(
        <div className="main__container__welcome">

            <div className="main__container__welcome-text">

                <div className="main__container__welcome-textSredne">WELCOME TO GREENSHOP</div>
                <div className="main__container__welcome-textBig">LET'S MAKE A BETTER <span className="main__container__welcome-textBigSpan">PLANET</span></div>
                <div className="main__container__welcome-textSmall">We are an online plant shop offering a wide range
                     of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite
                      plants!</div>

            </div>

            <div className="main__container__welcome-image"></div>

        </div>
    )
}