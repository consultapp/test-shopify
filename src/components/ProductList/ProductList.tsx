import React, { useEffect, useState } from "react";

function createMarkup(html) {
  return { __html: html };
}

export default function ProductList() {
  const [products, setProducts] = useState(null);

  console.log("products1", products);

  useEffect(() => {
    fetch("/api/products")
      .then((data) => data.json())
      .then((json) => {
        console.log("json", json);
        if (json && json.length) {
          setProducts(json);
        }
      });
  }, []);

  if (!products) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      {products.map((product: { id: string; bodyHtml: string }) => (
        <div
          key={product.id}
          dangerouslySetInnerHTML={createMarkup(product.bodyHtml)}
        />
      ))}
    </div>
  );
}
