import { useAuth } from "../../context/authContext/authContext"

export const Products = ({
    title,
    price
}) => {
    const { adminTrue } = useAuth()
    return (


        <div className="main__container__main__columRight__container__product__item">
            <div className="main__container__main__columRight__container__product__item-image"></div>
            <div className="main__container__main__columRight__container__product__item-title">{title}</div>
            <div className="main__container__main__columRight__container__product__item-price">{price}</div>
            {adminTrue && (<div className="main__container__main__columRight__container__product__item-delete" style={{cursor:'pointer'}}>
                <div className="main__container__main__columRight__container__product__item-delete-krest"></div>
            </div>)}


        </div>

    )
}