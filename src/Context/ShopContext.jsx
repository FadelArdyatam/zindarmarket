import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';

// Create ShopContext
export const ShopContext = createContext(null);

// Function to initialize default cart
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;
    }
    return cart;
};

// ShopContextProvider Component
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Add item to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, 
            [itemId]: prev[itemId] + 1
        }));
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, 
            [itemId]: Math.max(0, prev[itemId] - 1)
        }));
    };

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems=0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    // Context value to be provided
    const contextValue = { 
        all_product, 
        cartItems, 
        getTotalCartItems,
        getTotalCartAmount, 
        removeFromCart, 
        addToCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;