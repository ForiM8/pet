import { Slider } from '../../components/slider/slider'
import './basket.scss'

export const Basket = () => {
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

                    <div className="main__basket__container__left__product">
                        <img src="" alt="" className="main__basket__container__left__product-img" />

                        <div className="main__basket__container__left__product__block">
                            <div className="main__basket__container__left__product__block-head">Blushing Bromeliad</div>
                            <div className="main__basket__container__left__product__block-sku"><span className='span'>SKU:</span> 19957518757065</div>
                        </div>

                        <div className="main__basket__container__left__product-price">$139.00</div>

                        <div className="main__basket__container__left__product__quantity">
                            <button className="main__basket__container__left__product__quantity-button">-</button>
                            <div className="main__basket__container__left__product__quantity-count">2</div>
                            <button className="main__basket__container__left__product__quantity-button">+</button>
                        </div>

                        <div className="main__basket__container__left__product-total">$834.00</div>

                        <button className="main__basket__container__left__product-del"></button>
                    </div>
                    

                </div>
                <div className="main__basket__container__right">
                    <div className="main__basket__container__right__header">
                        <p className="main__basket__container__right__header-text">Cart Totals</p>
                    </div>

                    <div className="main__basket__container__right__input">
                        <p className="main__basket__container__right__input__head">Coupon Apply</p>
                        <div className="main__basket__container__right__input__box">
                            <input className="main__basket__container__right__input__box-input" placeholder='Enter coupon code here...'/>
                            <button className="main__basket__container__right__input__box-button">Apply</button>
                        </div>
                    </div>

                    <div className="main__basket__container__right__text">
                        <div className="main__basket__container__right__text__box">
                            <div className="main__basket__container__right__text__box-left">Subtotal</div>
                            <div className="main__basket__container__right__text__box-right">$2,683.00</div>
                        </div>
                        <div className="main__basket__container__right__text__box">
                            <div className="main__basket__container__right__text__box-left" >Coupon Discount</div>
                            <div className="main__basket__container__right__text__box-right" style={{ fontSize:'15px',color:'#3D3D3D',fontWeight:'400', fontFamily:'Care pro'}}>(-) 00.00</div>
                        </div>
                        <div className="main__basket__container__right__text__box">
                            <div className="main__basket__container__right__text__box-left">Shiping</div>
                            <div className="main__basket__container__right__text__box-right">$16.00</div>
                        </div>
                    </div>

                    <div className="main__basket__container__right__button">
                        <div className="main__basket__container__right__button__header">
                            <div className="main__basket__container__right__button__header-total">Total</div>
                            <div className="main__basket__container__right__button__header-count">$2,699.00</div>
                        </div>
                        <button className="main__basket__container__right__button-buttonGreen">Proceed To Checkout</button>
                        <button className="main__basket__container__right__button-buttonWhite">Continue Shopping</button>
                    </div>
                </div>

            </div>

            <div className="main__basket__container-slider">
                <div className="main__basket__container-slider__header">
                    <div className="main__basket__container-slider__header-head">You may be interested in</div>
                </div>
                <Slider/>
            </div>
        </div>
    )
}