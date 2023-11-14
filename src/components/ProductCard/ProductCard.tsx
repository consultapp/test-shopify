import { createMarkup } from "@/functions/utils";
import { Product } from "@/types";
import React from "react";
import styles from "./style.module.scss";

interface IProductCard {
  product: Product;
}

export default function ProductCard({ product }: IProductCard) {
  console.log("product", product);
  return (
    <div className={styles.productCard}>
      <canvas
        className={styles.productCard__image}
        style={{
          backgroundImage: `url('${product.images?.nodes[0].src}')`,
        }}
      />
      <div
        className={styles.productCard__info}
        dangerouslySetInnerHTML={createMarkup(product.bodyHtml)}
      />
    </div>
  );
}
