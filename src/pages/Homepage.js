import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch'; 

export default function Homepage() {
  const [displayCount, setDisplayCount] = useState(6);
  const { data: productData, loading, error } = useFetch('https://v2.api.noroff.dev/online-shop');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = productData.data;

  const handleViewMore = () => {
    setDisplayCount(prevCount => prevCount + 6); 
  };

  return (
    <div className='product-container'> 
      <h2>All products</h2>
      <div className='product-list'>
        {products && products.slice(0, displayCount).map(product => (
          <ProductCard
            key={product.id} // Assuming each product has a unique ID
            title={product.title}
            description={product.description}
            price={product.price}
            img={product.image.url}
          />
        ))}
      </div>
      {products.length > displayCount && (
        <button className="view-button" onClick={handleViewMore}>View More</button>
      )}
    </div>
  );
}
