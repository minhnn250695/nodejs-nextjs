'use client'
import React, { FC } from 'react';
import ProductDetail from '../../../components/ProductDetail';
import { Product } from '@/models/product.model';

interface ProductDetailProps {
    product: Product;
  }

const ProductPage: FC<ProductDetailProps> = ({product}) => {
    console.log(product);
    
  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductPage;
