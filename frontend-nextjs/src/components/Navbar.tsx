// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

const Navbar: React.FC = () => {
  const isLoggedIn = true; // Mock login status
  const userName = 'John Doe'; // Mock user name

  return (
    <header className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/" className={styles.logo}>
          <img src="/assets/logo.png" alt="Shopee Logo" className={styles.logoImage} />
        </Link>
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/categories" className={styles.navLink}>Categories</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/profile" className={styles.navLink}>Profile</Link>
          <Link href="/user-address" className={styles.navLink}>Address</Link>
        </nav>
      </div>

      <div className={styles.navRight}>
        {isLoggedIn ? (
          <div className={styles.accountInfo}>
            <img src="/assets/avatar.png" alt="User Avatar" className={styles.avatar} />
            <span className={styles.userName}>{userName}</span>
            <div className={styles.dropdownMenu}>
              <Link href="/profile" className={styles.dropdownItem}>Profile</Link>
              <Link href="/orders" className={styles.dropdownItem}>Orders</Link>
              <Link href="/logout" className={styles.dropdownItem}>Logout</Link>
            </div>
          </div>
        ) : (
          <div className={styles.authLinks}>
            <Link href="/login" className={styles.authLink}>Login</Link>
            <Link href="/register" className={styles.authLink}>Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
