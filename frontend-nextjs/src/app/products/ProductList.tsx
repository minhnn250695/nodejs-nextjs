"use client";
import React from "react";
import ProductItem from "./ProductItem";
import styles from "../../styles/ProductList.module.scss";
import { ProductProps } from "@/models/product.model";
import { CartProvider } from "@/context/CartContext";

interface ProductListProps {
  products: ProductProps[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <CartProvider>
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
    </CartProvider>
  );
};

export default ProductList;
