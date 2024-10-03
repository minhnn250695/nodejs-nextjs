import React from "react";
// import styles from '@styles/ProductList.module.css';
import styles from "../../styles/ProductList.module.scss";
import ProductList from "./ProductList";
import Link from "next/link";
import { Breadcrumbs } from "@mui/material";
import BreadcrumbComponent from "@/components/Breadscrumb";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products;
};

const ProductsPage = async () => {
  const products = await fetchProducts();

  return (
    <div>      
      <ProductList products={products} />
    </div>
  );
};

export default ProductsPage;
