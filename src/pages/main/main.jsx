import { Categories } from "../../components/columLeft/categories/categories"
import "./main.scss"

export const Main = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className="main__container__welcome">

                <div className="main__container__welcome_text">

                    <div className="main__container__welcome_text-Sredne">WELCOME TO GREENSHOP</div>
                    <div className="main__container__welcome_text-Big">LET'S MAKE A BETTER <span className="main__container__welcome_text-BigSpan">PLANET</span></div>
                    <div className="main__container__welcome_text-Small">We are an online plant shop offering a wide range
                        of cheap and trendy plants. Use our_plants to create an unique Urban Jungle. Order your favorite
                        plants!
                    </div>

                    <button className="main__container__welcome_text_button">SHOP NOW</button>

                </div>

                <div className="main__container__welcome_image">

                    <div className="main__container_welcome_image-small"></div>

                </div>

            </div>

            <div className="main__container__main">

                <div className="main__container__main_colunLeft">

                    <div className="main__container__main_colunLeft_categories">
                        Categiries
                        <div className="main__container__main_colunLeft_categories-categories">
                            <Categories title={"House Plants"} count={"33"} />
                            <Categories title={"Potter Plants"} count={"12"} />
                            <Categories title={"Seeds"} count={"65"} />
                            <Categories title={"Small Plants"} count={"39"} />
                            <Categories title={"Big Plants"} count={"23"} />
                            <Categories title={"Succulents"} count={"17"} />
                            <Categories title={"Trerrariums"} count={"19 "} />
                            <Categories title={"Gardening"} count={"13"} />
                            <Categories title={"Accessories"} count={"18"} />
                        </div>
                    </div>

                    <div className="main__container__main_colunLeft_priceRange">
                        Price Range
                        <div className="main__container__main_colunLeft_priceRange-range">

                        </div>
                    </div>

                    <div className="main__container__main_colunLeft_size">
                        Size
                        <div className="main__container__main_colunLeft_size-size">
                            <Categories title={"Small"} count={"119"} />
                            <Categories title={"Medium"} count={"86"} />
                            <Categories title={"Large"} count={"78"} />
                        </div>
                    </div>

                    <div className="main__container__main_colunLeft_banner">


                    </div>

                </div>

                <div className="main__container__main_colunRight">

                    
                </div>

            </div>
        </div>
    )
}