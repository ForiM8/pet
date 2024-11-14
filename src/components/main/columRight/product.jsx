export const Products = ({
    title,
    price
}) => {
    return (
        <div className="main__container__main__columRight__container__product__item">
            <div className="main__container__main__columRight__container__product__item-image"></div>
            <div className="main__container__main__columRight__container__product__item-title">{title}</div>
            <div className="main__container__main__columRight__container__product__item-price">{price}</div>
        </div>
    )
}