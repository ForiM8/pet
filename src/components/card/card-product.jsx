import { useCallback } from "react";
import { useAuth } from "../context/authContext/authContext";
import { Link } from "react-router-dom";


export const CardProduct = ({
    elemImg,
    elemTitle,
    elemPrice,
    id, onRemove, onEdit, onInfo
 }) => {

    const { adminTrue, nextInfo, setNextInfo } = useAuth()

    const removeProduct = useCallback(() => {
        onRemove(id);
    }, [id, onRemove]);

    const editProduct = useCallback(() => {
        onEdit({ status: true, id });
    }, [id, onEdit]);

    const moreInfo = useCallback(() =>{
        onInfo(id);
    }, [id, onInfo])

    return (
        <div to='/cards' onClick={moreInfo} style={{textDecoration: 'none', color:'#3D3D3D'}} className="main__container__main__columRight__container__product__item">
            <Link to='./cards'> <img className="main__container__main__columRight__container__product__item-image" src={elemImg}></img></Link>
            <div className="main__container__main__columRight__container__product__item-title">{elemTitle}</div>
            <div className="main__container__main__columRight__container__product__item-price">${elemPrice}</div>
            {adminTrue && 
            (<button onClick={editProduct} className="main__container__main__columRight__container__product__item-edit" style={{ cursor: 'pointer' }}>
                <div className="main__container__main__columRight__container__product__item-edit-pencil"></div>
            </button>)}
            {adminTrue && 
            (<button onClick={removeProduct} className="main__container__main__columRight__container__product__item-delete" style={{ cursor: 'pointer' }}>
                <div className="main__container__main__columRight__container__product__item-delete-krest"></div>
            </button>)}
        </div>
    )
}