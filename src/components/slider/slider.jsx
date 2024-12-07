import { useEffect, useState } from "react";
import { getProducts } from "../request/request-product";

export const Slider = ({

}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [listsPromo, setListsPromo] = useState([]);
    const [error, setError] = useState({
        status: false,
        message: "",
    });
    useEffect(() => {
        setIsLoading(true);
        getProducts()
            .then((data) => {
                console.log('getProducts', data)
                setListsPromo(data.data);
            })
            .catch((error) =>
                setError({ status: true, message: Error(error).message })
            )
            .finally(() => setIsLoading(false));
    }, []);
   
    const handleNextClick = () => {
        if (currentIndex < listsPromo.length - 5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <div className="main__cards__container-slider__container-slider">
            <button className="main__cards__container-slider__container-slider__button-left" style={{zIndex:'2'}} onClick={handlePrevClick}>◀</button>
            <div className="main__cards__container-slider__container-slider__track" style={{ transform: `translateX(-${currentIndex * (245)}px)` }}>
                {listsPromo.map((elem) => (
                    <div className="main__cards__container-slider__container-slider__track__slide" key={elem.id}>
                        <img src={elem.img} className="main__cards__container-slider__container-slider__track__slide-image" />
                        <div className="main__cards__container-slider__container-slider__track__slide-name">{elem.title}</div>
                        <div className="main__cards__container-slider__container-slider__track__slide-price">${elem.price}</div>
                    </div>
                ))}
            </div>
            <button className="main__cards__container-slider__container-slider__button-right" style={{zIndex:'2'}} onClick={handleNextClick}>▶</button>
        </div>
    )
}
