import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems = state.cartItems.map((item, index) => 
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
            }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    addCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.cartItems = state.cartItems.map((item, idx) =>
          idx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    },
    
    removeCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        const item = state.cartItems[index];
        if (item.quantity > 1) {
          state.cartItems = state.cartItems.map((item, idx) =>
            idx === index ? { ...item, quantity: item.quantity - 1 } : item
          );
        } else {
          state.cartItems = state.cartItems.filter((_, idx) => idx !== index);
        }
      }
    },
  },
});

export const { addToCart, removeCartItemFromCart, addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
