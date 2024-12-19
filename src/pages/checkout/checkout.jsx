import { useForm } from 'react-hook-form';
import { Input } from '../../components/input/input'
import './checkout.scss'
import { useAuth } from '../../components/context/authContext/authContext';
import { ModalOrderBuy } from '../../components/modal/modalOrderBuy';
import { useModalRegister } from '../../components/context/modalContext/modalContext';

export const Checkout = () => {
    const defaultData =
        localStorage.getItem("feedback") &&
        JSON.parse(localStorage.getItem("feedback"));
        const user =
        localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

    const { modalOrderBuy, setModalOrderBuy } = useModalRegister()
    const { modalCount, Total, SetTotal, setPayMethod } = useAuth();
    

    const {
        register,
    } = useForm({
        defaultValues: { Username: user?.userName || "", ...defaultData,  Email_address: user?.email || "", ...defaultData, First_Name: user?.First_Name || "", ...defaultData, Last_Name: user?.Last_Name || "", ...defaultData, Phone_Number: user?.Phone_Number || "", ...defaultData,},
    });

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

    const methodCash = () => {
        setPayMethod('Cash on delivery')
    }

    const methodDorect = () => {
        setPayMethod('Dorect bank transfer')
    }

    const checks = document.querySelectorAll('.main__checkout__container__right__pay__block-radio');
    checks.forEach(function (ch) {
        ch.addEventListener('click', function () {
            var that = this;
            checks.forEach(function (ch2) {
                if (ch2 !== that)
                    ch2.checked = false;
            });
        });
    });
    return (
        <div className='main__checkout'>
            <p className='main__checkout-routes'><span className='main__basket-routes-span'>Home</span>  / Shop / Chekout </p>
            <div className="main__checkout__container">
                <div className="main__checkout__container__left">
                    <div className="main__checkout__container__left-header">Billing Address</div>
                    <div className="main__checkout__container__left__person">
                        <Input
                            input_type={'text'}
                            name={"First_Name"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'First Name'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Last_Name"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Last Name'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Country_Region"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Country / Region'}
                            placeholder={'Select a country / region'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Town_City"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Town / City'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Street_Address"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Street Address'}
                            labelSymbol={'*'}
                            placeholder={'House number and street name'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Town_City"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={''}
                            labelSymbol={''}
                            placeholder={'Appartment, suite, unit, etc. (optional)'}
                        />
                        <Input
                            input_type={'text'}
                            name={"State"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'State'}
                            placeholder={'Select a state'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Zip"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Zip'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Email_address"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Email address'}
                            labelSymbol={'*'}
                        />
                        <Input
                            input_type={'text'}
                            name={"Phone_Number"}
                            classNameWrapper={'main__checkout__container__left__person__wrapper'}
                            register={register}
                            classNameInput={'main__checkout__container__left__person__wrapper-input'}
                            classNameLabel={'main__checkout__container__left__person__wrapper-label'}
                            label={'Phone Number'}
                            labelSymbol={'*'}
                        />
                    </div>
                    <div className="main__checkout__container__left__checkbox">
                        <input type="radio" className="main__checkout__container__left__checkbox-radio" />
                        <p className="main__checkout__container__left__checkbox-text">Ship to a different address?</p>
                    </div>
                    <Input
                        input_type={'text'}
                        name={"Order_notes"}
                        classNameWrapper={'main__checkout__container__left__wrapper'}
                        register={register}
                        classNameInput={'main__checkout__container__left__wrapper-input'}
                        classNameLabel={'main__checkout__container__left__wrapper-label'}
                        label={'Order notes (optional)'}
                    />
                </div>
                <div className="main__checkout__container__right">
                    <div className="main__checkout__container__right-head">Your Order</div>
                    <div className="main__checkout__container__right__header">
                        <div className="main__checkout__container__right__header">
                            <p className="main__checkout__container__right__header-text" >Products</p>
                            <p className="main__checkout__container__right__header-text" style={{ marginRight: '10px' }} >Subtotal</p>
                        </div>

                    </div>
                    <div className="main__checkout__container__right__box">
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
                                    <div key={elem.id} className="main__basket__container__left__product2">
                                        <img src={elem.img} alt="" className="main__basket__container__left__product2-img" />
                                        <div className="main__basket__container__left__product2__block">
                                            <div className="main__basket__container__left__product2__block-head">{elem.title}</div>
                                            <div className="main__basket__container__left__product2__block-sku"><span className='span'>SKU:</span> 19957518757065</div>
                                        </div>
                                        <div className="main__basket__container__left__product2__quantity">
                                            <div className="main__basket__container__left__product2__quantity-count">(x {elem.count})</div>
                                        </div>
                                        <div className="main__basket__container__left__product2-total">${total.toFixed(2)}</div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                    <div className="main__checkout__container__right__cupon">
                        <div className="main__checkout__container__right__cupon__text">Have a coupon code? <span className='main__checkout__container__right__cupon__text-span'> Click here</span></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <div className="main__checkout__container__right__text">
                            <div className="main__checkout__container__right__text__box">
                                <div className="main__checkout__container__right__text__box-left">Subtotal</div>
                                <div className="main__checkout__container__right__text__box-right">${subtotal.toFixed(2)}</div>
                            </div>
                            <div className="main__checkout__container__right__text__box">
                                <div className="main__checkout__container__right__text__box-left" >Coupon Discount</div>
                                <div className="main__checkout__container__right__text__box-right" style={{ fontSize: '15px', color: '#3D3D3D', fontWeight: '400', fontFamily: 'Care pro' }}>(-) 00.00</div>
                            </div>
                            <div className="main__checkout__container__right__text__box">
                                <div className="main__checkout__container__right__text__box-left">Shiping</div>
                                <div className="main__checkout__container__right__text__box-right">${shiping.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <div className="main__checkout__container__right__button">
                            <div className="main__checkout__container__right__button__header">
                                <div className="main__checkout__container__right__button__header-total">Total</div>
                                <div className="main__checkout__container__right__button__header-count">${Total.toFixed(2)}</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div></div>
                        <div className="main__checkout__container__right__pay">
                            <div className="main__checkout__container__right__pay-head">Payment Method</div>
                            <div className="main__checkout__container__right__pay__block">
                                <input type="radio" name="radio" value="1" onclick="radioClick(this)" className="main__checkout__container__right__pay__block-radio" />
                                <div className="main__checkout__container__right__pay__block-img"></div>
                            </div>
                            <div className="main__checkout__container__right__pay__block">
                                <input onClick={methodDorect} type="radio" name="radio" value="2" onclick="radioClick(this)" className="main__checkout__container__right__pay__block-radio" />
                                <div className="main__checkout__container__right__pay__block-text">Dorect bank transfer</div>
                            </div>
                            <div className="main__checkout__container__right__pay__block">
                                <input onClick={methodCash} type="radio" name="radio" value="3" onclick="radioClick(this)" className="main__checkout__container__right__pay__block-radio" />
                                <div className="main__checkout__container__right__pay__block-text">Cash on delivery</div>
                            </div>
                            <button onClick={() => setModalOrderBuy(prev => !prev)} className="main__checkout__container__right__pay-button">Place Order</button>
                        </div>

                    </div>
                </div>
            </div>
            <ModalOrderBuy active={modalOrderBuy} setModalOrderBuy={setModalOrderBuy}>

            </ModalOrderBuy>
        </div>
    )
}