'use client'
import { Product } from '@/models/product.model';
import { useSearchParams } from 'next/navigation';
import React from 'react';


const ProductDetail: React.FC = () => {
 const searchParams = useSearchParams();
 const imageUrl = searchParams.get("imageUrl")?.toString();
 const name = searchParams.get("name")?.toString();
 const currency = searchParams.get("currency");
 const price = searchParams.get("price")?.toString();
 const description = searchParams.get("description");
  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: 'auto' }}>
      <img src={imageUrl} alt={name} style={{ width: '100%', borderRadius: '8px' }}/>
      <h2 style={{ marginTop: '20px', fontSize: '24px' }}>{name}</h2>
      <p style={{ color: '#888', fontSize: '18px' }}>{currency} {price?.toLocaleString()}</p>
      <p style={{ marginTop: '10px', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};

export default ProductDetail;
