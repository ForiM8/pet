import { useEffect, useState } from 'react';
import { useAuth } from '../../components/context/authContext/authContext'
import { Slider } from '../../components/slider/slider'
import './basket.scss'
import { getProduct } from '../../components/request/request-product';
import { useNavigate } from 'react-router-dom';
import { BasketCard } from '../../components/basket-card/basket-card';
import { OrderBuy } from './orderBuy';
import { ModalOrderBuy } from '../../components/modal/modalOrderBuy';
import { useModalRegister } from '../../components/context/modalContext/modalContext';



export const Basket = () => {
    const { modalOrderBuy, setModalOrderBuy } = useModalRegister()
    const { buyMassiv, setBuyMassiv, setBuyCount, modalCount, setModalCount , Total, SetTotal} = useAuth();
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    function Navigate() {
        navigate('/')
    }

    console.log('listPromo', listPromo)
    const subtotal = listPromo.reduce((sum, elem) => {
        const price = parseFloat(elem.data.price);
        const count = parseInt(elem.count, 10);
        return sum + (price * count);
    }, 0);

    const shiping = 16
    SetTotal(subtotal - shiping) 

// {
//     id:number
//     count:number
//     price:number
//     image:string
//     name:string

// }[]





     const removeProduct = (id) => {
    //     const productToRemove = listPromo.find(elem => elem.id === id);
    //     setBuyCount(prev => prev - productToRemove.count)
    //     setBuyMassiv(prev => prev.filter(prev => prev.id !== id));
    //     setListPromo(prev => prev.filter(prev => prev.id !== id));
      
     };

     const countMinus = (id) => {

        // setListProducts(prev=>[...prev.map(product=>product.id === id ? ({...product, count:product.count - 1 }))])
        //  setListPromo(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count - 1 } : prev).filter(prev => prev.count > 0));
        //  setBuyMassiv(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count - 1 } : prev).filter(prev => prev.count > 0));
        //  setBuyCount(prev => prev - 1)
      
     };
    const countPlus = (id) => {
    //     setListPromo(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count + 1 } : prev));
    //     setBuyMassiv(prev => prev.map(prev => prev.id === id ? { ...prev, count: prev.count + 1 } : prev));
    //     setBuyCount(prev => prev + 1)
       
    };

    useEffect(() => {
        const updatedModalCount = listPromo.map(elem => ({
            id: elem.data.id,
            price: elem.data.price,
            img: elem.data.img,
            title: elem.data.title,
            count: elem.count,
            total: elem.data.price * elem.count,
            data: elem.data
        }));
        setModalCount(updatedModalCount);
    }, [listPromo]);

    console.log("modalCount", modalCount)

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
                        console.log('index: ', elem.id)
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
                        <button onClick={() => setModalOrderBuy(prev => !prev)} className="main__basket__container__right__button-buttonGreen">Place order</button>
                        <button onClick={Navigate} className="main__basket__container__right__button-buttonWhite">Continue Shopping</button>
                    </div>
                </div>

                <ModalOrderBuy active={modalOrderBuy} setModalOrderBuy={setModalOrderBuy}>
                        
                </ModalOrderBuy>

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