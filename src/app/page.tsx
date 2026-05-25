import { getProducts } from "../src/lib/get-products";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-8">LilyLocks Products</h1>

      <div className="space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.handle}</p>
          </div>
        ))}
      </div>
    </main>
  );
}