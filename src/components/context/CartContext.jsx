import React, {createContext, useState, useEffect} from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {

    const [productSelected, saveSelection] = useState([{
        item:{},
        quantity:''
    }]);

    const [cartProducts, saveCart] = useState([]);

    const clearCart = () =>{
        saveCart([]);
        localStorage.removeItem('itemSelected');
    }


    useEffect(() => {
        saveCart(JSON.parse(localStorage.getItem('itemSelected')));
    }, [localStorage.getItem('itemSelected')]);

    return(
        <CartContext.Provider
            value={{
                saveSelection,
                productSelected,
                saveCart,
                cartProducts,
                clearCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
