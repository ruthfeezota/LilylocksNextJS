
"use client";

import Image from "next/image";

import {
  removeFromCart,
  updateCartLine,
} from "@/src/lib/shopify";

interface Props {
  item: any;
  cartId: string;
  refreshCart: () => void;
}

export default function CartItem({
  item,
  cartId,
  refreshCart,
}: Props) {
  const merchandise =
    item.merchandise;

  async function increaseQty() {
    await updateCartLine({
      cartId,
      lineId: item.id,
      quantity: item.quantity + 1,
    });

    refreshCart();
  }

  async function decreaseQty() {
    if (item.quantity <= 1) {
      await removeFromCart({
        cartId,
        lineId: item.id,
      });
    } else {
      await updateCartLine({
        cartId,
        lineId: item.id,
        quantity: item.quantity - 1,
      });
    }

    refreshCart();
  }

  return (
    <div className="flex gap-4">
      {/* Product Image */}
      <div
        className="
          relative
          w-24
          h-24
          rounded-xl
          overflow-hidden
          bg-gray-100
          flex-shrink-0
        "
      >
        <Image
          src={
            merchandise.image?.url
          }
          alt={
            merchandise.image
              ?.altText ||
            merchandise.product.title
          }
          fill
          className="object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3
          className="
            font-medium
            text-sm
          "
        >
          {
            merchandise.product.title
          }
        </h3>

        <p
          className="
            text-sm
            text-gray-500
            mt-1
          "
        >
          {merchandise.title}
        </p>

        <p
          className="
            mt-2
            font-medium
          "
        >
          $
          {Number(
            merchandise.price.amount
          ).toFixed(2)}
        </p>

        {/* Quantity Controls */}
        <div
          className="
            flex
            items-center
            gap-3
            mt-3
          "
        >
          <button
            onClick={decreaseQty}
            className="
              w-8
              h-8
              rounded-full
              border
              flex
              items-center
              justify-center
            "
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={increaseQty}
            className="
              w-8
              h-8
              rounded-full
              border
              flex
              items-center
              justify-center
            "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
