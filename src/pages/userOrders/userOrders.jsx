import { useContext, useEffect } from 'react'
import { BasketCard } from '../../components/basket-card/basket-card'
import { AuthContext, useAuth } from '../../components/context/authContext/authContext'
import { useOrder, useOrderr } from '../../components/context/orderContext/orderContext'
import './userOrders.scss'

export const UserOrders = () => {
    const { order,setOrder } = useOrder()
    
    useEffect(() => {
        const orderOnLocal = localStorage.getItem("order") && JSON.parse(localStorage.getItem("order"));
    if (orderOnLocal.length !== 0) {
        setOrder(orderOnLocal);
    }
    }, []);
    return (
        <div className='main__userOrders'>
            <p className='main__checkout-routes'><span className='main__basket-routes-span'>Home</span>  / userOrders </p>
            <div className="main__userOrders__orders">

                {order.length === 0 ? (
                    <div className="main__basket__container__left__empty">
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    order.map((elem) => {
                        console.log('index: ', elem.id);
                        const price = elem.data.price;
                        const count = elem.count;
                        const total = price * count;
                        console.log(total);
                        return (
                            <div className="main__userOrders__orders__right">
                                <div className="main__userOrders__orders__right-header" style={{ marginBottom: '5px' }}>{elem.name}</div>
                                <div className="modal__modalOrder__main__box1">

                                    <div key={elem.id} className="main__basket__container__left__product1">
                                        <img src={elem.img} alt="" className="main__basket__container__left__product-img" />
                                        <div className="main__basket__container__left__product__block">
                                            <div className="main__basket__container__left__product__block-head">{elem.title}</div>
                                            <div className="main__basket__container__left__product__block-sku"><span className='span'>SKU:</span> 19957518757065</div>
                                        </div>
                                        <div className="main__basket__container__left__product__quantity">
                                            <div className="main__basket__container__left__product__quantity-count">(x {elem.count})</div>
                                        </div>
                                        <div className="main__basket__container__left__product-total">${total.toFixed(2)}</div>
                                    </div>

                                </div>
                                <div className="main__userOrders__orders__right__block">
                                    <button className="main__userOrders__orders__right__block-red">Удалить</button>
                                </div>
                            </div>
                        );
                    })

                )}

            </div>
        </div>
    )
}