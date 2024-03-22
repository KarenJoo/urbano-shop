import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'
import { PRODUCTS_URL } from '../utils/api'
import styles from './Homepage.module.css'
import buttonStyles from '../components/Buttons.module.css'
import { TextInput, Box, Clock } from 'grommet'
import { filterProducts, searchProducts } from '../utils/filterAndSearch'
import { theme } from '../theme'

export default function Homepage() {
  const [displayCount, setDisplayCount] = useState(6)
  const [searchTerm, setSearchTerm] = useState('')
  const [displaySale, setDisplaySale] = useState(false)
  const [activeButton, setActiveButton] = useState('all')
  const { data: productData, loading, error } = useFetch(`${PRODUCTS_URL}`)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const products = productData.data

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 6)
  }

  const handleAllProducts = () => {
    setDisplaySale(false)
  }

  const handleProductsOnSale = () => {
    setDisplaySale(true)
  }

  const displaySearchProducts = filterProducts(
    products,
    searchTerm,
    displaySale,
  )

  const handleButtonClick = (buttonType) => {
    setDisplaySale(buttonType === 'sale')
    setActiveButton(buttonType)
  }

  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroBanner}>
          <h3>Are you ready for a Fresh Start? Let's go Spring Sale!</h3>
        </div>
        <h1>Shop great deals</h1>
        <Box pad='medium'>
          <TextInput
            placeholder='Search products...'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Box>
      </div>
      <div className='productContainer'>
        <div className={styles.clockContainer}>
          <h2>Spring sale</h2>
          <p>
            Something big is coming. Sign up for early access to our new
            collection!
          </p>
          <Clock type='digital' className={styles.clock} />
        </div>
        <div className={styles.filterContainer}>
          <button
            className={`${buttonStyles.primaryButton} ${activeButton === 'all' ? buttonStyles.active : ''}`}
            onClick={() => handleButtonClick('all')}
          >
            All Products
          </button>
          <button
            className={`${buttonStyles.primaryButton} ${activeButton === 'sale' ? buttonStyles.active : ''}`}
            onClick={() => handleButtonClick('sale')}
          >
            Products on Sale
          </button>
        </div>
        <div className={styles.productList}>
          {displaySearchProducts.slice(0, displayCount).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              title={product.title}
              description={product.description}
              price={product.price}
              discountedPrice={product.discountedPrice}
              img={product.image.url}
            />
          ))}
        </div>
        {displaySearchProducts.length > displayCount && (
          <button
            className={buttonStyles.primaryButton}
            onClick={handleViewMore}
          >
            View More
          </button>
        )}
      </div>
    </>
  )
}
