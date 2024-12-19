import React, { useEffect, useState } from "react"
import "./modalOrderBuy.scss"
import { getProduct } from "../request/request-product";
import { useAuth } from "../context/authContext/authContext";
import { useOrder, useOrderr } from "../context/orderContext/orderContext";

export const ModalOrderBuy = ({
    setModalOrderBuy,
    modalOrderBuy,
    active
}) => {
    const {order, setOrder} = useOrder()
    const { modalCount, setModalCount, Total, SetTotal, setBuyCount, setBuyMassiv,payMethod, setPayMethod  } = useAuth();
    const orderOnLocal = localStorage.getItem("order") && JSON.parse(localStorage.getItem("order"));

    console.log('modalCount', modalCount)
    function pay() {
        try {
            const updatedOrder = orderOnLocal ? [...orderOnLocal, ...modalCount] : [...modalCount];
            setOrder(updatedOrder);
            localStorage.setItem("order", JSON.stringify(updatedOrder));
            SetTotal(0);
            setModalCount([]);
            setBuyMassiv([]);
            setBuyCount(0);
            setPayMethod('');
            console.log('order - ', updatedOrder);
        } catch (error) {
            console.error("Error updating order:", error);
        }
    }

    
    const subtotal = modalCount.reduce((sum, elem) => {
        if (elem && elem.data && elem.count !== undefined) {
            const price = parseFloat(elem.data.price);
            const count = parseInt(elem.count, 10);
            return sum + (price * count);
        }
        return sum;
    }, 0);
    console.log('fsdsdgsdds - ', modalCount)


    return (
        <div className={active ? "modalOrder active" : "modalOrder"} onClick={() => setModalOrderBuy(prev => !prev)} >
            <div className={active ? "modal__modalOrder active" : "modal__modalOrder"} onClick={e => e.stopPropagation()}>
                <div className="modal__modalOrder__header">
                    <div className="modal__modalOrder__header-text">Your order has been received</div>
                    <button className="modal__modalOrder__header-back" onClick={() => setModalOrderBuy(prev => !prev)}></button>
                </div>

                <div className="modal__modalOrder__text">
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Order Number</div>
                        <div className="modal__modalOrder__text__item-large">19586687</div>
                    </div>
                    <div className="modal__modalOrder__text-line"></div>
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Date</div>
                        <div className="modal__modalOrder__text__item-large">{new Date().toLocaleString('en',
                            {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                    </div>
                    <div className="modal__modalOrder__text-line"></div>
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Total</div>
                        <div className="modal__modalOrder__text__item-large">${Total.toFixed(2)}</div>
                    </div>
                    <div className="modal__modalOrder__text-line"></div>
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Payment Method</div>
                        <div className="modal__modalOrder__text__item-large">{payMethod}</div>
                    </div>
                </div>

                <div className="modal__modalOrder-head">Order Details</div>

                <div className="modal__modalOrder__main">
                    <div className="modal__modalOrder__main__header">
                        <div className="modal__modalOrder__main__header-item" style={{ marginRight: '242px' }}>Products</div>
                        <div className="modal__modalOrder__main__header-item" style={{ marginRight: '85px' }}>Qty</div>
                        <div className="modal__modalOrder__main__header-item">Subtotal</div>
                    </div>

                    <div className="modal__modalOrder__main__box">
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
                                );
                            })

                        )}
                    </div>

                    <div className="modal__modalOrder__main__container">
                        <button onClick={pay} className="modal__modalOrder__main__container-button">Approve</button>
                        <div className="modal__modalOrder__main__container__total">
                            <div className="modal__modalOrder__main__container__total__item">
                                <div className="modal__modalOrder__main__container__total__item-shiping">Shiping</div>
                                <div className="modal__modalOrder__main__container__total__item-price">$16.00</div>
                            </div>
                            <div className="modal__modalOrder__main__container__total__item">
                                <div className="modal__modalOrder__main__container__total__item-total">Total</div>
                                <div className="modal__modalOrder__main__container__total__item-summ">${Total.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}