import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import buttonStyles from '../components/Buttons.module.css'


export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // Update localStorage whenever cartItems change
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    const handleAddToCart = (product, quantity = 1) => {
      // Dispatch the addToCart action with the product and quantity
      dispatch(addToCart({ ...product, quantity }));
    };

  };

  const removeCartItem = (index) => {
    const removedCartItem = [...cartItems];
    removedCartItem.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(removedCartItem));
  };
  

  return (
    <div className='productContainer'>
    <div className='cartContainer'>
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div className='cartCard' key={`${item.id}-${index}`}>
          <img src={item.image.url} alt={item.image.alt} />
          <div className='cartCardContent'>
            <p>{item.title}</p>
            <p>Price: {item.price} NOK</p>
            <p>Quantity: {item.quantity}</p>         
             <button className={buttonStyles.primaryButton} onClick={() => removeCartItem(index)}>Remove item</button>

          </div>

        </div>
      ))}
    </div>
    </div>
  );
}
