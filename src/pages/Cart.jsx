import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem } from '../store/cartSlice';
import buttonStyles from '../components/Buttons.module.css';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveCartItem = (index) => {
    dispatch(removeCartItem({ id: cartItems[index].id }));
  };

  return (
    <div className="productContainer">
      <div className="cartContainer">
        <h2>Cart</h2>
        {cartItems.map((item, index) => (
          <div className="cartCard" key={`${item.id}-${index}`}>
            <img src={item.image.url} alt={item.image.alt} />
            <div className="cartCardContent">
              <p>{item.title}</p>
              <p>Price: {item.price} NOK</p>
              <p>Quantity: {item.quantity}</p>
              <button
                className={buttonStyles.primaryButton}
                onClick={() => handleRemoveCartItem(index)}
              >
                Remove item
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
