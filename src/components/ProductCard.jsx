import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ProductCard.module.css'
import OnSale from './OnSale'
import styleButtons from '../components/Buttons.module.css'

export default function ProductCard({ product }) {
  const { id, image, title, description, price, discountedPrice } = product

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image.url} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeadContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.cardFootContent}>
          <h4 className={price !== discountedPrice ? styles.onSale : ''}>
            {price} NOK
          </h4>
          <OnSale price={price} discountedPrice={discountedPrice} />
        </div>
        <Link to={`/product/${id}`} className={styleButtons.primaryButton}>
          View Product
        </Link>
      </div>
    </div>
  )
}
