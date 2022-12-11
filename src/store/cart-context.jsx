import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount:0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export default CartContext;

// 1. Initailize the store with keys (structure of store)
// 2. You would have to make it global (accessible to all component)
// 3. 