"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ShieldCheck,
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
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/team-orders/ponytail-hero.jpg"
          alt="Bulk Cheer Ponytails"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Bulk Cheer
              <br />
              Ponytail Orders
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Competition-ready ponytails built for schools, gyms,
              spirit squads, all-star teams, and large-scale
              athlete production.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="lilylocksshop.square.site/bulkorders"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold hover:scale-105 transition"
              >
                Start Bulk Order
              </Link>

              <Link
                href="/team-orders"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-black transition"
              >
                Back to Team Orders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TEAMS BUY */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Built For Teams
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Users size={30} />,
                title: "High Volume Production",
                text: "Bulk-ready fulfillment for gyms, schools, and large athlete rosters.",
              },
              {
                icon: <Sparkles size={30} />,
                title: "Competition Ready",
                text: "Bounce, fullness, and hold built for high-energy performance.",
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "Team Uniformity",
                text: "Reliable consistency across color, texture, length, and density.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-white/10 border border-white/10 p-8"
              >
                <div className="text-[#E8FF00]">
                  {item.icon}
                </div>

                <h3 className="heading-font mt-6 text-3xl uppercase">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg text-white/85 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BULK PRICING */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Team Volume Pricing
          </h2>

          <div className="mt-16 overflow-hidden rounded-[40px] border border-white/10 bg-white/5">
            {pricing.map((item, index) => (
              <div
                key={item.qty}
                className={`flex items-center justify-between px-8 py-8 text-xl ${
                  index !== pricing.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <span className="font-bold">
                  {item.qty} Units
                </span>

                <span className="text-[#E8FF00] font-bold">
                  {item.discount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZATION */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="heading-font text-4xl uppercase md:text-6xl">
              Fully Custom
              <br />
              Team Styling
            </h2>

            <p className="mt-8 text-lg text-white/90 leading-relaxed max-w-xl">
              Create matching ponytails for your gym,
              school, or event team with premium custom
              production.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {customization.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[24px] bg-black p-5"
              >
                <Check
                  size={18}
                  className="text-[#E8FF00]"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Built For Team Buyers
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {teams.map((team) => (
              <div
                key={team}
                className="rounded-[30px] border border-white/10 bg-white/5 p-10"
              >
                <p className="heading-font text-2xl uppercase text-[#E8FF00]">
                  {team}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B PORTAL */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-black p-12 text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Ready To Order
            <br />
            For Your Team?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Access wholesale pricing, manage bulk quantities,
            and simplify full team ponytail ordering.
          </p>

          <Link
            href="https://lilylocksshop.square.site/bulkorders"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-10 py-4 text-lg font-black text-black hover:scale-105 transition"
          >
            Enter Team Ordering Portal
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Ready To Match
          <br />
          Your Team?
        </h2>

        <button className="mt-10 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition">
          Start My Bulk Order
        </button>
      </section>
    </main>
  );
}