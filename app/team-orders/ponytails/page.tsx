import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Package,
  Sparkles,
  Users,
} from "lucide-react";

const pricing = [
  { qty: "10–24", discount: "10% Off" },
  { qty: "25–49", discount: "15% Off" },
  { qty: "50–99", discount: "20% Off" },
  { qty: "100+", discount: "Custom Quote" },
];

const customization = [
  "Team color matching",
  "Length options",
  "Density selection",
  "Curl textures",
  "Rhinestone styling",
  "Glitter trim",
  "Packaging with team logo",
  "Competition-ready fullness",
];

const teams = [
  "All-Star Cheer Gyms",
  "School Cheer Teams",
  "College Programs",
  "Dance Teams",
  "Spirit Squads",
  "Event Vendors",
];

export default function BulkPonytailsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-black">
      {/* HERO */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              LilyLocks Bulk Orders
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Bulk Cheer
              <br />
              Ponytail Orders
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
              Competition-ready ponytails built for
              all-star gyms, schools, spirit squads,
              dance teams, and large-scale team
              production.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://your-store.com/account/login?return_url=/b2b"
                className="rounded-full bg-black text-white px-8 py-4 font-medium hover:opacity-90 transition"
              >
                Start Bulk Order
              </Link>

              <Link
                href="/team-orders"
                className="rounded-full border border-black px-8 py-4 font-medium hover:bg-black hover:text-white transition"
              >
                Back to Team Orders
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[650px] rounded-[2rem] overflow-hidden">
            <Image
              src="/team-orders/ponytail-hero.jpg"
              alt="Bulk Cheer Ponytails"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY TEAMS BUY */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-[2rem] bg-white p-8 border border-gray-100 shadow-sm">
            <Package size={28} className="mb-5" />
            <h3 className="text-2xl font-light mb-4">
              High Volume Production
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bulk-ready fulfillment for schools,
              gyms, and multi-athlete orders.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 border border-gray-100 shadow-sm">
            <Sparkles size={28} className="mb-5" />
            <h3 className="text-2xl font-light mb-4">
              Competition Ready
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Fullness, bounce, and styling built
              for game-day and performance visuals.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 border border-gray-100 shadow-sm">
            <Users size={28} className="mb-5" />
            <h3 className="text-2xl font-light mb-4">
              Team Uniformity
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Match athletes with consistent color,
              texture, length, and density.
            </p>
          </div>
        </div>
      </section>

      {/* BULK PRICING */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              Bulk Pricing
            </p>

            <h2 className="text-4xl md:text-5xl font-light">
              Team Volume Pricing
            </h2>
          </div>

          <div className="rounded-[2rem] border border-gray-100 overflow-hidden">
            {pricing.map((item, index) => (
              <div
                key={item.qty}
                className={`flex items-center justify-between px-8 py-6 ${
                  index !== pricing.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
              >
                <span className="text-lg font-medium">
                  {item.qty} Units
                </span>
                <span className="text-gray-600">
                  {item.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              Custom Production
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Fully Custom
              <br />
              Team Styling
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Create matching ponytails for your
              gym, school, or event team with
              fully customizable production.
            </p>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-4">
            {customization.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white border border-gray-100 p-5 flex items-center gap-3"
              >
                <Check size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
            Who We Serve
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-14">
            Built for Team Buyers
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {teams.map((team) => (
              <div
                key={team}
                className="rounded-[2rem] border border-gray-100 bg-[#faf8f4] p-8"
              >
                <p className="text-lg font-medium">
                  {team}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="rounded-[2.5rem] bg-black text-white p-12 md:p-16 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-300 mb-4">
            Shopify B2B Portal
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            Ready to Order
            <br />
            for Your Team?
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Access wholesale pricing, manage
            team-sized quantities, and place
            bulk cheer ponytail orders.
          </p>

          <Link
            href="https://your-store.com/account/login?return_url=/b2b"
            className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-medium hover:scale-[1.02] transition"
          >
            Enter Team Ordering Portal
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}