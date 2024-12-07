import { createContext, useContext, useState } from "react"

export const BasketContext = createContext()

export const useBasket = () => {
    return useContext(BasketContext)
}

export const BasketMainContext = ({children}) =>{

    const [listProducts, setListProducts] = useState([])
    
    return(
        <BasketContext.Provider value={ {listProducts, setListProducts} }>
            {children}
        </BasketContext.Provider>
    )
}