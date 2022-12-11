import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnHighlightd, setBtnHighlightd] = useState(false)
    const cartctx = useContext(CartContext)
    const { items } = cartctx;
    const numberOfCartItem = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)
    const btnClasses = `${classes.button} ${btnHighlightd ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlightd(true)
        const timer = setTimeout(() => {
            setBtnHighlightd(false)
        }, 100)
        return () => {
            clearTimeout(timer)
        }
    }, [items])
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
};

export default HeaderCartButton;


// 1. add button -> u have to add item to cartctx.item
// 2. number of item in the cart -> cartctx.item.length
// 3. cartctx.item.map()