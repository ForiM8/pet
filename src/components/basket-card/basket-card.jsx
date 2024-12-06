import { useCallback } from "react";

export const BasketCard = ({
    title,
    id,
    img,
    price,
    count,
    total,
    onRemove,
    onCountPlus,
    onCountMinus
}) => {

    const removeProduct = useCallback(() => {
        onRemove(id);
    }, [id, onRemove]);

    const countPlus = useCallback(()=>{
        onCountPlus(id);
    },[id, onCountPlus])

    const countMinus = useCallback(()=>{
        onCountMinus(id);
    },[id, onCountMinus])
    return (
        <div  className="main__basket__container__left__product">
            <img src={img} alt="" className="main__basket__container__left__product-img" />
            <div className="main__basket__container__left__product__block">
                <div className="main__basket__container__left__product__block-head">{title}</div>
                <div className="main__basket__container__left__product__block-sku"><span className='span'>SKU:</span> 19957518757065</div>
            </div>
            <div className="main__basket__container__left__product-price">${price}</div>
            <div className="main__basket__container__left__product__quantity">
                <button onClick={countMinus} className="main__basket__container__left__product__quantity-button">-</button>
                <div className="main__basket__container__left__product__quantity-count">{count}</div>
                <button onClick={countPlus} className="main__basket__container__left__product__quantity-button">+</button>
            </div>
            <div className="main__basket__container__left__product-total">${total}</div>
            <button onClick={removeProduct} className="main__basket__container__left__product-del"></button>
        </div>
    )
}