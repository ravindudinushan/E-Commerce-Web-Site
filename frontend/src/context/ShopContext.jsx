import { createContext, useState } from "react";
import all_products from '../assets/all_products'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < all_products.length; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

const [cartItems, setCartItems] = useState(getDefaultCart());
const contextValue = {all_products, cartItems};

console.log(cartItems);

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;