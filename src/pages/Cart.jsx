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
    const savedCartItems = cartItems.findIndex((item) => item.id === product.id);
    if (savedCartItems !== -1) {

      const addedCartItems = [...cartItems];
      addedCartItems[savedCartItems].quantity++;

      localStorage.setItem('cartItems', JSON.stringify(addedCartItems));

    } else {
      localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product, quantity: 1 }]));
    }
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
