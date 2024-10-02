'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import styles from '../../styles/ProductDetail.module.scss';

const ProductDetail: React.FC = () => {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl")?.toString();
  const name = searchParams.get("name")?.toString();
  const currency = searchParams.get("currency");
  const price = searchParams.get("price")?.toString();
  const description = searchParams.get("description");

  return (
    <div className={styles.productDetail}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <h2 className={styles.productName}>{name}</h2>
      <p className={styles.productPrice}>{currency} {price?.toLocaleString()}</p>
      <p className={styles.productDescription}>{description}</p>
    </div>
  );
};

export default ProductDetail;