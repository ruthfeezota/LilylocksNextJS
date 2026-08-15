"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const bestSellers = [
  {
    name: "Elite™",
    subtitle: "Big Hair Ponytail",
    tagline: "No blending in. Ever.",
    image: "/ponytails/DarkBrown18inlilylocks.png",
    badge: "18”",
    price: "$179.99",
    reviews: 124,
    button: "Choose Color",
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
    button: "Choose Color",
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
    button: "Choose Color",
    href: "https://lilylocksshop.square.site/product/the-rookie-10-cheerleading-ponytail/HFG4573Z54THUPEGNMAYM6JN?cs=true&cst=custom",
  },
];

export default function BestSellers() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-7 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1100px]">

        {/* Heading */}
        <div className="mb-5 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-black text-[#ff0a8a]">
              ✦
            </span>

            <h2 className="font-holtwood text-2xl uppercase tracking-wide text-black text-3xl uppercase md:text-5xl">
              Best Sellers
            </h2>

            <span className="text-sm font-black text-[#ff0a8a]">
              ✦
            </span>
          </div>

          <p className="mt-1 text-[11px] text-black/70 sm:text-[18px]">
            The hair and accessories teams love most.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">

          {bestSellers.map((product) => (
            <div
              key={product.name}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Product Image */}
              <Link
                href={product.href}
                className="relative block aspect-square overflow-hidden bg-white"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} ${product.subtitle}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.04]"
                />

                {/* Badge */}
                <span className="absolute right-3 top-3 rounded-full bg-[#ff0a8a] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white">
                  {product.badge}
                </span>
              </Link>

              {/* Product Information */}
              <div className="flex flex-1 flex-col px-4 pb-4 text-center">

                {/* Product Name */}
                <h3 className="mt-2 font-holtwood text-[18px] uppercase tracking-wide text-black">
                  {product.name}
                </h3>

                {/* Product Type */}
                <p className="text-[12px] font-semibold uppercase tracking-wide text-black/70">
                  {product.subtitle}
                </p>

                {/* Tagline */}
                <p className="mt-1 text-[12px] italic leading-snug text-black/60">
                  {product.tagline}
                </p>

                {/* Rating */}
                <div className="mt-2 flex items-center justify-center gap-1">
                  <div className="flex gap-[1px] text-[#ff0a8a]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={12}
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  <span className="text-[10px] text-black/50">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <p className="mt-1 text-[13px] font-bold text-black">
                  {product.price}
                </p>

                {/* CTA */}
                <Link
                  href={product.href}
                  className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#dfff00] px-5 text-[11px] font-bold uppercase tracking-wide text-black transition-colors hover:bg-[#caff00]"
                >
                  {product.button}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex justify-center">
          <Link
            href="/ponytails"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#ff0a8a] px-8 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#ff176f]"
          >
            Shop All Ponytails
          </Link>
        </div>

      </div>
    </section>
  );
}