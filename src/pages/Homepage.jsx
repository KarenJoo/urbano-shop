import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import useFetch from '../hooks/useFetch'
import { PRODUCTS_URL } from '../utils/api'
import styles from './Homepage.module.css'
import buttonStyles from '../components/Buttons.module.css'
import navbarStyles from '../components/Header/Navbar.module.css'
import { TextInput, Box, Button } from "grommet";


export default function Homepage() {
  const [displayCount, setDisplayCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filter, setFilter] = useState('');
  const { data: productData, loading, error } = useFetch(`${PRODUCTS_URL}`);

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

  const handleFilter = (filterValue) => { 
    setFilter(filterValue);
  };

  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (filter ? product.discountedPrice === filter : true)
);

  return (
    <>
    <div className="productContainer">

    <Box pad="small">
      <TextInput
        placeholder="Search product..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <Box direction="row" gap="small" margin={{ top: 'small' }}>
        <Button label="All" onClick={() => handleFilter('')} />
        <Button label="Sale" onClick={() => handleFilter('Category1')} />
      </Box>
    </Box>

      <h2 className={styles.headerText}>Shop Urbano</h2>
      <div className={styles.productList}>
        {products && products.slice(0, displayCount).map((product) => (
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
      {products.length > displayCount && (
        <button className={buttonStyles.primaryButton} onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
  </>
);
}
