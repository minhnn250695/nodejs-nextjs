// import React from 'react';
// import Link from 'next/link';
// import styles from '../styles/Navbar.module.scss';

// const Logo: React.FC = () => (
//   <Link href="/" className={styles.logo}>
//     <img src="/assets/logo.png" alt="Shopee Logo" className={styles.logoImage} />
//   </Link>
// );

// const NavLinks: React.FC = () => (
//   <nav className={styles.navLinks}>
//     <Link href="/" className={styles.navLink}>Home</Link>
//     <Link href="/categories" className={styles.navLink}>Categories</Link>
//     <Link href="/products" className={styles.navLink}>Products</Link>
//     <Link href="/profile" className={styles.navLink}>Profile</Link>
//     <Link href="/user-address" className={styles.navLink}>Address</Link>
//   </nav>
// );

// const AuthLinks: React.FC = () => (
//   <div className={styles.authLinks}>
//     <Link href="/login" className={styles.authLink}>Login</Link>
//     <Link href="/register" className={styles.authLink}>Register</Link>
//   </div>
// );

// const AccountInfo: React.FC<{ userName: string }> = ({ userName }) => (
//   <div className={styles.userSettings}>
//     <span>{userName}</span>
//     <span className={styles.userSettingsIcon}>⚙️</span>
//     <div className={styles.userDropdown}>
//       <Link href="/profile" className={styles.userDropdownLink}>Profile</Link>
//       <Link href="/settings" className={styles.userDropdownLink}>Settings</Link>
//       <Link href="/logout" className={styles.userDropdownLink}>Logout</Link>
//     </div>
//   </div>
// );

// const Navbar: React.FC<{ userName?: string }> = ({ userName }) => (
//   <header className={styles.navbar}>
//     <Logo />
//     <NavLinks />
//     {userName ? <AccountInfo userName={userName} /> : <AuthLinks />}
//   </header>
// );

// export default Navbar;
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';
import CartIcon from './CartIcon';

const Logo: React.FC = () => (
  <Link href="/" className={styles.logo}>
    <img src="/assets/logo.png" alt="Shopee Logo" className={styles.logoImage} />
  </Link>
);

const NavLinks: React.FC = () => (
  <nav className={styles.navLinks}>
    <Link href="/" className={styles.navLink}>Home</Link>
    <Link href="/categories" className={styles.navLink}>Categories</Link>
    <Link href="/products" className={styles.navLink}>Products</Link>
    <Link href="/profile" className={styles.navLink}>Profile</Link>
    <Link href="/user-address" className={styles.navLink}>Address</Link>
  </nav>
);

const AuthLinks: React.FC = () => (
  <div className={styles.authLinks}>
    <Link href="/login" className={styles.authLink}>Login</Link>
    <Link href="/register" className={styles.authLink}>Register</Link>
  </div>
);

const AccountInfo: React.FC<{ userName: string }> = ({ userName }) => (
  <div className={styles.userSettings}>
    <span>{userName}</span>
    <span className={styles.userSettingsIcon}>⚙️</span>
    <div className={styles.userDropdown}>
      <Link href="/profile" className={styles.userDropdownLink}>Profile</Link>
      <Link href="/settings" className={styles.userDropdownLink}>Settings</Link>
      <Link href="/logout" className={styles.userDropdownLink}>Logout</Link>
    </div>
  </div>
);

const Navbar: React.FC<{ userName?: string }> = ({ userName }) => (
  <header className={styles.navbar}>
    <Logo />
    <NavLinks />
    <CartIcon />
    {userName ? <AccountInfo userName={userName} /> : <AuthLinks />}
  </header>
);

export default Navbar;