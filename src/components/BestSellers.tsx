"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const bestSellers = [
  {
    name: "Elite™",
    subtitle: "Big Hair Ponytail",
    tagline: "No blending in. Ever.",
    image: "/ponytails/LilylocksNaturalBlackPonytail18in.png",
    badge: "18”",
    price: "$179.99",
    reviews: 124,
    button: "Shop Now",
    href: "https://lilylocksshop.square.site/product/the-elite-18-cheerleading-ponytail/HUKTERVGHR63X3TIPTCCRJUY?cs=true&cst=custom",
  },
  {
    name: "Varsity™",
    subtitle: "Mid-Level Ponytail",
    tagline: "Competition-ready volume.",
    image: "/ponytails/14in_lilylocks_ponytail.png",
    badge: "14”",
    price: "$149.99",
    reviews: 98,
    button: "Shop Now",
    href: "https://lilylocksshop.square.site/product/the-varsity-14-cheerleading-ponytail/C6H4NRCQ3THABDAAG3ZBIGNX?cs=true&cst=custom",
  },
  {
    name: "Signature™",
    subtitle: "Custom Cheer Bow",
    tagline: "Made for your team.",
    image: "/BowsCheer.png",
    badge: "CUSTOM",
    price: "Custom Pricing",
    reviews: 75,
    button: "Start Team Order",
    href: "https://lilylocksshop.square.site/product/custom-team-glitter-cheer-bow/DXOTKPZKB3DEH4X4Q5LR3L7B?cs=true&cst=custom",
  },
  {
    name: "Rookie™",
    subtitle: "Starter Ponytail",
    tagline: "The gateway to big hair energy.",
    image: "/ponytails/10in_lilylocks_ponytails.png",
    badge: "10”",
    price: "$99.99",
    reviews: 86,
    button: "Shop Now",
    href: "https://lilylocksshop.square.site/product/the-rookie-10-cheerleading-ponytail/HFG4573Z54THUPEGNMAYM6JN?cs=true&cst=custom",
  },
];

export default function BestSellers() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <div className="mx-auto w-full max-w-[1500px]">

        {/* Heading */}
        <div className="mb-7 text-center sm:mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="text-sm font-black text-[#ff0a8a] sm:text-base">
              ✦
            </span>

            <h2 className="font-holtwood text-3xl uppercase tracking-wide text-black sm:text-4xl md:text-5xl">
              Best Sellers
            </h2>

            <span className="text-sm font-black text-[#ff0a8a] sm:text-base">
              ✦
            </span>
          </div>

          <p className="mt-2 text-sm text-black/70 sm:text-base md:text-lg">
            The hair and accessories teams love most.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {bestSellers.map((product) => (
            <div
              key={product.name}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-black/10
                bg-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* Product Image */}
              <Link
                href={product.href}
                className="
                  relative
                  block
                  aspect-[1/0.95]
                  overflow-hidden
                  bg-white
                "
              >
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.subtitle}`}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    25vw
                  "
                  className="
                    object-contain
                    p-3
                    transition-transform
                    duration-300
                    group-hover:scale-[1.04]
                  "
                />

                {/* Badge */}
                <span
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-[#ff0a8a]
                    px-3.5
                    py-2
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-white
                  "
                >
                  {product.badge}
                </span>
              </Link>

              {/* Product Information */}
              <div className="flex flex-1 flex-col px-5 pb-5 text-center sm:px-6 sm:pb-6">

                {/* Product Name */}
                <h3 className="mt-3 font-holtwood text-[20px] uppercase tracking-wide text-black sm:text-[21px]">
                  {product.name}
                </h3>

                {/* Product Type */}
                <p className="mt-0.5 text-[13px] font-semibold uppercase tracking-wide text-black/70 sm:text-[14px]">
                  {product.subtitle}
                </p>

                {/* Tagline */}
                <p className="mt-1 text-[13px] italic leading-snug text-black/60 sm:text-[14px]">
                  {product.tagline}
                </p>

                {/* Rating */}
                <div className="mt-3 flex items-center justify-center gap-1.5">
                  <div className="flex gap-[2px] text-[#ff0a8a]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <span className="text-[11px] text-black/50">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <p className="mt-1.5 text-[15px] font-bold text-black">
                  {product.price}
                </p>

                {/* CTA */}
                <Link
                  href={product.href}
                  className="
                    mt-4
                    inline-flex
                    min-h-[48px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    bg-[#dfff00]
                    px-5
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-black
                    transition-colors
                    hover:bg-[#caff00]
                  "
                >
                  {product.button}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex justify-center sm:mt-10">
          <Link
            href="/ponytails"
            className="
              inline-flex
              min-h-[50px]
              items-center
              justify-center
              rounded-full
              bg-[#ff0a8a]
              px-9
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-white
              transition-colors
              hover:bg-[#ff176f]
            "
          >
            Shop All Ponytails
          </Link>
        </div>

      </div>
    </section>
  );
}