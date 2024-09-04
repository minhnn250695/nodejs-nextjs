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
      <Link key={_id} href={{
        pathname: `product/${product_id}`,
        query: { imageUrl: imageUrl, price: price, product: name, description: description, currency: currency}
      }}>
        <img src={imageUrl} alt={name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            {price.toLocaleString()} {currency}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
