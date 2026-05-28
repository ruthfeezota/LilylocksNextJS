
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
        localStorage.getItem("cartId");

      // Create cart if none exists
      if (!cartId) {
        const cart =
          await createCart();

        cartId = cart.id;

        localStorage.setItem(
          "cartId",
          cartId
        );
      }

      // Add item to cart
      const updatedCart =
        await addToCart({
          cartId,
          merchandiseId: variantId,
          quantity: 1,
        });

      // Store latest cart
      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

      // Trigger cart drawer refresh
      window.dispatchEvent(
        new Event("cartUpdated")
      );
    } catch (error) {
      console.error(error);
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
