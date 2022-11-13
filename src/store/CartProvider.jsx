import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
    const [itemsData, setItems] = useState([]);
    const addToCartHandlar = item => {
        setItems([...itemsData, item])
    }
    const removeItemCartHandlar = id => { }
    const cartContext = {
        items: itemsData,
        addItem: addToCartHandlar,
        removeItem: removeItemCartHandlar,
    }
    return (
        // it is where it become globally available
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;