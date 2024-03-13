export const calculateCart = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total + (item.quantity * item.discountedPrice); 
    }, 0);
    
}