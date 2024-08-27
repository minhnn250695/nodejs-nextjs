// app/products/ProductItem.tsx
import React from "react";
import styles from "../../styles/ProductList.module.scss";
import { Product } from "@/models/product.model";
import Link from "next/link";


const ProductItem: React.FC<Product> = ({
  product_id,
  _id,
  name,
  description,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <div className={styles.productItem} key={product_id}>
      <a href={`product/${product_id}`}>
        <img src={imageUrl} alt={name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            {price.toLocaleString()} {currency}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProductItem;
