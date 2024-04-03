import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'
import { PRODUCTS_URL } from '../utils/api'
import styles from './Homepage.module.css'
import buttonStyles from '../components/Buttons.module.css'
import { TextInput, Box, Clock, Grommet } from 'grommet'
import { filterProducts, searchProducts } from '../utils/filterAndSearch'
import { Link } from 'react-router-dom'
import { theme } from '../theme.js'
import useClock from '../hooks/useClock.js'
import errorStyles from '../components/Errors/Errors.module.css'

export default function Homepage() {
  const [displayCount, setDisplayCount] = useState(6)
  const [searchTerm, setSearchTerm] = useState('')
  const [displaySale, setDisplaySale] = useState(false)
  const [activeButton, setActiveButton] = useState('all')
  const { data: productData, loading, error } = useFetch(`${PRODUCTS_URL}`)
  const currentTime = useClock()

  if (loading) {
    return <div className='parentContainer'><div className={errorStyles.loader}>Loading...</div></div>
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
    <Grommet theme={theme}>
      <div className={styles.heroContainer}>
        <div className={styles.heroBanner}>
          <h4>Limited editions</h4>
          <h3>Sale ends soon</h3>

          <Clock
            className={styles.clock}
            type='digital'
            time={currentTime.toISOString()}
          />
          <button
            className={`${buttonStyles.shopSale} ${
              activeButton === 'sale' ? buttonStyles.active : ''
            }`}
            onClick={() => handleButtonClick('sale')}
          >
            Shop Sale
          </button>
        </div>
      </div>
      <div className='parentContainer'>
        <h1 className={styles.searchBar}>Find your urban fit</h1>
        <Box pad='medium'>
          <TextInput
            placeholder='Search products...'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Box>
        <div className={styles.filterContainer}>
          <button
            className={`${buttonStyles.primaryButton} ${
              activeButton === 'all' ? buttonStyles.active : ''
            }`}
            onClick={() => handleButtonClick('all')}
          >
            All Products
          </button>
          <button
            className={`${buttonStyles.primaryButton} ${
              activeButton === 'sale' ? buttonStyles.active : ''
            }`}
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
    </Grommet>
  )
}
