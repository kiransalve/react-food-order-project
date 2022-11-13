import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartctx = useContext(CartContext)
    let quantity = 0;
    cartctx.items.forEach((item) => {
        quantity = quantity + Number(item.quantity)
    })
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{quantity}</span>
        </button>
    );
};

export default HeaderCartButton;


// 1. add button -> u have to add item to cartctx.item
// 2. number of item in the cart -> cartctx.item.length
// 3. cartctx.item.map()