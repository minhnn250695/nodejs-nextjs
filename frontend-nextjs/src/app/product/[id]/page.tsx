'use client'
import React, { FC } from 'react';
import ProductDetail from '../ProductDetail';
import { Product } from '@/models/product.model';

interface ProductDetailProps {
    product: Product;
  }

const ProductPage: FC<ProductDetailProps> = () => {
  return (
    <div>
      <ProductDetail/>
    </div>
  );
};

export default ProductPage;
