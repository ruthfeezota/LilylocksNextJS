"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Users, Package } from "lucide-react";

const programs = [
  {
    title: "Starter Program",
    desc: "Ideal for youth teams, sideline cheer, and growing programs needing polished consistency.",
  },
  {
    title: "Competition Program",
    desc: "Built for high-performance teams, showcases, and all-star programs.",
  },
  {
    title: "Elite Program",
    desc: "Premium density, custom color matching, and top-tier visual impact.",
  },
];

export default function TeamOrdersPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/team-orders/team-hero.jpg"
          alt="LilyLocks team ponytails"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Custom Team Ponytails
              <br />
              Built For Performance
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Premium bulk ponytail ordering for gyms, coaches, schools,
              all-star teams, and elite athletes.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/team-orders/ponytails"
                className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold hover:scale-105 transition"
              >
                Shop Bulk Ponytails
              </Link>

              <Link
                href="/team-orders/bows"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-black transition"
              >
                Bulk Cheer Bows
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM PROGRAMS */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Team Ponytail Programs
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <div
                key={program.title}
                className="rounded-[32px] bg-white/10 p-8 border border-white/10"
              >
                <h3 className="heading-font text-3xl uppercase">
                  {program.title}
                </h3>

                <p className="mt-5 text-white/85 leading-relaxed text-lg">
                  {program.desc}
                </p>

                <button className="mt-8 rounded-full bg-[#E8FF00] px-6 py-3 font-bold text-black hover:scale-105 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER TYPES */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.4fr_0.9fr]">
          {/* Ponytails Feature */}
          <div className="rounded-[40px] bg-[#ff0a8a] p-10">
            <Package size={34} />

            <h2 className="heading-font mt-6 text-4xl uppercase md:text-5xl">
              Bulk Cheer Ponytails
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/90">
              Order premium matching ponytails for full teams, schools,
              sideline squads, and competition athletes.
            </p>

            <Link
              href="/team-orders/ponytails"
              className="mt-8 inline-flex items-center gap-3 font-bold text-xl hover:gap-4 transition-all"
            >
              Shop Ponytails
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Bows Secondary */}
          <div className="rounded-[40px] bg-white text-black p-10">
            <Users size={34} />

            <h2 className="heading-font mt-6 text-4xl uppercase">
              Cheer Bows
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/80">
              Add custom rhinestone and team bows to complete your full
              performance look.
            </p>

            <Link
              href="/team-orders/bows"
              className="mt-8 inline-flex items-center gap-3 font-bold text-xl hover:gap-4 transition-all"
            >
              Shop Team Bows
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY COACHES */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Why Coaches Choose LilyLocks
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {[
              "Team Consistency",
              "Reliable Color Matching",
              "Competition-Ready Hold",
              "Mid-Season Reorders",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[30px] bg-black p-8 text-center"
              >
                <ShieldCheck
                  className="mx-auto mb-5"
                  size={30}
                />
                <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW ORDERING WORKS */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            How Bulk Ordering Works
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              "Pick Your Program",
              "Submit Team Details",
              "Receive Bulk Quote",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-[32px] border border-white/10 bg-white/5 p-10"
              >
                <p className="text-[#E8FF00] text-5xl font-black">
                  0{index + 1}
                </p>

                <h3 className="heading-font mt-6 text-3xl uppercase">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B PORTAL */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-black p-12 text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Already A Coach
            <br />
            Or Team Buyer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85">
            Access your Shopify B2B portal for wholesale pricing,
            repeat orders, and custom team production.
          </p>

          <Link
            href="https://lilylocksshop.square.site"
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
          Ready To Outfit
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