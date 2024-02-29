import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/cartSlice"; // Corrected import path

function Counter() {
    const count = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
  
    return (
      <div>
        <div>Count: {count}</div>
        <button onClick={() => dispatch(increment())}>Add 1</button>
        <button onClick={() => dispatch(decrement())}>Minus 1</button>
      </div>
    );
}
  
export default Counter;
