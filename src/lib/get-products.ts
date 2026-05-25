import { shopifyFetch } from "./shopify";

type ShopifyProductsResponse = {
  products: {
    edges: {
      node: {
        id: string;
        title: string;
        handle: string;
      };
    }[];
  };
};

export async function getProducts() {
  const data = await shopifyFetch<ShopifyProductsResponse>({
    query: `
      {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
            }
          }
        }
      }
    `,
  });

  return data.products.edges.map((item) => item.node);
}