// In Product.js
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox';
import Relatedproduct from '../Components/Relatedproduct/Relatedproduct';

const Product = () => {
  // Make sure this matches exactly what's provided by your ShopContext
  const { all_product } = useContext(ShopContext); // Changed from all_products to all_product
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  // Add a check to handle when product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox />
      <Relatedproduct/>
    </div>
  )
}

export default Product