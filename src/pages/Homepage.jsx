import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';
import { PRODUCTS_URL } from '../utils/api';
import styles from './Homepage.module.css';
import buttonStyles from '../components/Buttons.module.css';
import { TextInput, Box } from 'grommet';

export default function Homepage() {
  const [displayCount, setDisplayCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [displaySale, setDisplaySale] = useState(false);
  const { data: productData, loading, error } = useFetch(`${PRODUCTS_URL}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = productData.data;

  const handleViewMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  const handleFilterProducts = () => {
    setDisplaySale(!displaySale);
    console.log('displaySale:', !displaySale);
  };

  // Filter products based on search term and displaySale
  const displaySearchProducts = products.filter((product) => {
    const displaySearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
      
    const isOnSale = product.discountedPrice && product.discountedPrice !== product.price;
    return displaySearch && (displaySale || isOnSale);
    });


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
        <h2 className='headerText'>Shop Urbano</h2>
        <button
          className={buttonStyles.primaryButton}
          onClick={handleFilterProducts}
        >
          {displaySale ? 'All products' : 'Products on sale'}
        </button>
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
  );
}
