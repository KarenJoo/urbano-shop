import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './cartSlice'; // corrected import

export const store = configureStore({
  reducer: {
    cart: counterReducer, // corrected slice name
  },
});
