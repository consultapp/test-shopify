import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./style.module.scss";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((data) => {
        console.log("data", data);
        return data.json();
      })
      .then((res) => {
        console.log("json", res);
        if (res && res.length) {
          setProducts(res);
        }
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!products?.length) {
    return <div>No products found.</div>;
  }

  return (
    <div className={styles.productList}>
      {products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
