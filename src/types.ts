export type Product = {
  id: string;
  bodyHtml: string;
  images?: { nodes: { src: string }[] };
};

export type Products = Array<Product>;
