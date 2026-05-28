"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Star,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Users,
} from "lucide-react";

const ponytails = [
  {
    id: 1,
    handle: "starter-spark",
    name: "The Starter Spark™",
    subtitle: "Practice-ready confidence 10inch Ponytail",
    bestFor: "Practice",
    price: "$99.99",
    image: "/ponytails/starter-spark.jpg",
    badge: "Starter Favorite",
    rating: "4.8",
    reviews: 124,
    variantId:
      "gid://shopify/ProductVariant/123456789",
  },
  {
    id: 2,
    handle: "extra-bounce",
    name: "The Extra Bounce™",
    subtitle: "Competition-ready volume 14inch Ponytail",
    bestFor: "Competition",
    price: "$149.99",
    image: "/ponytails/extra-bounce.jpg",
    badge: "Best Seller",
    rating: "4.9",
    reviews: 231,
    variantId:
      "gid://shopify/ProductVariant/123456789",
  },
  {
    id: 3,
    handle: "main-character",
    name: "The Main Character™",
    subtitle: "No blending in. Ever. 18inch Ponytail",
    bestFor: "Luxury",
    price: "$199.99",
    image: "/ponytails/main-character.jpg",
    badge: "Luxury Pick",
    rating: "5.0",
    reviews: 87,
    variantId:
      "gid://shopify/ProductVariant/123456789",
  },
];

const shopNeeds = [
  {
    title: "Practice Ponytails",
    text: "Lightweight styles built for training, sideline, and everyday wear.",
  },
  {
    title: "Competition Ponytails",
    text: "Fuller density built for movement, volume, and impact.",
  },
  {
    title: "Luxury Statement",
    text: "High-volume premium looks made to stand out.",
  },
];

export default function ShopPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/team-3.jpg"
          alt="LilyLocks Shop Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
              Home / Shop / Ponytails
            </p>

            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Signature Human
              <br />
              Hair Ponytails
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              12 styles built for practice, competition,
              volume, and statement looks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/ponytails">
              <button className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold hover:scale-105 transition">
                Shop All Styles
              </button>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 z-40 border-y border-white/10 bg-[#0052cc]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <p className="text-sm font-semibold text-white/80">
            Showing 12 Products
          </p>

          <div className="flex flex-wrap gap-3">
            {["Length", "Density", "Color", "Best For", "Price", "Sort By"].map(
              (item) => (
                <button
                  key={item}
                  className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold hover:bg-white hover:text-black transition"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* SHOP BY NEED */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Shop By Need
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {shopNeeds.map((item) => (
              <div
                key={item.title}
                className="rounded-[36px] border border-white/10 bg-white/5 p-10"
              >
                <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {ponytails.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[40px] bg-black"
            >
              {/* IMAGE */}
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md">
                  <Heart size={18} />
                </button>

                <span className="absolute left-5 top-5 rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-bold uppercase text-black">
                  {product.badge}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="heading-font text-3xl uppercase">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-white/75">
                      {product.subtitle}
                    </p>
                  </div>

                  <p className="text-2xl font-bold text-[#ff0a8a]">
                    {product.price}
                  </p>
                </div>

                {/* Rating */}
                <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
                  <Star
                    size={16}
                    className="fill-[#E8FF00] text-[#E8FF00]"
                  />
                  <span>{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>

                <p className="mb-6 font-semibold text-[#E8FF00]">
                  Best For: {product.bestFor}
                </p>

                {/* Swatches */}
                <div className="mb-8 flex gap-2">
                  {[
                    "#111111",
                    "#2f1f1f",
                    "#5b3b2a",
                    "#8a623d",
                    "#d4b48c",
                  ].map((color) => (
                    <span
                      key={color}
                      className="h-7 w-7 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    href={`/shop/${product.handle}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] py-4 font-bold hover:scale-[1.02] transition"
                  >
                    View Product
                    <ArrowRight size={18} />
                  </Link>

                  {/* <button className="rounded-full border border-white py-4 font-bold hover:bg-white hover:text-black transition">
                    Add To Cart
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-black px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">
          {[
            { icon: <Sparkles size={26} />, text: "Premium Human Hair" },
            { icon: <ShieldCheck size={26} />, text: "Secure Checkout" },
            { icon: <Users size={26} />, text: "Team Color Matching" },
            { icon: <ShoppingBag size={26} />, text: "Bulk Team Orders" },
          ].map((item) => (
            <div key={item.text} className="space-y-3">
              <div className="flex justify-center text-[#E8FF00]">
                {item.icon}
              </div>
              <p className="font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLETE THE LOOK */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Complete Your Team Look
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              "Cheer Bows",
              "Color Matching",
              "Team Orders",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[32px] bg-black p-10"
              >
                <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#0052cc] px-6 py-24">
  
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Loved By Athletes
          </h2>

          <div className="mt-12 rounded-[40px] bg-black p-12">
            <p className="text-3xl text-[#E8FF00]">★★★★★</p>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90">
              “These are hands down the best ponytails our team
              has ever used. The volume, hold, and color matching
              were perfect.”
            </p>

            <p className="mt-6 font-bold text-[#ff0a8a]">
              — Elite Cheer Coach
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Need Matching Ponytails
          <br />
          For Your Squad?
        </h2>
        <Link
          href="/team-orders"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition"
        >
          Explore Team Orders
          <ArrowRight size={18} />
        </Link>
      </section>

    </main>
    
  );
}