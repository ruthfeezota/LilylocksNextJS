import { shopifyFetch } from "./shopify";

export async function createCart() {
  const query = `
    mutation {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;

  const response = await shopifyFetch({
    query,
  });

  return response.data.cartCreate.cart;
}