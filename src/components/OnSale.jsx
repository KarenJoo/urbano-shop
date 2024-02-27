import styles from './OnSale.module.css';

export default function OnSale({ price, discountedPrice }) {
    if (price !== discountedPrice) {
      return <span className={styles.onSalePrice}><p>Sale:</p> <h3>{discountedPrice} NOK</h3></span>;
    }
    return null;
  }
  