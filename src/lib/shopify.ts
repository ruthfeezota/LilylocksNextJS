const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

const endpoint = `https://${domain}/api/2024-10/graphql.json`;

export async function getPonytails() {
  const query = `
    {
      collection(handle: "signature-ponytails") {
        products(first: 10) {
          edges {
            node {
              id
              title
              handle
              description
              featuredImage {
                url
              }
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              variants(first: 20) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                  }
                }
              }
              metafields(identifiers: [
                { namespace: "custom", key: "best_for" },
                { namespace: "custom", key: "density" },
                { namespace: "custom", key: "bundles" }
              ]) {
                key
                value
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  const json = await res.json();
  return json.data.collection.products.edges.map((item: any) => item.node);
}