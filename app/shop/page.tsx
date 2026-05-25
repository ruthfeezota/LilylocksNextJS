import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

const ponytails = [
  {
    id: 1,
    handle: "starter-spark",
    name: "The Starter Spark™",
    subtitle: "Practice-ready confidence",
    length: '10"',
    bundles: "1.5 Bundles",
    density: "Light-Medium",
    bestFor: "Practice",
    price: "$99.99",
    image: "/ponytails/starter-spark.jpg",
    badge: "Starter Favorite",
  },
  {
    id: 2,
    handle: "extra-bounce",
    name: "The Extra Bounce™",
    subtitle: "Competition-ready volume",
    length: '18"',
    bundles: "2 Bundles",
    density: "Medium-Full",
    bestFor: "Competition",
    price: "$149.99",
    image: "/ponytails/extra-bounce.jpg",
    badge: "Best Seller",
  },
  {
    id: 3,
    handle: "main-character",
    name: "The Main Character™",
    subtitle: "No blending in. Ever.",
    length: '22"',
    bundles: "3 Bundles",
    density: "Extra Full",
    bestFor: "Statement",
    price: "$249.99",
    image: "/ponytails/main-character.jpg",
    badge: "Luxury Pick",
  },
];

export default function ShopPage() {
  return (
    <main className="bg-[#faf8f4] text-[#1f1f1f] min-h-screen">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center">
        <Image
          src="/team-3.jpg"
          alt="LilyLocks Hero"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[0.3em] text-sm mb-4">
              Signature Human Hair Ponytails
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Find Your <br /> Signature Ponytail
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Built for movement, volume, and competition-day confidence.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition">
                Shop All
              </button>

              <button className="px-7 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                Compare Ponytails
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-0 z-30 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-4 justify-center">
          {["Length", "Texture", "Density", "Color", "Best For", "Price"].map(
            (item) => (
              <button
                key={item}
                className="px-5 py-2 rounded-full border border-gray-300 text-sm hover:border-black transition"
              >
                {item}
              </button>
            )
          )}
        </div>
      </section>

      {/* COMPARE STRIP */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex justify-between items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-2">
                Compare Your Match
              </p>
              <h2 className="text-4xl font-light">The Signature Line</h2>
            </div>

            <button className="hidden md:flex items-center gap-2 text-sm font-medium">
              Compare All <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ponytails.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-[#f0ebe4]"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {item.badge}
                </span>

                <h3 className="text-2xl font-medium mt-3 mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 mb-6">{item.subtitle}</p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p>Length: {item.length}</p>
                  <p>Density: {item.density}</p>
                  <p>Bundles: {item.bundles}</p>
                  <p>Best For: {item.bestFor}</p>
                </div>

                <p className="text-2xl font-semibold mt-6">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {ponytails.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-sm"
            >
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                <button className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Heart size={18} />
                </button>

                <span className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full text-xs uppercase tracking-wide">
                  {product.badge}
                </span>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-light">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.subtitle}</p>
                  </div>

                  <p className="text-xl font-semibold">{product.price}</p>
                </div>

                {/* color swatches */}
                <div className="flex gap-2 mb-6">
                  {[
                    "#1f1f1f",
                    "#3b2f2f",
                    "#5c4033",
                    "#8b5e3c",
                    "#c19a6b",
                  ].map((color) => (
                    <span
                      key={color}
                      className="w-7 h-7 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <Link
                  href={`/shop/${product.handle}`}
                  className="w-full flex justify-center items-center gap-2 bg-black text-white py-4 rounded-full hover:opacity-90 transition"
                >
                  View Ponytail <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM CTA */}
      <section className="py-28 px-6 bg-[#f4efe8]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-4">
            Bulk Orders
          </p>

          <h2 className="text-5xl md:text-6xl font-light mb-6">
            Need Matching Ponytails For Your Squad?
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Explore custom team ponytail bundles, color matching, and premium
            cheer bows made for performance teams.
          </p>

          <Link
            href="/team-orders"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white"
          >
            Explore Team Orders <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}



