'use client'
import { Product } from '@/models/product.model';
import React from 'react';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
console.log(product);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        style={{ width: '100%', borderRadius: '8px' }} 
      />
      <h2 style={{ marginTop: '20px', fontSize: '24px' }}>{product.name}</h2>
      <p style={{ color: '#888', fontSize: '18px' }}>{product.currency} {product.price.toLocaleString()}</p>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
