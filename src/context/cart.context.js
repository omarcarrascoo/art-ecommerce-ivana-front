import { createContext, useState } from "react"


export const DataContext = createContext()

export const CartDataProvider = ({children}) =>{
    const [cartInfo, setCart] = useState([]);

    return ( 
        <DataContext.Provider value={{
            cartInfo,
            setCart
        }}>
            {children}
        </DataContext.Provider>
    )
}