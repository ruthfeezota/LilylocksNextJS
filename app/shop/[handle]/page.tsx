import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
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
    <main className="min-h-screen bg-[#faf8f4] px-6 py-12 lg:px-20">
      {/* Back Link */}
      <Link
        href="/shop"
        className="mb-10 inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      {/* SHOPIFY STYLE LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT */}
        <div>
          <ProductGallery
            images={product.images}
            name={product.name}
          />
        </div>

        {/* RIGHT */}
        <div className="sticky top-10">
          <h1 className="text-5xl font-light tracking-tight mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-gray-500 mb-6">
            {product.subtitle}
          </p>

          <p className="text-3xl font-semibold mb-8">
            {product.price}
          </p>

          <p className="text-gray-700 leading-relaxed mb-10 max-w-xl">
            {product.description}
          </p>

          {/* Specs */}
          <div className="space-y-4 mb-10 border-t border-b py-8">
            <div className="flex justify-between">
              <span className="text-gray-500">Length</span>
              <span>{product.length}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Density</span>
              <span>{product.density}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Bundles</span>
              <span>{product.bundles}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Best For</span>
              <span>{product.bestFor}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Texture</span>
              <span>{product.texture}</span>
            </div>
          </div>

          {/* Add To Cart */}
          <button className="w-full rounded-full bg-black py-4 text-white font-medium flex items-center justify-center gap-3 hover:opacity-90 transition">
            <ShoppingBag size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}