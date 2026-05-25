import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Users,
  Package,
} from "lucide-react";

const pricing = [
  { qty: "25–49", discount: "10% Off" },
  { qty: "50–99", discount: "15% Off" },
  { qty: "100–249", discount: "20% Off" },
  { qty: "250+", discount: "Custom Quote" },
];

const customOptions = [
  "Team color matching",
  "School logos",
  "Mascot graphics",
  "Glitter edge trim",
  "Rhinestone styling",
  "Metallic ribbon",
  "Athlete personalization",
  "Packaging with team branding",
];

const bowStyles = [
  "Competition Bow",
  "Rhinestone Bow",
  "Glitter Edge Bow",
  "Oversized Spirit Bow",
  "Classic Team Bow",
  "Event / Showcase Bow",
];

const teams = [
  "All-Star Cheer Gyms",
  "School Cheer Teams",
  "College Programs",
  "Dance Teams",
  "Spirit Squads",
  "Event Vendors",
];

export default function BulkBowsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-black">
      {/* HERO */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              LilyLocks Bulk Orders
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Bulk Cheer
              <br />
              Bow Orders
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
              Premium bows designed for cheer gyms,
              schools, competitions, spirit squads,
              and large-scale team production.
              Match colors, logos, and performance
              styling with ease.
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

          {/* RIGHT */}
          <div className="relative h-[650px] rounded-[2rem] overflow-hidden">
            <Image
              src="/team-orders/bows-hero.jpg"
              alt="Bulk Cheer Bows"
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
            <ShieldCheck
              size={28}
              className="mb-5"
            />
            <h3 className="text-2xl font-light mb-4">
              Competition Ready
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Designed to hold shape and stand out
              during performances, sideline events,
              and competitions.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 border border-gray-100 shadow-sm">
            <Sparkles
              size={28}
              className="mb-5"
            />
            <h3 className="text-2xl font-light mb-4">
              Custom Branding
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Match logos, colors, glitter, and
              rhinestone styling for a polished
              team identity.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 border border-gray-100 shadow-sm">
            <Package
              size={28}
              className="mb-5"
            />
            <h3 className="text-2xl font-light mb-4">
              Bulk Production
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Scalable ordering for gyms, schools,
              and event buyers needing large
              quantities.
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

      {/* CUSTOM OPTIONS */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              Custom Production
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Fully Custom
              <br />
              Team Bow Styling
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Build bows that align with your
              school, gym, or performance look.
              Perfect for branded team identity
              and competition visuals.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-4">
            {customOptions.map((item) => (
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

      {/* POPULAR STYLES */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
            Popular Bow Styles
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-14">
            Built for Performance
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {bowStyles.map((style) => (
              <div
                key={style}
                className="rounded-[2rem] border border-gray-100 bg-[#faf8f4] p-8"
              >
                <p className="text-lg font-medium">
                  {style}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
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
                className="rounded-[2rem] border border-gray-100 bg-white p-8"
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
            Access wholesale pricing, place
            bulk cheer bow orders, and manage
            large team production through your
            B2B ordering portal.
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