import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  }));
  