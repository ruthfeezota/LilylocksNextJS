

const domain =
  process.env
    .NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;

const storefrontAccessToken =
  process.env
    .NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

console.log("DOMAIN:", domain);

console.log(
  "TOKEN:",
  storefrontAccessToken
);

const endpoint = `https://${domain}/api/2024-10/graphql.json`;

console.log("ENDPOINT:", endpoint);


type ShopifyFetchParams = {
  query: string;
  variables?: Record<string, any>;
};

export async function shopifyFetch<T>({
  query,
  variables = {},
}: ShopifyFetchParams): Promise<T> {
  const response = await fetch(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      "X-Shopify-Storefront-Access-Token":
        storefrontAccessToken,
    },

    body: JSON.stringify({
      query,
      variables,
    }),

    cache: "no-store",
  });

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);

    throw new Error(
      "Failed to fetch Shopify API"
    );
  }

  return json.data;
}

/* =========================================================
   PRODUCTS
========================================================= */

export async function getPonytails() {
  const query = `
    query GetPonytails {
      collection(handle: "signature-ponytails") {
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              description

              featuredImage {
                url
                altText
              }

              images(first: 10) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }

              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
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
                {
                  namespace: "custom",
                  key: "best_for"
                }

                {
                  namespace: "custom",
                  key: "density"
                }

                {
                  namespace: "custom",
                  key: "bundles"
                }
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

  type Response = {
    collection: {
      products: {
        edges: {
          node: any;
        }[];
      };
    };
  };

  const data =
    await shopifyFetch<Response>({
      query,
    });

  return data.collection.products.edges.map(
    (item) => item.node
  );
}

/* =========================================================
   SINGLE PRODUCT
========================================================= */

export async function getProduct(
  handle: string
) {
  const query = `
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description

        featuredImage {
          url
          altText
        }

        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }

        priceRange {
          minVariantPrice {
            amount
            currencyCode
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
          {
            namespace: "custom",
            key: "best_for"
          }

          {
            namespace: "custom",
            key: "density"
          }

          {
            namespace: "custom",
            key: "bundles"
          }
        ]) {
          key
          value
        }
      }
    }
  `;

  type Response = {
    product: any;
  };

  const data =
    await shopifyFetch<Response>({
      query,

      variables: {
        handle,
      },
    });

  return data.product;
}

/* =========================================================
   CREATE CART
========================================================= */

export async function createCart() {
  const query = `
    mutation CreateCart {
      cartCreate {
        cart {
          id
          checkoutUrl
          totalQuantity

          cost {
            totalAmount {
              amount
              currencyCode
            }
          }

          lines(first: 20) {
            edges {
              node {
                id

                quantity

                merchandise {
                  ... on ProductVariant {
                    id
                    title

                    image {
                      url
                      altText
                    }

                    product {
                      title
                      handle
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  type Response = {
    cartCreate: {
      cart: any;
    };
  };

  const data =
    await shopifyFetch<Response>({
      query,
    });

  return data.cartCreate.cart;
}

/* =========================================================
   GET CART
========================================================= */

export async function getCart(
  cartId: string
) {
  const query = `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        checkoutUrl
        totalQuantity

        cost {
          totalAmount {
            amount
            currencyCode
          }
        }

        lines(first: 20) {
          edges {
            node {
              id
              quantity

              merchandise {
                ... on ProductVariant {
                  id
                  title

                  image {
                    url
                    altText
                  }

                  product {
                    title
                    handle
                  }

                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  type Response = {
    cart: any;
  };

  const data =
    await shopifyFetch<Response>({
      query,

      variables: {
        cartId,
      },
    });

  return data.cart;
}

/* =========================================================
   ADD TO CART
========================================================= */

export async function addToCart({
  cartId,
  merchandiseId,
  quantity = 1,
}: {
  cartId: string;
  merchandiseId: string;
  quantity?: number;
}) {
  const query = `
    mutation AddToCart(
      $cartId: ID!
      $lines: [CartLineInput!]!
    ) {
      cartLinesAdd(
        cartId: $cartId
        lines: $lines
      ) {
        cart {
          id
          checkoutUrl
          totalQuantity

          cost {
            totalAmount {
              amount
              currencyCode
            }
          }

          lines(first: 20) {
            edges {
              node {
                id
                quantity

                merchandise {
                  ... on ProductVariant {
                    id
                    title

                    image {
                      url
                      altText
                    }

                    product {
                      title
                      handle
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  type Response = {
    cartLinesAdd: {
      cart: any;
    };
  };

  const data =
    await shopifyFetch<Response>({
      query,

      variables: {
        cartId,

        lines: [
          {
            merchandiseId,
            quantity,
          },
        ],
      },
    });

  return data.cartLinesAdd.cart;
}

/* =========================================================
   UPDATE CART ITEM QUANTITY
========================================================= */

export async function updateCartLine({
  cartId,
  lineId,
  quantity,
}: {
  cartId: string;
  lineId: string;
  quantity: number;
}) {
  const query = `
    mutation UpdateCartLine(
      $cartId: ID!
      $lines: [CartLineUpdateInput!]!
    ) {
      cartLinesUpdate(
        cartId: $cartId
        lines: $lines
      ) {
        cart {
          id
          checkoutUrl
          totalQuantity

          cost {
            totalAmount {
              amount
              currencyCode
            }
          }

          lines(first: 20) {
            edges {
              node {
                id
                quantity

                merchandise {
                  ... on ProductVariant {
                    id
                    title

                    image {
                      url
                      altText
                    }

                    product {
                      title
                      handle
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  type Response = {
    cartLinesUpdate: {
      cart: any;
    };
  };

  const data =
    await shopifyFetch<Response>({
      query,

      variables: {
        cartId,

        lines: [
          {
            id: lineId,
            quantity,
          },
        ],
      },
    });

  return data.cartLinesUpdate.cart;
}

/* =========================================================
   REMOVE FROM CART
========================================================= */

export async function removeFromCart({
  cartId,
  lineId,
}: {
  cartId: string;
  lineId: string;
}) {
  const query = `
    mutation RemoveFromCart(
      $cartId: ID!
      $lineIds: [ID!]!
    ) {
      cartLinesRemove(
        cartId: $cartId
        lineIds: $lineIds
      ) {
        cart {
          id
          checkoutUrl
          totalQuantity

          cost {
            totalAmount {
              amount
              currencyCode
            }
          }

          lines(first: 20) {
            edges {
              node {
                id
                quantity

                merchandise {
                  ... on ProductVariant {
                    id
                    title

                    image {
                      url
                      altText
                    }

                    product {
                      title
                      handle
                    }

                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  type Response = {
    cartLinesRemove: {
      cart: any;
    };
  };

  const data =
    await shopifyFetch<Response>({
      query,

      variables: {
        cartId,
        lineIds: [lineId],
      },
    });

  return data.cartLinesRemove.cart;
}