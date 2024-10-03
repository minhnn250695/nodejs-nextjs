"use client";
import Link from "next/link";
import styles from "../styles/Breadscrumb.module.scss"; // Adjust the path as necessary
import { usePathname } from "next/navigation";

const BreadcrumbComponent = () => {
  const pathName = usePathname();
    const formattedPathName = pathName
        .replace(/[^a-zA-Z0-9-]/g, "") // Remove special characters except dash
        .replace(/-/g, " ") // Replace dash with space
        .replace(/\b\w/g, (c) => c.toUpperCase()); // Upper case the first letter of each word

  return (
    <nav aria-label="breadcrumb">
      <ol className={styles.breadcrumb}>
        <li className={styles.breadcrumbItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.breadcrumbItemActive} aria-current="page">
          {formattedPathName}
        </li>
      </ol>
    </nav>
  );
};
export default BreadcrumbComponent;
