// app/products/ProductItem.tsx
import React from "react";
import styles from "../../styles/ProductList.module.scss";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
}

const ProductItem: React.FC<Product> = ({
  id,
  name,
  description,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <div className={styles.productItem}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>
          {price.toLocaleString()} {currency}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
