import { createContext, useContext, useState } from "react"

export const OrderContext = createContext()

export const useOrder = () => {
    return useContext(OrderContext)
}

export const UseOrderContext = ({children}) =>{

    const [order, setOrder] = useState([])


    return(
        <OrderContext.Provider value={ {order, setOrder} }>
            {children}
        </OrderContext.Provider>
    )
}