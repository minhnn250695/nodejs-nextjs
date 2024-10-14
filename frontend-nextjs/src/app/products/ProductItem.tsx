"use client";
import React from "react";
import styles from "../../styles/ProductItem.module.scss";
import { ProductProps } from "@/models/product.model";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const ProductItem: React.FC<ProductProps> = ({
  product_id,
  _id,
  name,
  description,
  price,
  currency,
  imageUrl,
}) => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart({ id: _id, name, price, quantity: 1 });
  };

  return (
    <div className={styles.productItem} key={product_id}>
      <Link
        key={_id}
        href={{
          pathname: `product/${product_id}`,
          query: {
            imageUrl: imageUrl,
            price: price,
            product: name,
            description: description,
            currency: currency,
          },
        }}
      >
        <img src={imageUrl} alt={name} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            {price.toLocaleString()} {currency}
          </p>
        </div>
      </Link>
      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;