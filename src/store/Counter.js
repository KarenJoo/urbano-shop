import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../store/cartSlice"; // Adjust path as needed

function CartItemCounter({itemId}) {
    const item = useSelector((state) => 
        state.cart.cartItems.find(item => item.id === itemId)
    );
    const dispatch = useDispatch();
  
    if (!item) return null; 
    return (
      <div>
        <div>Quantity: {item.quantity}</div>
        <button onClick={() => dispatch(addCartItem({id: itemId}))}>Increase</button>
        <button onClick={() => dispatch(removeCartItem({id: itemId}))}>Decrease</button>
      </div>
    );
}
  
export default CartItemCounter;
