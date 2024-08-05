import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let index = 0; index < 300 + 1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

const [cartItems, setCartItems] = useState(getDefaultCart());
const [all_products, setAll_product] = useState([]);

// useEffect(() => {
//     fetch("http://localhost:4000/allproducts").then((response) => response.json()).then((data) => setAll_product(data));
//     if(localStorage.getItem('auth-token')){
//         fetch("http://localhost:4000/getcart", {
//             method: 'POST',
//             headers: {
//                 Accept: 'application/form-data',
//                 'auth-token': `${localStorage.getItem('auth-token')}`,
//                 'Content-Type': 'application/json',
//             },
//             body: "",
//             // body:JSON.stringify({"itemId": itemId}),
//         }).then((response) => response.json()).then((data) => setCartItems(data));
//     }
// }, [])
useEffect(() => {
    fetch("http://localhost:4000/allproducts")
        .then((response) => response.json())
        .then((data) => setAll_product(data))
        .catch((error) => {
            console.error("Error fetching all products:", error);
        });

    if (localStorage.getItem('auth-token')) {
        fetch("http://localhost:4000/getcart", {
            method: 'POST',
            headers: {
                Accept: 'application/json', // Updated to 'application/json'
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body: "", // Since body is empty, it can be omitted
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => setCartItems(data))
        .catch((error) => {
            console.error("Error fetching cart items:", error);
        });
    }
}, []);


const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    if(localStorage.getItem('auth-token')){
        fetch("http://localhost:4000/addtocart", {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({"itemId": itemId}),
        }).then((response) => response.json()).then((data) => console.log(data));
    }
}

const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    if(localStorage.getItem('auth-token')){
        fetch("http://localhost:4000/removefromcart", {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({"itemId": itemId}),
        }).then((response) => response.json()).then((data) => console.log(data));
    }
}

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems){
        if(cartItems[item] > 0){
            let itemInfo = all_products.find((product) => product.id === Number(item));
            totalAmount += itemInfo.new_price * cartItems[item];
        }
    }
    return totalAmount;
}

const getTotalCartItems = () =>{
    let totalItems = 0;
    for (const item in cartItems){
        if(cartItems[item] > 0){
            totalItems += cartItems[item];
        }
    }
    return totalItems;
}

const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;