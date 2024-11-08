import { Categories } from "../../components/columLeft/categories/categories"
import { Products } from "../../components/columRight/product"
import "./main.scss"

export const Main = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                            <Categories title={"Trerrariums"} count={"19"} />
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
                        <div className="main__container__main_colunLeft_banner-title">Super Sale</div>
                        <div className="main__container__main_colunLeft_banner-sale">UP TO 75% OFF</div>
                        <div className="main__container__main_colunLeft_banner-image">
                            <div className="main__container__main_colunLeft_banner-imageArraySmallOne"></div>
                            <div className="main__container__main_colunLeft_banner-imageArraySmallTwo"></div>
                            <div className="main__container__main_colunLeft_banner-imageArrayBig"></div>
                        </div>
                    </div>

                </div>

                <div className="main__container__main_colunRight">

                    <div className="main__container__main_colunRight_filter">
                        <div className="main__container__main_colunRight_filter__plans">
                            <div className="main__container__main_colunRight_filter__plans-item">All Plants</div>
                            <div className="main__container__main_colunRight_filter__plans-item">New Arrivals</div>
                            <div className="main__container__main_colunRight_filter__plans-item">Sale</div>
                        </div>
                        <div className="main__container__main_colunRight_filter__filter">
                            <div className="main__container__main_colunRight_filter__filter-item" >Short by:</div>
                            <div className="main__container__main_colunRight_filter__filter-item" >Default sorting</div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6666 5.66663L7.99998 10.3333L3.33331 5.66663" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="main__container__main__columRight__container__product">
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}