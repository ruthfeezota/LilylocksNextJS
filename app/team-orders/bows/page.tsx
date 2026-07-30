"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Sparkles,
  ShieldCheck,
  Package,
  Crown,
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
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/cheer-bows"
          alt="Bulk Cheer Bows"
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
              Bow Orders
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Premium bows built for cheer gyms, schools,
              competitions, spirit squads, and large-scale
              branded team production.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="https://lilylocksshop.square.site/bulkorders"
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
            Built For Performance
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <ShieldCheck size={30} />,
                title: "Competition Ready",
                text: "Designed to hold shape and stand out under pressure.",
              },
              {
                icon: <Sparkles size={30} />,
                title: "Custom Branding",
                text: "Match logos, glitter, rhinestones, and team identity.",
              },
              {
                icon: <Package size={30} />,
                title: "Bulk Production",
                text: "Scalable ordering for schools, gyms, and events.",
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

      {/* CUSTOM STYLING */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <h2 className="heading-font text-4xl uppercase md:text-6xl">
              Fully Custom
              <br />
              Team Bow Styling
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90">
              Build bows that align with your school,
              gym, competition team, or event branding.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {customOptions.map((item) => (
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

      {/* POPULAR BOW STYLES */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Popular Bow Styles
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {bowStyles.map((style) => (
              <div
                key={style}
                className="rounded-[30px] border border-white/10 bg-white/5 p-10"
              >
                <Crown
                  className="mx-auto mb-5 text-[#E8FF00]"
                  size={28}
                />

                <p className="heading-font text-2xl uppercase">
                  {style}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Built For Team Buyers
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {teams.map((team) => (
              <div
                key={team}
                className="rounded-[30px] bg-black p-10"
              >
                <p className="heading-font text-2xl uppercase text-[#E8FF00]">
                  {team}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#ff0a8a] p-12 text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Ready To Order
            <br />
            Team Bows?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Access wholesale pricing, manage large quantities,
            and simplify full team bow production.
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
          Build A Bow Set
          <br />
          Your Team Will Remember
        </h2>

        <button className="mt-10 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition">
          Start My Bulk Order
        </button>
      </section>
    </main>
  );
}