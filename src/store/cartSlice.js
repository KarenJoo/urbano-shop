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
        state.cartItems[itemIndex].quantity += 1; // Increment quantity if item exists
      } else {
        state.cartItems.push({...action.payload, quantity: 1}); // Add new item with quantity 1
      }
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    addCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        state.cartItems[index].quantity += 1;
      }
    },
    removeCartItem: (state, action) => {
      const index = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (index >= 0) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
        } else {
          state.cartItems.splice(index, 1); // Remove the item if quantity is 1
        }
      }
    },
  },
});

export const { addToCart, removeCartItemFromCart, addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
