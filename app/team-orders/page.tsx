import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Package,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function TeamOrdersPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4] text-black">
      {/* HERO */}
      <section className="px-6 py-20 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
              LilyLocks Team Orders
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6">
              Bulk Orders for Teams,
              <br />
              Gyms & Programs
            </h1>

            <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
              Premium cheer ponytails and bows built for
              schools, all-star gyms, spirit squads, and
              competition season. Order in bulk or enter
              your team ordering portal.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/team-orders/ponytails"
                className="rounded-full bg-black text-white px-8 py-4 font-medium hover:opacity-90 transition"
              >
                Bulk Ponytail Orders
              </Link>

              <Link
                href="/team-orders/bows"
                className="rounded-full border border-black px-8 py-4 font-medium hover:bg-black hover:text-white transition"
              >
                Bulk Cheer Bow Orders
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-[650px] rounded-[2rem] overflow-hidden">
            <Image
              src="/team-orders/team-hero.jpg"
              alt="Cheer team"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ORDER TYPES */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ponytails */}
          <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-[#f6f3ee] flex items-center justify-center mb-6">
              <Package size={24} />
            </div>

            <h2 className="text-3xl font-light mb-4">
              Bulk Cheer Ponytails
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Order team ponytails in matching lengths,
              colors, textures, and fullness. Built for
              sideline, competition, and spirit season.
            </p>

            <Link
              href="/team-orders/ponytails"
              className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
            >
              Shop Team Ponytails
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Bows */}
          <div className="rounded-[2rem] bg-white p-8 shadow-sm border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-[#f6f3ee] flex items-center justify-center mb-6">
              <Sparkles size={24} />
            </div>

            <h2 className="text-3xl font-light mb-4">
              Bulk Cheer Bow Orders
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Rhinestone bows, competition bows, glitter
              edge bows, and custom team spirit bows
              produced at scale.
            </p>

            <Link
              href="/team-orders/bows"
              className="inline-flex items-center gap-2 font-medium hover:gap-3 transition-all"
            >
              Shop Team Bows
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY TEAMS BUY */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-500 mb-4">
            Why Teams Choose LilyLocks
          </p>

          <h2 className="text-4xl md:text-5xl font-light">
            Built for Coaches,
            <br />
            Programs & Bulk Orders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-[2rem] border border-gray-100 p-8">
            <ShieldCheck
              size={28}
              className="mb-5"
            />
            <h3 className="text-2xl font-light mb-4">
              Consistent Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reliable production for large orders so
              teams stay uniform across athletes.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[2rem] border border-gray-100 p-8">
            <Users size={28} className="mb-5" />
            <h3 className="text-2xl font-light mb-4">
              Team Matching
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Match school colors, branding, competition
              looks, and spirit season styling.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[2rem] border border-gray-100 p-8">
            <Package
              size={28}
              className="mb-5"
            />
            <h3 className="text-2xl font-light mb-4">
              Bulk-Friendly Ordering
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Simplified ordering for gyms, coaches, and
              schools using your dedicated B2B portal.
            </p>
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="rounded-[2.5rem] bg-black text-white p-10 md:p-16 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-gray-300 mb-4">
            B2B Ordering Portal
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6">
            Already a Coach or
            <br />
            Team Buyer?
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Login to your Shopify B2B ordering portal to
            access wholesale pricing, bulk ordering, and
            custom team production.
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