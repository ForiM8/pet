import { useEffect, useState } from 'react';
import { useAuth } from '../../components/context/authContext/authContext'
import { Slider } from '../../components/slider/slider'
import './basket.scss'
import { getProduct, getProducts, removeOneProduct } from '../../components/request/request-product';
import { useNavigate } from 'react-router-dom';
import { BasketCard } from '../../components/basket-card/basket-card';

export const Basket = () => {
    const { buyMassiv, setBuyMassiv,setBuyCount } = useAuth();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);
    const [listPromo, setListPromo] = useState([]);
    const [error, setError] = useState({
        status: false,
        message: "",
    });
    useEffect(() => {
        if (buyMassiv.length === 0) return;

        setIsLoading(true);
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

    function Navigate(){
        navigate('/')
    }

    console.log('listPromo',listPromo)
    const subtotal = listPromo.reduce((sum, elem) => {
        const price = parseFloat(elem.data.price);
        const count = parseInt(elem.count, 10);
        return sum + (price * count);
    }, 0);

    const shiping = 16
    const Total = subtotal-shiping

    const removeProduct = (id) => {
        const productToRemove = listPromo.find(elem => elem.id === id);
        setBuyCount(prev => prev - productToRemove.count)
        setBuyMassiv(prev => prev.filter(plan => plan.id !== id));
        setListPromo(prev => prev.filter(plan => plan.id !== id));
    };

    const countMinus = (id) => {
        setListPromo(prev => prev.map(item => item.id === id ? { ...item, count: item.count - 1 } : item).filter(item => item.count > 0));
        setBuyMassiv(prev => prev.map(item => item.id === id ? { ...item, count: item.count - 1 } : item).filter(item => item.count > 0));
        setBuyCount(prev => prev - 1)
    };
    const countPlus = (id) => {
        setListPromo(prev => prev.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
        setBuyMassiv(prev => prev.map(item => item.id === id ? { ...item, count: item.count + 1 } : item));
        setBuyCount(prev => prev + 1)
    };

    
    return (
        <div className='main__basket'>
            <p className='main__basket-routes'><span className='main__basket-routes-span'>Home</span>  / Shop / Shopping Cart </p>

            <div className="main__basket__container">

                <div className="main__basket__container__left">
                    <div className="main__basket__container__left__header">
                        <p className="main__basket__container__left__header-text" style={{ marginRight: '245px' }}>Products</p>
                        <p className="main__basket__container__left__header-text" style={{ marginRight: '108px' }}>Price</p>
                        <p className="main__basket__container__left__header-text" style={{ marginRight: '97px' }}>Quantity</p>
                        <p className="main__basket__container__left__header-text">Total</p>
                    </div>
                    {listPromo.map((elem) => {
                        console.log('index: ',elem.id)
                        const price = elem.data.price;
                        const count = elem.count;
                        const total = price * count;
                        console.log(total)
                        return (
                            <BasketCard 
                                key={elem.id}
                                img={elem.data.img}
                                title={elem.data.title}
                                price={price}
                                count={count}
                                total={total.toFixed(2)}
                                onRemove={() => removeProduct(elem.id)}
                                onCountMinus={() => countMinus(elem.id)}
                                onCountPlus={() => countPlus(elem.id)}
                            />
                        );
                    })}

                </div>
                <div className="main__basket__container__right">
                    <div className="main__basket__container__right__header">
                        <p className="main__basket__container__right__header-text">Cart Totals</p>
                    </div>

                    <div className="main__basket__container__right__input">
                        <p className="main__basket__container__right__input__head">Coupon Apply</p>
                        <div className="main__basket__container__right__input__box">
                            <input className="main__basket__container__right__input__box-input" placeholder='Enter coupon code here...' />
                            <button className="main__basket__container__right__input__box-button">Apply</button>
                        </div>
                    </div>

                    <div className="main__basket__container__right__text">
                        <div className="main__basket__container__right__text__box">
                            <div className="main__basket__container__right__text__box-left">Subtotal</div>
                            <div className="main__basket__container__right__text__box-right">${subtotal.toFixed(2)}</div>
                        </div>
                        <div className="main__basket__container__right__text__box">
                            <div className="main__basket__container__right__text__box-left" >Coupon Discount</div>
                            <div className="main__basket__container__right__text__box-right" style={{ fontSize: '15px', color: '#3D3D3D', fontWeight: '400', fontFamily: 'Care pro' }}>(-) 00.00</div>
                        </div>
                        <div className="main__basket__container__right__text__box">
                            <div className="main__basket__container__right__text__box-left">Shiping</div>
                            <div className="main__basket__container__right__text__box-right">${shiping.toFixed(2)}</div>
                        </div>
                    </div>

                    <div className="main__basket__container__right__button">
                        <div className="main__basket__container__right__button__header">
                            <div className="main__basket__container__right__button__header-total">Total</div>
                            <div className="main__basket__container__right__button__header-count">${Total.toFixed(2)}</div>
                        </div>
                        <button className="main__basket__container__right__button-buttonGreen">Proceed To Checkout</button>
                        <button onClick={Navigate} className="main__basket__container__right__button-buttonWhite">Continue Shopping</button>
                    </div>
                </div>

            </div>

            <div className="main__basket__container-slider">
                <div className="main__basket__container-slider__header">
                    <div className="main__basket__container-slider__header-head">You may be interested in</div>
                </div>
                <Slider />
            </div>
        </div>
    )
}