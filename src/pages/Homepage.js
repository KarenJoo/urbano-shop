import React from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch'; // Import the useFetch hook

export default function Homepage() {

  const { data: productData, loading, error } = useFetch('https://v2.api.noroff.dev/online-shop');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const products = productData.data;
  return (
    <div className='product-container'> 
      <h2>All products</h2>
      <div className='product-list'>
        {products && products.map(product => (
          <ProductCard
            key={product.id} // Assuming each product has a unique ID
            title={product.title}
            description={product.description}
            price={product.price}
            img={product.image.url}
          />
        ))}
      </div>
    </div>
  );
}
