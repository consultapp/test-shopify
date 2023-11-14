import { createMarkup } from "@/functions/utils";
import { Product } from "@/types";
import React from "react";
import "./style.module.scss";

interface IProductCard {
  product: Product;
}

export default function ProductCard({ product }: IProductCard) {
  console.log("product", product);
  return (
    <div className="productCard">
      <img
        className="productCard__image"
        style={{ background: `url('${product.images?.nodes[0].src}')` }}
      />
      <div
        className="productCard__info"
        dangerouslySetInnerHTML={createMarkup(product.bodyHtml)}
      />
    </div>
  );
}
