export const calculateCart = (cartItems) => {
    const totalSum = cartItems.reduce((total, item) => {
        return total + (item.quantity * item.discountedPrice); 
    }, 0);

    const formattedTotalSum = totalSum.toFixed(2);

    return parseFloat(formattedTotalSum);
};
