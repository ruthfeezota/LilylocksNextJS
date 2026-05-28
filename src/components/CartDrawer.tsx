

"use client";

import { useEffect, useState } from "react";

import {
  getCart,
} from "@/src/lib/shopify";

import CartItem from "./CartItem";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
}: Props) {
  const [cart, setCart] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  async function refreshCart() {
    try {
      const cartId =
        localStorage.getItem(
          "cartId"
        );

      if (!cartId) return;

      const freshCart =
        await getCart(cartId);

      setCart(freshCart);

      localStorage.setItem(
        "cart",
        JSON.stringify(freshCart)
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refreshCart();

    function handleCartUpdate() {
      refreshCart();
    }

    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );

    return () => {
      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed
          inset-0
          bg-black/40
          z-40
          transition-opacity

          ${
            isOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-full
          w-full
          max-w-md
          bg-white
          z-50
          transition-transform
          duration-300
          flex
          flex-col

          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex
            items-center
            justify-between
            p-6
            border-b
          "
        >
          <h2
            className="
              text-xl
              font-semibold
            "
          >
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        {/* Cart Content */}
        <div
          className="
            flex-1
            overflow-y-auto
            p-6
          "
        >
          {loading ? (
            <p>Loading...</p>
          ) : cart?.lines?.edges
              ?.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart?.lines?.edges.map(
                (edge: any) => (
                  <CartItem
                    key={edge.node.id}
                    item={edge.node}
                    cartId={cart.id}
                    refreshCart={
                      refreshCart
                    }
                  />
                )
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && (
          <div
            className="
              border-t
              p-6
              space-y-4
            "
          >
            <div
              className="
                flex
                justify-between
                font-medium
              "
            >
              <span>Subtotal</span>

              <span>
                $
                {Number(
                  cart.cost.totalAmount
                    .amount
                ).toFixed(2)}
              </span>
            </div>

            <a
              href={cart.checkoutUrl}
              className="
                block
                w-full
                bg-black
                text-white
                text-center
                py-4
                rounded-full
                font-medium
                hover:opacity-90
                transition
              "
            >
              Checkout
            </a>
          </div>
        )}
      </div>
    </>
  );
}