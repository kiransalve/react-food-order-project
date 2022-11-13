import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css"
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartctx = useContext(CartContext)
    const hasItem = cartctx.items.length > 0

    const cartItemRemoveHandaler = id => { }
    const cartItemAddHandaler = item => { }
    const cartitems = (
        <ul>
            {cartctx.items.map((item) => (
                <CartItem key={item.id} name={item.name} price={item.price}
                    amount={item.quantity} onRemove={cartItemRemoveHandaler.bind(null, item.id)} onAdd={cartItemAddHandaler.bind(null, item)} />
            )
            )}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.cartitems}>{cartitems}</div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{ }</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart