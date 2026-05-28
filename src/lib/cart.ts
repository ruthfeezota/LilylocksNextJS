
import { shopifyFetch } from "./shopify";

type CreateCartResponse = {
  cartCreate: {
    cart: {
      id: string;
      checkoutUrl: string;
    };
  };
};

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

  const response =
    await shopifyFetch<CreateCartResponse>({
      query,
    });

  return response.cartCreate.cart;
}
