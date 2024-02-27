import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

const useProductsStore = create((set) => ({
    cartItems: [], 
    addToCart: (product) => set((state) => ({ cartItems: [...state.cartItems, product] })),
    removeFromCart: (productId) => set((state) => ({ cartItems: state.cartItems.filter(item => item.id !== productId) })),
    clearCart: () => set({ cartItems: [] }),
  }));
  

export { useProductsStore }
