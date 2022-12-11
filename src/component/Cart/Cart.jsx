import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from "./Cart.module.css"
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartctx = useContext(CartContext)
    const hasItem = cartctx.items.length > 0
    const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandaler = id => {
        cartctx.removeItem(id)
    }

    const cartItemAddHandaler = item => {
        cartctx.addItem({ ...item, amount: 1 });
    }

    const cartitems = (
        <ul>
            {cartctx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={cartItemRemoveHandaler.bind(null, item.id)}
                    onAdd={cartItemAddHandaler.bind(null, item)} />
            )
            )}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            <div className={classes.cartitems}>{cartitems}</div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart