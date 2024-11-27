import { useEffect, useState } from "react"
import { Categories } from "../../components/main/columLeft/categories/categories"
import { Products } from "../../components/main/columRight/product"
import { FindMore } from "../../components/main/findMore/findMore"
import { OurBlock } from "../../components/main/ourBlock/ourBlock"
import { PageNumber } from "../../components/main/pageNumber/pageNumber"
import "./main.scss"
import { getPost } from "../../components/request/request"
import { useAuth } from "../../components/context/authContext/authContext"
import { getProducts, removeOneProduct } from "../../components/request/request-product"
import { CreateProduct } from "./create-product"
import { EditProduct } from "./edit-product"

export const Main = () => {

    const { adminTrue } = useAuth()

    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isEdit, setIsEdit] = useState({ status: false, id: null });
    const [isLoading, setIsLoadingPromo] = useState(false);
    const [listPromo, setListPromo] = useState([]);
    const [error, setError] = useState({
        status: false,
        message: "",
    });

    //   const { isAuth } = useAuth();
    //   console.log(isAuth)
    useEffect(() => {
        setIsLoadingPromo(true);
        getPost()
            .then((data) => {
                if (data.data && data.status === 200) {
                    setListPromo(data.data);
                }
            })
            .catch((error) =>
                setError({ status: true, message: Error(error).message })
            )
            .finally(() => setIsLoadingPromo(false));
    }, []);

    if (isLoading) {
        return <div className="loading__container">loading...</div>;
    }
    if (error.status) {
        return <div className="loading__container">{error.message}</div>;
    }




    const addProduct = () => {
        setIsModalOpen(true);
    };



    const removeProduct = (id) => {
        removeOneProduct(id)
            .then(({ }) => {
                setProducts((prevValue) =>
                    prevValue.filter((product) => product.id !== id)
                );
            })
            .catch(() => alert("Ошибка"));
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

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
                        <div className="main__container__main_colunLeft_priceRange_conatiner">
                            <input type="range" id="volume" name="volume" min="0" max="11" />
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
                        {adminTrue && (<button className="main__container__main_colunRight_filter__plans-item" style={{ backgroundColor: 'green', color: '#fff', width: '120px', border: 'none', cursor: 'pointer' }}>Добавить блок</button>)}
                        <div className="main__container__main_colunRight_filter__filter">
                            <div className="main__container__main_colunRight_filter__filter-item" >Short by:</div>
                            <div className="main__container__main_colunRight_filter__filter-item" >Default sorting</div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6666 5.66663L7.99998 10.3333L3.33331 5.66663" stroke="#3D3D3D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="main__container__main__columRight__container__product">
                        {/* <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} />
                        <Products title={"Barberton Daisy"} price={"$119.00"} /> */}
                        {listPromo.map((elem) => (
                            <div className="main__container__main__columRight__container__product__item">
                                <img className="main__container__main__columRight__container__product__item-image" src={elem.img}></img>
                                <div className="main__container__main__columRight__container__product__item-title">{elem.title}</div>
                                <div className="main__container__main__columRight__container__product__item-price">{elem.price}</div>
                                {adminTrue && (<div className="main__container__main__columRight__container__product__item-delete" style={{ cursor: 'pointer' }}>
                                    <div className="main__container__main__columRight__container__product__item-delete-krest"></div>
                                </div>)}
                            </div>
                        ))}
                        <CreateProduct
                            setProducts={setProducts}
                            onCloseModal={onCloseModal}
                            isModalOpen={isModalOpen}
                        />{isEdit.status && (
                            <EditProduct
                                setProducts={setProducts}
                                onCloseModal={setIsEdit}
                                isModalOpen={isEdit.status}
                                initialValues={
                                    products.filter((product) => product.id === isEdit.id)[0]
                                }
                                setIsEdit={setIsEdit}
                                id={isEdit.id}
                            />
                        )}
                    </div>

                </div>

            </div>

            <div className="main__container__papgeNumber">
                <PageNumber className={"main__container__papgeNumber__button-active"} text={'1'} />
                <PageNumber className={"main__container__papgeNumber__button"} text={'2'} />
                <PageNumber className={"main__container__papgeNumber__button"} text={'3'} />
                <PageNumber className={"main__container__papgeNumber__button"} text={'4'} />
                <PageNumber className={"main__container__papgeNumber__button"} text={'5'} />
            </div>

            <div className="main__container__offers">
                <FindMore
                    bigText={'SUMMER CACTUS & SUCCULENTS'}
                    main__container__offers__columLeft__back__img={'main__container__offers__columLeft__back__img-left'}
                />
                <FindMore
                    bigText={'STYLING TRNDS & MUCH MORE'}
                    main__container__offers__columLeft__back__img={'main__container__offers__columLeft__back__img-right'}
                />
            </div>

            <div className="main__container__ourBlock">
                <div className="main__container__ourBlock__header">
                    <div className="main__container__ourBlock__header-bigTest">Our Blog Posts</div>
                    <div className="main__container__ourBlock__header-smallText">We are an online plant shop offering a wide range of cheap and trendy plants. </div>
                </div>
                <div className="main__container__ourBlock__main">
                    <OurBlock
                        greenText={'September 12  I Read in 6 minutes'}
                        bigText={"Cactus & Succulent Care Tips"}
                        smallText={'Cacti are succulents are easy care plants for any home or patio.'}
                        className={'main__container__ourBlock__main__block-imgOne'}
                    />
                    <OurBlock
                        greenText={'September 13  I Read in 2 minutes'}
                        bigText={"Top 10 Succulents for Your Home"}
                        smallText={'Best in hanging baskets. Prefers medium to high light.'}
                        className={'main__container__ourBlock__main__block-imgTwo'}
                    />
                    <OurBlock
                        greenText={'September 15  I Read in 3 minutes'}
                        bigText={"Cacti & Succulent Care Tips"}
                        smallText={'Cacti and succulents thrive in containers and because most are..'}
                        className={'main__container__ourBlock__main__block-imgTree'}
                    />
                    <OurBlock
                        greenText={'September 15  I Read in 2 minutes'}
                        bigText={"Best Houseplants Room by Room"}
                        smallText={'The benefits of houseplants are endless. In addition to..'}
                        className={'main__container__ourBlock__main__block-imgFour'}
                    />
                </div>
            </div>
        </div>
    )
}