import { Products } from "@/types";
import { LATEST_API_VERSION } from "@shopify/shopify-api";

//after: "eyJsYXN0X2lkIjoyMDk5NTY0MiwibGFzdF92YWx1ZSI6IjIwOTk1NjQyIn0=")
const firstTenProducts = {
  query: `{
        products(first: 10) {
            edges {
                cursor
                node {
                  id
                  bodyHtml
                  images(first:10){
                    nodes{
                      src
                    }
                  }
                }
            }                
            pageInfo {
                hasNextPage
            }
        }
      }`,
};

async function getProducts(query = firstTenProducts) {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_GRAPHQL_URL}${LATEST_API_VERSION}/graphql.json`,
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": process.env.SHOPIFY_TOKEN,
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(query),
      }
    );
    const { data } = await response.json();
    const result = data.products?.edges?.map((item) => item.node);

    return result;
  } catch (error) {
    return error;
  }
}
export default getProducts;
