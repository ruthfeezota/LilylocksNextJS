import Link from "next/link";

import {
  ArrowLeft,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

import { notFound } from "next/navigation";

import ProductGallery from "../../../components/shop/ProductGallery";

export async function generateStaticParams() {
  return [
    { handle: "rookie" },
    { handle: "varsity" },
    { handle: "elite" },
  ];
}

const ponytails = {
  rookie: {
    name: "The Rookie™",
    subtitle:
      "Practice-ready but still cute.",

    price: "$99.99",

    length: '10"',

    bundles: "1.5 Bundles",

    density: "Light-Medium",

    bestFor: "Practice",

    texture:
      "Defined Waves / Loose Curls / Straight",

    description:
      "The gateway to big hair energy. Perfect for girls stepping into bold hair without committing to full stadium glam.",

    buyUrl:
      "https://lilylocksshop.square.site/product/the-starter-spark-10-cheerleading-ponytail/HFG4573Z54THUPEGNMAYM6JN?cs=true&cst=custom",

    images: [
      "/ponytails/rookie.jpg",
      "/ponytails/locktechnology.jpg",
      "/ponytails/humanhairquality.jpg",
      "/ponytails/differentlengths.jpg",
      "/ponytails/color-chart1.jpg",
      "/ponytails/color-chart2.jpg",
      "/ponytails/color-chart3.jpg",
    ],
  },

  varsity: {
    name: "The Varsity™",

    subtitle:
      "Competition-ready volume.",

    price: "$149.99",

    length: '18"',

    bundles: "2 Bundles",

    density: "Medium-Full",

    bestFor: "Competition",

    texture:
      "Defined Waves / Loose Curls / Straight",

    buyUrl:
      "https://lilylocksshop.square.site/product/the-extra-bounce-14-cheerleading-ponytail/C6H4NRCQ3THABDAAG3ZBIGNX?cs=true&cst=custom",

    description:
      "This pony moves. You see it from the sidelines, on video, and under lights.",

    images: [
      "/ponytails/varsity.jpg",
      "/ponytails/locktechnology.jpg",
      "/ponytails/humanhairquality.jpg",
      "/ponytails/differentlengths.jpg",
      "/ponytails/color-chart1.jpg",
      "/ponytails/color-chart2.jpg",
      "/ponytails/color-chart3.jpg",
    ],
  },

  elite: {
    name: "The Elite™",

    subtitle:
      "No blending in. Ever.",

    price: "$179.99",

    length: '22"',

    bundles: "3 Bundles",

    density: "Extra Full",

    bestFor: "Statement",

    texture:
      "Bold Curls / Glam Waves / Sleek Straight",

    buyUrl:
      "https://lilylocksshop.square.site/product/the-main-character-18-cheerleading-ponytail/HUKTERVGHR63X3TIPTCCRJUY?cs=true&cst=custom",

    description:
      "The pony that turns stunts into slow-motion moments.",

    images: [
      "/ponytails/elite.jpg",
      "/ponytails/locktechnology.jpg",
      "/ponytails/humanhairquality.jpg",
      "/ponytails/differentlengths.jpg",
      "/ponytails/color-chart1.jpg",
      "/ponytails/color-chart2.jpg",
      "/ponytails/color-chart3.jpg",
    ],
  },
};

/* ======================================================
   SHOPIFY VARIANT IDS
====================================================== */

const variantIds = {
  rookie:
    "gid://shopify/ProductVariant/REAL_ID_1",

  varsity:
    "gid://shopify/ProductVariant/REAL_ID_2",

  elite:
    "gid://shopify/ProductVariant/REAL_ID_3",
};

interface PageProps {
  params: Promise<{
    handle: string;
  }>;
}

export default async function ProductPage({
  params,
}: PageProps) {
  const { handle } = await params;

  const product =
    ponytails[
      handle as keyof typeof ponytails
    ];

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white lg:px-20">

      {/* Back */}
      <Link
        href="/shop"
        className="mb-10 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      {/* PDP LAYOUT */}
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          <ProductGallery
            images={product.images}
            name={product.name}
          />
        </div>

        {/* RIGHT */}
        <div className="sticky top-10">

          {/* Badge */}
          <span className="rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-bold uppercase text-black">
            Premium Ponytail
          </span>

          {/* Name */}
          <h1 className="heading-font mt-6 text-5xl uppercase leading-tight md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-4 text-xl text-white/70">
            {product.subtitle}
          </p>

          {/* Price */}
          <p className="mt-8 text-4xl font-bold text-[#ff0a8a]">
            {product.price}
          </p>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80">
            {product.description}
          </p>

          {/* Best For */}
          <div className="mt-8 rounded-[24px] bg-[#0052cc] p-6">
            <p className="text-sm uppercase tracking-wide text-white/70">
              Best For
            </p>

            <h3 className="heading-font mt-2 text-3xl uppercase text-[#E8FF00]">
              {product.bestFor}
            </h3>
          </div>

          {/* Color swatches */}
          <div className="mt-10">
            <p className="mb-4 font-semibold">
              Available Shades
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Jet Black", color: "#111111" },
                { name: "Dark Brown", color: "#2B1B17" },
                { name: "Ash Brown", color: "#7A5848" },
                { name: "Medium Brown", color: "#6B4A3B" },
                { name: "Honey Brown", color: "#A87B4F" },
                { name: "Dark Blonde", color: "#8A755F" },
                { name: "Honey Blonde", color: "#D6B06F" },
                { name: "Beige Blonde", color: "#E2C79A" },
                { name: "Ash Blonde", color: "#A7A7A7" },
                { name: "Platinum Blonde", color: "#F2E8D5" },
              ].map((shade) => (
                <div
                  key={shade.name}
                  className="group relative"
                >

                  {/* Tooltip */}
                  <div className="pointer-events-none absolute -top-12 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-xl bg-black px-3 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100">
                    {shade.name}

                    <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 rotate-45 bg-black" />
                  </div>

                  {/* Swatch */}
                  <button
                    aria-label={shade.name}
                    className="h-10 w-10 rounded-full border-2 border-white/20 transition duration-200 hover:scale-110 hover:border-white"
                    style={{
                      backgroundColor: shade.color,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="heading-font mb-6 text-2xl uppercase">
              Product Details
            </h3>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-white/60">
                  Length
                </span>

                <span>
                  {product.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Density
                </span>

                <span>
                  {product.density}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Bundles
                </span>

                <span>
                  {product.bundles}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">
                  Texture
                </span>

                <span>
                  {product.texture}
                </span>
              </div>

            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <Link
              href={product.buyUrl}
              className="w-full"
            >
              <button className="h-20 w-full rounded-full bg-[#E8FF00] px-6 text-lg font-bold text-black transition duration-300 hover:scale-105">
                Buy Now
              </button>
            </Link>

            <Link
              href="/team-partnership/#team-order"
              className="w-full"
            >
              <button className="h-20 w-full whitespace-nowrap rounded-full border-2 border-white bg-[#ff0a8a] px-6 text-lg font-bold text-white transition duration-300 hover:scale-105 hover:bg-white hover:text-black">
                Start A Team Order
              </button>
            </Link>

          </div>

          {/* Trust strip */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-white/5 p-5 text-center">
              <Sparkles
                className="mx-auto text-[#E8FF00]"
                size={22}
              />

              <p className="mt-3 text-sm font-semibold">
                Premium Human Hair
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 text-center">
              <ShieldCheck
                className="mx-auto text-[#E8FF00]"
                size={22}
              />

              <p className="mt-3 text-sm font-semibold">
                Secure Checkout
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5 text-center">
              <Truck
                className="mx-auto text-[#E8FF00]"
                size={22}
              />

              <p className="mt-3 text-sm font-semibold">
                Team Orders Available
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* RELATED CTA */}
      <section className="mt-24 rounded-[40px] bg-[#E8FF00] px-10 py-20 text-center text-black">

        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Need Matching Ponytails
          <br />
          For Your Entire Team?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-black/80">
          Explore Team Ordering,
          team color matching,
          and competition-ready
          LilyLocks production.
        </p>

        <Link
          href="/team-orders"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-lg font-bold text-white transition hover:scale-105"
        >
          Explore Team Orders
        </Link>

      </section>

    </main>
  );
}