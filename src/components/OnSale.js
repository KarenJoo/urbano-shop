export default function OnSale({ price, discountedPrice }) {
    if (price !== discountedPrice) {
      return <span className="on-sale-price"><p>Now on Sale:</p> <h3>{discountedPrice} NOK</h3></span>;
    }
    return null;
  }
  