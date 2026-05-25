import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm">
      <div className="relative h-[520px] overflow-hidden">
        <Image
          src={product.featuredImage?.url}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-light">{product.title}</h3>
          <p className="text-xl font-semibold">
            ${product.priceRange.minVariantPrice.amount}
          </p>
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-6">
          {product.metafields?.map((field: any) => (
            <p key={field.key}>
              <span className="font-medium capitalize">
                {field.key.replace("_", " ")}:
              </span>{" "}
              {field.value}
            </p>
          ))}
        </div>

        <Link
          href={`/products/${product.handle}`}
          className="w-full flex justify-center bg-black text-white py-4 rounded-full"
        >
          View Ponytail
        </Link>
      </div>
    </div>
  );
}