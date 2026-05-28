
"use client";

import { useState } from "react";

import {
  addToCart,
  createCart,
} from "@/src/lib/shopify";

interface Props {
  variantId: string;
}

export default function AddToCartButton({
  variantId,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  async function handleAddToCart() {
    try {
      setLoading(true);

      let cartId =
        localStorage.getItem(
          "cartId"
        );

      /* =================================
         CREATE CART IF NONE EXISTS
      ================================= */

      if (!cartId) {
        const cart =
          await createCart();

        // Safety check
        if (!cart?.id) {
          throw new Error(
            "Failed to create cart"
          );
        }

        cartId = cart.id;

        localStorage.setItem(
          "cartId",
          String(cartId)
        );
      }

      /* =================================
         ADD ITEM TO CART
      ================================= */

      const updatedCart =
        await addToCart({
          cartId:
            String(cartId),

          merchandiseId:
            variantId,

          quantity: 1,
        });

      /* =================================
         SAVE UPDATED CART
      ================================= */

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      /* =================================
         UPDATE NAVBAR + DRAWER
      ================================= */

      window.dispatchEvent(
        new Event("cartUpdated")
      );
    } catch (error) {
      console.error(
        "Add To Cart Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className="
        w-full
        bg-black
        text-white
        py-4
        rounded-full
        font-medium
        hover:opacity-90
        transition
      "
    >
      {loading
        ? "Adding..."
        : "Add To Cart"}
    </button>
  );
}