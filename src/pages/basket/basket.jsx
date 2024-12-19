
import { useAuth } from '../../components/context/authContext/authContext'
import { Slider } from '../../components/slider/slider'
import './basket.scss'
import { useNavigate } from 'react-router-dom';
import { BasketCard } from '../../components/basket-card/basket-card';



export const Basket = () => {
    const { buyMassiv, setBuyMassiv, setBuyCount, modalCount, setModalCount, Total, SetTotal,  listPromo   } = useAuth();
    const navigate = useNavigate()
   
    function NavigateMain() {
        navigate('/')
    }
    function NavigateCheckout() {
        navigate('/checkout')
    }

    const subtotal = modalCount.reduce((sum, elem) => {
        if (elem && elem.data && elem.count !== undefined) {
            const price = parseFloat(elem.data.price);
            const count = parseInt(elem.count, 10);
            return sum + (price * count);
        }
        return sum;
    }, 0);

    const shiping = 16
    SetTotal(subtotal + shiping)

    const removeProduct = (id) => {
        const productToRemove = modalCount.find(elem => elem.id === id);
        setBuyCount(prev => prev - productToRemove.count)
        setModalCount(prev => prev.filter(prev => prev.id !== id));
        setBuyMassiv(prev => prev.filter(prev => prev.id !== id));
    };

    const countMinus = (id) => {

        setModalCount(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count - 1 } : prev).filter(prev => prev.count > 0));
        setBuyCount(prev => prev - 1)
        setBuyMassiv(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count - 1 } : prev).filter(prev => prev.count > 0));
        console.log("listPromo - ", listPromo)
        console.log("buyMassiv - ", buyMassiv)
        console.log('modalCount - ', modalCount)

    };
    const countPlus = (id) => {
        setModalCount(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count + 1 } : prev));
        setBuyCount(prev => prev + 1)
        setBuyMassiv(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count + 1 } : prev).filter(prev => prev.count > 0));
        console.log("listPromo - ", listPromo)
        console.log("buyMassiv - ", buyMassiv)
        console.log('modalCount - ', modalCount)

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
                    {modalCount.length === 0 ? (
                        <div className="main__basket__container__left__empty">
                            <p>Your cart is empty.</p>
                        </div>
                    ) : (
                        modalCount.map((elem) => {
                            console.log('index: ', elem.id);
                            const price = elem.data.price;
                            const count = elem.count;
                            const total = price * count;
                            console.log(total);
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
                        })
                    )}

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
                        <button onClick={NavigateCheckout} className="main__basket__container__right__button-buttonGreen">Proceed To Checkout</button>
                        <button onClick={NavigateMain} className="main__basket__container__right__button-buttonWhite">Continue Shopping</button>
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