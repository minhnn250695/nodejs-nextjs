// app/products/ProductList.tsx
import React from 'react';
import ProductItem from './ProductItem';
import styles from "../../styles/ProductList.module.scss";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  images: string[];
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          currency={product.currency}
          imageUrl={product.images[0]}
        />
      ))}
    </div>
  );
};

export default ProductList;
