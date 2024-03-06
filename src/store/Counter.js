import React from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem, removeCartItem } from '../store/cartSlice';

const Counter = ({ id }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addCartItem({ id }));
  };

  const handleDecrease = () => {
    dispatch(removeCartItem({ id }));
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Counter;
