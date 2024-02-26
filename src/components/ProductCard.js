import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import OnSale from './OnSale';

export default function ProductCard({ product: fetchedProduct }) {
    const { data: productData, loading, error } = useFetch(`https://v2.api.noroff.dev/online-shop/`);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error || !productData) {
      return <div>Error: Unable to load product details.</div>;
    }

    const product = fetchedProduct; // Assign fetchedProduct to product

    if (!product) {
      return <div>Error: Product data not found.</div>;
    }

    console.log(product.discountedPrice);

  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image.url} alt="Product Image" />
      </div>
      <div className="card-content">
        <div className='card-head-content'>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        </div>
        <div className='card-foot-content'>
        <h4 className={product.price !== product.discountedPrice ? 'on-sale' : ''}>{product.price} NOK</h4>
            <OnSale price={product.price} discountedPrice={product.discountedPrice} />        
            <Link to="/product" className="buy-button">View Product</Link>
       </div>
      </div>
    </div>
  );
}
