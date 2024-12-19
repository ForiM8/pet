import { useEffect, useState } from 'react';
import './cards.scss';
import { getProduct } from '../../components/request/request-product';
import { useAuth } from '../../components/context/authContext/authContext';
import { Slider } from '../../components/slider/slider';

export const Cards = () => {
    const { nextInfo, setBuyCount, buyMassiv, setBuyMassiv, modalCount, setModalCount, listPromo, setListPromo} = useAuth();
    const [count, setCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [render, setIsRender] = useState([]);
    const user =
        localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));
    
    const [error, setError] = useState({
        status: false,
        message: "",
    });

    const [buyBox, setBuyBox] = useState({
        id: null,
        count: null,
    });

    const id = nextInfo;

    function clikPlus() {
        setCount(prev => prev + 1);
    }

    function clikMinus() {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    }
    const buy = () => {
        setBuyCount(prev => prev + count);

        const existingItem = buyMassiv.find(item => item.id === id);
        if (existingItem) {
            setBuyMassiv(prev => prev.map(item => item.id === id ? { ...item, count: item.count + count } : item));
        } else {
            setBuyMassiv(prev => [...prev, { id: id, count: count }]);
        }
    };
    useEffect(() => {
        setIsLoading(true);
        getProduct(id)
            .then((data) => {
                setIsRender([data.data]);
            })
            .catch((error) =>
                setError({ status: true, message: new Error(error).message })
            )
            .finally(() => setIsLoading(false));
    }, [id]);
    useEffect(() => {
        getProduct(id)
            .then((data) => {
                setListPromo([data.data]);
            })
            .catch((error) =>
                setError({ status: true, message: new Error(error).message })
            )
            .finally(() => setIsLoading(false));
    }, [id]);

    useEffect(() => {
        if (buyMassiv.length === 0) return;

        const promises = buyMassiv.map(element =>
            getProduct(element.id, element.count)
                .then(data => ({ id: element.id, data: data.data, count: element.count }))
                .catch(error => {
                    setError({ status: true, message: error.message });
                    return null;
                })
        );

        Promise.all(promises)
            .then(results => {
                const validResults = results.filter(result => result);
                setListPromo(validResults);
            })
            .finally(() => setIsLoading(false));
    }, [buyMassiv]);

    useEffect(() => {
        const updatedModalCount = listPromo.map(elem => {
            if (elem && elem.data) {
                return {
                    id: elem.id,
                    name: user.userName,
                    price: elem.data.price,
                    img: elem.data.img,
                    title: elem.data.title,
                    count: elem.count,
                    total: elem.data.price * elem.count,
                    data: elem.data
                };
            } else {
                return null;
            }
        })

        setModalCount(updatedModalCount);
    }, [listPromo]);

    if (isLoading) {
        return <div className="loading__container">loading...</div>;
    }
    if (error.status) {
        return <div className="loading__container">{error.message}</div>;
    }

    console.log("listPromo ggg", listPromo);
    console.log('modalCount - ', modalCount);
    console.log('buyMassiv - ', buyMassiv);

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {render.map((elem) => (
                <div className="main__cards" key={elem.id}>
                    <p className='main__cards-routes'><span className='main__cards-routes-span'>Home</span>  / Shop</p>

                    <div className="main__cards__container-short">
                        <div className="main__cards__container-short__box-image">
                            <div className="main__cards__container-short__box-image__left">
                                <img src="https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Agi6~rMsqUGZyoVNDJ51uq~DfcDtB3a7peAJsfjYVOstTxbcT~C8jODIllNnSRI0MklFp6Uzpg-cyP-SoEAe3UJ~syD-uciPw8ExhATE9phPyZw-NUk58sewVEtnveEGlHsTcx0Dz70rWpcBOVYRIGDGQPSFzDsotqPOPfxHJ3bzPEd47~FvoyrFIOvMffKLRJM6giZABB7D4JifJUcmHxNTZFY~tCKxhEUfGBOAUqdVlGzH9~Z-Pz-H0XfDJ230jd0Eee8Md9AdgV7l0SMexkwmditKnvZAjU7XBwxgWtIMzAiWL3GtCbAYzr~AT4CcfscMj7I2Gmnrvu5qs0NxKg__" alt="" className="main__cards__container-short__box-image__left-img" />
                                <img src={elem.img} alt="" className="main__cards__container-short__box-image__left-img-active" />
                                <img src="https://s3-alpha-sig.figma.com/img/78e9/e6c1/90effae17498640571679183299f774e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Agi6~rMsqUGZyoVNDJ51uq~DfcDtB3a7peAJsfjYVOstTxbcT~C8jODIllNnSRI0MklFp6Uzpg-cyP-SoEAe3UJ~syD-uciPw8ExhATE9phPyZw-NUk58sewVEtnveEGlHsTcx0Dz70rWpcBOVYRIGDGQPSFzDsotqPOPfxHJ3bzPEd47~FvoyrFIOvMffKLRJM6giZABB7D4JifJUcmHxNTZFY~tCKxhEUfGBOAUqdVlGzH9~Z-Pz-H0XfDJ230jd0Eee8Md9AdgV7l0SMexkwmditKnvZAjU7XBwxgWtIMzAiWL3GtCbAYzr~AT4CcfscMj7I2Gmnrvu5qs0NxKg__" alt="" className="main__cards__container-short__box-image__left-img" />
                                <img src={elem.img} alt="" className="main__cards__container-short__box-image__left-img" />
                            </div>
                            <div className="main__cards__container-short__box-image__right">
                                <img className="main__cards__container-short__box-image__right-image" src={elem.img} />
                            </div>
                        </div>
                        <div className="main__cards__container-short__box-text">
                            <div className='main__cards__container-short__box-text__header'>
                                <div className="main__cards__container-short__box-text__header__text">
                                    <h1 className="main__cards__container-short__box-text__header__text-head">{elem.title}</h1>
                                    <p className="main__cards__container-short__box-text__header__text-price">${elem.price}</p>
                                </div>
                                <div className="main__cards__container-short__box-text__header__stars">
                                    <div className="main__cards__container-short__box-text__header__stars__stars-active"></div>
                                    <div className="main__cards__container-short__box-text__header__stars__stars-active"></div>
                                    <div className="main__cards__container-short__box-text__header__stars__stars-active"></div>
                                    <div className="main__cards__container-short__box-text__header__stars__stars-active"></div>
                                    <div className="main__cards__container-short__box-text__header__stars__stars-passive"></div>
                                    <div className="main__cards__container-short__box-text__header__stars__stars-text">19 Customer Review</div>
                                </div>
                            </div>

                            <div className="main__cards__container-short__box-text__description">
                                <div className="main__cards__container-short__box-text__description__short">
                                    <div className="main__cards__container-short__box-text__description__short-header">Short Description:</div>
                                    <div className="main__cards__container-short__box-text__description__short-text">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.</div>
                                </div>

                                <div className="main__cards__container-short__box-text__description__size">
                                    <div className="main__cards__container-short__box-text__description__size-header">Size:</div>
                                    <div className="main__cards__container-short__box-text__description__size__button-container">
                                        <button className="main__cards__container-short__box-text__description__size__button-container__botton-active">S</button>
                                        <button className="main__cards__container-short__box-text__description__size__button-container__botton">M</button>
                                        <button className="main__cards__container-short__box-text__description__size__button-container__botton">L</button>
                                        <button className="main__cards__container-short__box-text__description__size__button-container__botton">XL</button>
                                    </div>
                                </div>

                                <div className="main__cards__container-short__box-text__description__buy">
                                    <div className="main__cards__container-short__box-text__description__buy__buy-block">
                                        <div className="main__cards__container-short__box-text__description__buy__buy-block__count-container">
                                            <button onClick={clikMinus} className="main__cards__container-short__box-text__description__buy__buy-block__count-container-button">-</button>
                                            <div className="main__cards__container-short__box-text__description__buy__buy-block__count-container-count">{count}</div>
                                            <button onClick={clikPlus} className="main__cards__container-short__box-text__description__buy__buy-block__count-container-button">+</button>
                                        </div>
                                        <div className="main__cards__container-short__box-text__description__buy__buy-block__button-container">
                                            <button className="main__cards__container-short__box-text__description__buy__buy-block__button-container__button-buy">BUY NOW</button>
                                            <div onClick={() => buy(id, count)} className="main__cards__container-short__box-text__description__buy__buy-block__button-container__button-add">ADD TO CART</div>
                                            <div className="main__cards__container-short__box-text__description__buy__buy-block__button-container__button-heart"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="main__cards__container-short__box-text__description__text">
                                    <div className="main__cards__container-short__box-text__description__text-block__text">
                                        <div className="main__cards__container-short__box-text__description__text-block__text-h2">SKU:</div>
                                        <div className="main__cards__container-short__box-text__description__text-block__text-p">1995751877966</div>
                                    </div>
                                    <div className="main__cards__container-short__box-text__description__text-block__text">
                                        <div className="main__cards__container-short__box-text__description__text-block__text-h2">Categories:</div>
                                        <div className="main__cards__container-short__box-text__description__text-block__text-p">Potter Plants</div>
                                    </div>
                                    <div className="main__cards__container-short__box-text__description__text-block__text">
                                        <div className="main__cards__container-short__box-text__description__text-block__text-h2">Tags:</div>
                                        <div className="main__cards__container-short__box-text__description__text-block__text-p">Home, Garden, Plants</div>
                                    </div>
                                    <div className="main__cards__container-short__box-text__description__text-block__share">
                                        <div className="main__cards__container-short__box-text__description__text-block__share-h2">Share this products:</div>
                                        <div className="main__cards__container-short__box-text__description__text-block__share-facebook"></div>
                                        <div className="main__cards__container-short__box-text__description__text-block__share-twitter"></div>
                                        <div className="main__cards__container-short__box-text__description__text-block__share-in"></div>
                                        <div className="main__cards__container-short__box-text__description__text-block__share-messenger"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main__cards__container-long">
                        <div className="main__cards__container-long__header">
                            <div className="main__cards__container-long__header-product">Product Description</div>
                            <div className="main__cards__container-long__header-reviews">Reviews (19)</div>
                        </div>

                        <div className="main__cards__container-long__text" style={{ marginBottom: "30px" }}>
                            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                        </div>
                        <div className="main__cards__container-long__text" style={{ marginBottom: "18px" }}>
                            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
                        </div>

                        <div className="main__cards__container-long__head">Living Room:</div>

                        <div className="main__cards__container-long__text" style={{ marginBottom: "18px" }}>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                        <div className="main__cards__container-long__head">Dininig Room:</div>

                        <div className="main__cards__container-long__text" style={{ marginBottom: "18px" }}>The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</div>
                        <div className="main__cards__container-long__head">Office:</div>
                        <div className="main__cards__container-long__text" >The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>

                    <div className="main__cards__container-slider">
                        <div className="main__cards__container-slider__header">
                            <div className="main__cards__container-slider__header-text">Releted Products</div>
                        </div>

                        <Slider />

                    </div>
                </div>
            ))}
        </div>
    );
}
