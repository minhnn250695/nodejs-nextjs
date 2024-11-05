'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import styles from '../styles/CartIcon.module.scss';

const CartIcon: React.FC = () => {
  const { getTotalItemCount } = useCart();
  const itemCount = getTotalItemCount();

  return (
    <div className={styles.cartIcon}>
      <Link href="/cart">
        <span className={styles.icon}>🛒</span>
        {itemCount > 0 && <span className={styles.itemCount}>{itemCount}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;