import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex].quantity += quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    addCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.cartItems[index] = { ...state.cartItems[index], quantity: state.cartItems[index].quantity + action.payload.quantity };
      }
    },
    removeCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
        } else {
          state.cartItems.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, clearCart, removeCartItemFromCart, addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
