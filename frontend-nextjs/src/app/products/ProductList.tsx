// app/products/ProductList.tsx
import React from 'react';
import ProductItem from './ProductItem';
import styles from "../../styles/ProductList.module.scss";
import { Product } from '@/models/product.model';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.product_id}
          _id={product.product_id}
          product_id={product.product_id}
          name={product.name}
          description={product.description}
          price={product.price}
          currency={product.currency}
          imageUrl={product.images[0]}
          images={product.images}
        />
      ))}
    </div>
  );
};

export default ProductList;
