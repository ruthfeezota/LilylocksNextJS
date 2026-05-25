import Link from "next/link";
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import ProductGallery from "../../../components/shop/ProductGallery";

const ponytails = {
  "starter-spark": {
    name: "The Starter Spark™",
    subtitle: "Practice-ready but still cute.",
    price: "$99.99",
    length: '10"',
    bundles: "1.5 Bundles",
    density: "Light-Medium",
    bestFor: "Practice",
    texture: "Soft Wave / Sleek Straight",
    description:
      "The gateway to big hair energy. Perfect for girls stepping into bold hair without committing to full stadium glam.",
    images: [
      "/ponytails/starter-spark.jpg",
      "/ponytails/starter-spark-2.jpg",
      "/ponytails/starter-spark-3.jpg",
      "/ponytails/starter-spark-4.jpg",
    ],
  },

  "extra-bounce": {
    name: "The Extra Bounce™",
    subtitle: "Competition-ready volume.",
    price: "$149.99",
    length: '18"',
    bundles: "2 Bundles",
    density: "Medium-Full",
    bestFor: "Competition",
    texture: "Defined Waves / Loose Curls",
    description:
      "This pony moves. You see it from the sidelines, on video, and under lights.",
    images: [
      "/ponytails/extra-bounce.jpg",
      "/ponytails/extra-bounce-2.jpg",
      "/ponytails/extra-bounce-3.jpg",
      "/ponytails/extra-bounce-4.jpg",
    ],
  },

  "main-character": {
    name: "The Main Character™",
    subtitle: "No blending in. Ever.",
    price: "$249.99",
    length: '22"',
    bundles: "3 Bundles",
    density: "Extra Full",
    bestFor: "Statement",
    texture: "Bold Curls / Glam Waves",
    description:
      "The pony that turns stunts into slow-motion moments.",
    images: [
      "/ponytails/main-character.jpg",
      "/ponytails/main-character-2.jpg",
      "/ponytails/main-character-3.jpg",
      "/ponytails/main-character-4.jpg",
    ],
  },
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
    ponytails[handle as keyof typeof ponytails];

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 lg:px-20">
      {/* Back */}
      <Link
        href="/shop"
        className="mb-10 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      {/* PDP LAYOUT */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
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
          <h1 className="heading-font mt-6 text-5xl uppercase md:text-6xl leading-tight">
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
            <p className="mb-4 font-semibold">Available Shades</p>

            <div className="flex gap-3">
              {[
                "#111111",
                "#2f1f1f",
                "#5b3b2a",
                "#8a623d",
                "#d4b48c",
              ].map((color) => (
                <span
                  key={color}
                  className="h-10 w-10 rounded-full border-2 border-white/20 cursor-pointer hover:scale-110 transition"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 p-8">
            <h3 className="heading-font text-2xl uppercase mb-6">
              Product Details
            </h3>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-white/60">Length</span>
                <span>{product.length}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Density</span>
                <span>{product.density}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Bundles</span>
                <span>{product.bundles}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-white/60">Texture</span>
                <span>{product.texture}</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <button className="flex items-center justify-center gap-3 rounded-full bg-[#ff0a8a] py-4 font-bold hover:scale-[1.02] transition">
              <ShoppingBag size={18} />
              Add To Cart
            </button>

            <button className="rounded-full border border-white py-4 font-bold hover:bg-white hover:text-black transition">
              Buy Now
            </button>
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
                Bulk Orders Available
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
          Explore bulk ordering, team color matching,
          and competition-ready LilyLocks production.
        </p>

        <Link
          href="/team-orders"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition"
        >
          Explore Team Orders
        </Link>
      </section>
    </main>
  );
}