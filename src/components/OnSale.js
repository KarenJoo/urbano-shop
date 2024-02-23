
export default function OnSale({ price, discountedPrice }) {
    if (price !== discountedPrice) {
      return <span className="on-sale-price">On Sale</span>;
    }
    return null;
  }

  
  