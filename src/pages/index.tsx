import ProductList from "@/components/ProductList/ProductList";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shopify Test Store</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductList />
      </main>
    </>
  );
}
