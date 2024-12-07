import React, { useEffect, useState } from "react"
import "./modalOrderBuy.scss"
import { getProduct } from "../request/request-product";
import { useAuth } from "../context/authContext/authContext";

export const ModalOrderBuy = ({
    setModalOrderBuy,
    modalOrderBuy,
    active
}) => {
    const { modalCount, setModalCount, Total, SetTotal,buyMassiv, setBuyMassiv} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [listPromo, setListPromo] = useState([]);
    const [error, setError] = useState({
        status: false,
        message: "",
    });

    useEffect(() => {
        console.log('pizda', modalCount)
        setIsLoading(true);
        const promises = modalCount.map(element =>
            getProduct(element.id, element.count, )
                .then(data => ({
                    id: element.id,
                    price: data.price,
                    img: element.img,
                    title: data.title,
                    count: element.count,
                    total: element.data.price * element.count
                }))
                .catch(error => {
                    setError({ status: true, message: error.message });
                    return null;
                })
        );

        Promise.all(promises)
            .then(results => {
                const validResults = results.filter(result => result !== null);
                setListPromo(validResults);
            })
            .finally(() => setIsLoading(false));
    }, [modalCount]);

    console.log('huy', listPromo)

    function pay (){
        SetTotal(prev => prev = 0)
        setModalCount([])
        setBuyMassiv([])
    }

    return (
        <div className={active ? "modalOrder active" : "modalOrder"} onClick={() => setModalOrderBuy(prev => !prev)} >
            <div className={active ? "modal__modalOrder active" : "modal__modalOrder"} onClick={e => e.stopPropagation()}>
                <div className="modal__modalOrder__header">
                    <div className="modal__modalOrder__header-text">Your order has been received</div>
                    <div className="modal__modalOrder__header-back"></div>
                </div>

                <div className="modal__modalOrder__text">
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Order Number</div>
                        <div className="modal__modalOrder__text__item-large">19586687</div>
                    </div>
                    <div className="modal__modalOrder__text-line"></div>
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Date</div>
                        <div className="modal__modalOrder__text__item-large">7 Dec, 2024</div>
                    </div>
                    <div className="modal__modalOrder__text-line"></div>
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Total</div>
                        <div className="modal__modalOrder__text__item-large">${Total.toFixed(2)}</div>
                    </div>
                    <div className="modal__modalOrder__text-line"></div>
                    <div className="modal__modalOrder__text__item">
                        <div className="modal__modalOrder__text__item-head">Payment Method</div>
                        <div className="modal__modalOrder__text__item-large">Cash on delivery</div>
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
                        {modalCount.map((elem) => (
                            <div key={elem.id} className="main__basket__container__left__product1">
                                <img src={elem.img} alt="" className="main__basket__container__left__product-img" />
                                <div className="main__basket__container__left__product__block">
                                    <div className="main__basket__container__left__product__block-head">{elem.title}</div>
                                    <div className="main__basket__container__left__product__block-sku"><span className='span'>SKU:</span> 19957518757065</div>
                                </div>

                                <div className="main__basket__container__left__product__quantity">
                                    <div className="main__basket__container__left__product__quantity-count">(x {elem.count})</div>
                                </div>
                                <div className="main__basket__container__left__product-total">${elem.total.toFixed(2)}</div>
                            </div>
                        ))}


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