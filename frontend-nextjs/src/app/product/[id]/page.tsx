'use client'
import React, { FC } from 'react';
import ProductDetail from '../ProductDetail';
import { ProductProps } from '@/models/product.model';

interface ProductDetailProps {
    product: ProductProps;
  }

const ProductPage: FC<ProductDetailProps> = () => {
  return (
    <div>
      <ProductDetail/>
    </div>
  );
};

export default ProductPage;
