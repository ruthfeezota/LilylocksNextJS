"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Star,
  Crown,
  Check,
} from "lucide-react";

const ponytails = [
  {
    name: "The Rookie",
    subtitle: "Starter Ponytail",
    tagline: "The gateway to big hair energy.",
    price: "$99.99",
    bundles: "150g Density",
    vibe:
      "Practice-ready but still cute. This is for girls stepping into bold hair without committing to full stadium hair.",
    why: [
      "Perfect for practice + younger athletes",
      "Easy everyday competition look",
      "Best entry-level price point",
      "Builds confidence before upgrading",
    ],
    specs: [
      "10 inches",
      "Light-medium density",
      "Soft wave or sleek straight",
      "Secure wrap + hidden comb",
      "Smooth finish with slight shine",
    ],
    color: "bg-[#0052cc]",
    icon: <Sparkles size={18} />,
    image: "/ponytails/rookie.jpg",
    href: "/shop/rookie",
  },
  {
    name: "The Varsity",
    subtitle: "Mid-Level Ponytail",
    tagline: "Competition-ready volume.",
    price: "$159.99",
    bundles: "200g Density",
    vibe:
      "This pony moves. You see it from the sidelines, on video, and under lights.",
    why: [
      "Perfect volume for competitions",
      "Big enough for layered bows",
      "High movement + bounce",
      "Likely bestseller for teams",
    ],
    specs: [
      "14 inches",
      "Medium-full density",
      "Defined waves or loose curls",
      "Reinforced wrap + double comb",
      "High shine finish",
    ],
    color: "bg-[#ff0a8a]",
    icon: <Star size={18} />,
    image: "/ponytails/varsity.jpg",
    href: "/shop/varsity",
  },
  {
    name: "The Elite",
    subtitle: "Big Hair Ponytail",
    tagline: "No blending in. Ever.",
    price: "$179.99",
    bundles: "300g Density",
    vibe:
      "This is for the girl who wants people to talk. The pony that turns stunts into slow-motion moments.",
    why: [
      "Statement piece energy",
      "Maximum fullness + drama",
      "Luxury stage-ready finish",
      "Built for visibility under lights",
    ],
    specs: [
      "18 inches",
      "Extra full dramatic density",
      "Bold curls or glam waves",
      "Heavy-duty wrap + anchor comb",
      "Glossy stage-ready finish",
    ],
    color: "bg-[#E8FF00]",
    icon: <Crown size={18} />,
    image: "/ponytails/elite.jpg",
    href: "/shop/elite",
  },
];

export default function PonytailCollectionPage() {
  return (
    <main className="bg-black text-white">

      {/* ========================================================= */}
      {/* HEADER + PRODUCT CARDS */}
      {/* ========================================================= */}

      <section className="bg-[#0057d8] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/80">
              LilyLocks Ponytail Collection
            </p>

            <h1 className="heading-font mt-4 text-4xl uppercase md:text-6xl">
              Competition Ponytails
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg md:text-2xl">
              From first practice to championship finals, LilyLocks ponytails
              are designed for volume, bounce, movement, and main character
              energy.
            </p>
          </div>

          {/* ========================================================= */}
          {/* THREE PRODUCT CARDS */}
          {/* ========================================================= */}

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ponytails.map((pony) => (
              <div
                key={pony.name}
                className="
                  group
                  overflow-hidden
                  rounded-[22px]
                  bg-black
                  text-white
                  shadow-xl
                  ring-1
                  ring-white/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >

                {/* Product Image */}
                <Link
                  href={pony.href}
                  className="block"
                >
                  <div className="relative aspect-square overflow-hidden bg-black">
                    <Image
                      src={pony.image}
                      alt={pony.name}
                      fill
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw
                      "
                      className="
                        object-contain
                        transition-transform
                        duration-300
                        group-hover:scale-[1.04]
                      "
                    />
                  </div>
                </Link>

                {/* Product Information */}
                <div className="px-5 pb-6 pt-5 text-center">

                  {/* Product Type */}
                  <div
                    className={`mx-auto inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide ${
                      pony.color === "bg-[#E8FF00]"
                        ? `${pony.color} text-black`
                        : `${pony.color} text-white`
                    }`}
                  >
                    {pony.icon}
                    {pony.subtitle}
                  </div>

                  <h2 className="heading-font mt-4 text-2xl uppercase leading-tight text-white">
                    {pony.name}
                  </h2>

                  <p className="mt-2 text-sm text-white/60">
                    {pony.tagline}
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    {pony.price}
                  </p>

                  <p className="mt-1 text-sm font-medium text-white/50">
                    {pony.bundles}
                  </p>

                  {/* Shop Ponytail */}
                  <Link
                    href={pony.href}
                    className="
                      mt-4
                      inline-flex
                      min-h-[46px]
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E8FF00]
                      px-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-wide
                      text-black
                      transition
                      hover:bg-[#dfff00]
                    "
                  >
                    Shop Ponytail
                    <ArrowRight className="ml-2" size={16} />
                  </Link>

                  {/* Team Order */}
                  <Link
                    href="/team-partnership/#team-order"
                    className="
                      mt-3
                      inline-flex
                      min-h-[46px]
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      border-2
                      border-white/20
                      bg-transparent
                      px-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-wide
                      text-white
                      transition
                      hover:border-white
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    Request Team Order
                    <ArrowRight className="ml-2" size={16} />
                  </Link>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* PONYTAIL DETAILS */}
      {/* ========================================================= */}

      <section className="bg-black px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
              Find Your Fit
            </p>

            <h2 className="heading-font mt-4 text-4xl uppercase md:text-6xl">
              Choose Your Pony
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
              Three levels of volume. One goal: make your competition look
              unforgettable.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {ponytails.map((pony) => (
              <div
                key={`${pony.name}-details`}
                className="
                  rounded-[30px]
                  bg-[#111111]
                  p-8
                  text-white
                  shadow-xl
                  ring-1
                  ring-white/10
                "
              >

                <h3 className="heading-font text-3xl uppercase">
                  {pony.name}
                </h3>

                <p className="mt-2 font-semibold text-[#ff0a8a]">
                  {pony.tagline}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-3xl font-black">
                    {pony.price}
                  </span>

                  <span className="text-sm text-white/40">
                    {pony.bundles}
                  </span>
                </div>

                {/* Vibe */}
                <div className="mt-8 rounded-[22px] bg-white/5 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8FF00]">
                    The Vibe
                  </p>

                  <p className="mt-3 leading-relaxed text-white/75">
                    {pony.vibe}
                  </p>
                </div>

                {/* Specs */}
                <div className="mt-8">
                  <h4 className="heading-font text-xl uppercase">
                    Specs
                  </h4>

                  <div className="mt-4 space-y-3">
                    {pony.specs.map((spec) => (
                      <div
                        key={spec}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          border
                          border-white/10
                          bg-white/5
                          px-4
                          py-3
                        "
                      >
                        <Check
                          size={17}
                          className="shrink-0 text-[#E8FF00]"
                        />

                        <span className="text-sm text-white/80">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why It Belongs */}
                <div className="mt-8">
                  <h4 className="heading-font text-xl uppercase">
                    Why You'll Love It
                  </h4>

                  <div className="mt-4 space-y-3">
                    {pony.why.map((item) => (
                      <div
                        key={item}
                        className="
                          rounded-xl
                          border
                          border-[#0057d8]/30
                          bg-[#0057d8]/10
                          px-4
                          py-3
                        "
                      >
                        <p className="text-sm font-medium text-white/85">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href={pony.href}
                  className="
                    mt-8
                    inline-flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#ff0a8a]
                    px-6
                    py-4
                    font-bold
                    text-white
                    transition
                    hover:scale-[1.02]
                  "
                >
                  Shop {pony.name}
                  <ArrowRight size={18} />
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* TEAM ORDERS */}
      {/* ========================================================= */}

      <section className="bg-[#0057d8] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[30px] bg-black shadow-2xl">

            {/* Header */}
            <div className="px-6 py-12 text-center sm:px-10">

              <span className="heading-font inline-block rounded-full bg-[#ff0a8a] px-4 py-2 text-sm uppercase text-white">
                Schools • Teams • Programs
              </span>

              <h2 className="heading-font mt-6 text-3xl uppercase md:text-5xl">
                Ordering for Your Entire Team?
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/65">
                We offer team pricing for schools, gyms, All Star programs,
                colleges, and competitive cheer teams. Outfit your athletes
                with matching ponytails designed for the competition floor.
              </p>

              <Link
                href="/team-partnership/#team-order"
                className="
                  mt-8
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#E8FF00]
                  px-9
                  py-4
                  font-bold
                  uppercase
                  tracking-wide
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Start a Team Order
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Benefits */}
            <div className="grid border-t border-white/10 md:grid-cols-3">

              <div className="px-6 py-8 text-center md:border-r md:border-white/10">
                <h3 className="heading-font text-xl uppercase">
                  Team Pricing
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Get competitive pricing when ordering ponytails for your
                  entire team or program.
                </p>
              </div>

              <div className="border-t border-white/10 px-6 py-8 text-center md:border-r md:border-t-0 md:border-white/10">
                <h3 className="heading-font text-xl uppercase">
                  Team Matching
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Coordinate your ponytails with team colors, uniforms, bows,
                  and competition looks.
                </p>
              </div>

              <div className="border-t border-white/10 px-6 py-8 text-center md:border-t-0">
                <h3 className="heading-font text-xl uppercase">
                  Easy Ordering
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  Tell us your team size, colors, products, and deadline and
                  we'll help you build your order.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* CHEER BOWS CROSS-SELL */}
      {/* ========================================================= */}

      <section className="bg-black px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-10 overflow-hidden rounded-[30px] bg-[#111111] p-6 ring-1 ring-white/10 md:p-10 lg:grid-cols-2">

            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-[24px] bg-black">
              <Image
                src="/CheerBows.png"
                alt="LilyLocks Cheer Bows"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4 md:p-8"
              />
            </div>

            {/* Copy */}
            <div className="text-white">

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50">
                Complete The Look
              </p>

              <h2 className="heading-font mt-5 text-5xl uppercase leading-[0.85] md:text-7xl">
                Cheer
                <br />
                Bows
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
                Finish your competition look with a LilyLocks cheer bow.
                Made to coordinate with your ponytail, uniform, and team
                colors.
              </p>

              <Link
                href="/cheer-bows"
                className="
                  mt-9
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E8FF00]
                  px-8
                  py-5
                  font-bold
                  text-black
                  transition
                  hover:scale-105
                "
              >
                Shop Cheer Bows
                <ArrowRight size={19} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/60">
          LilyLocks Ponytail Collection
        </p>

        <h2 className="heading-font mt-4 text-5xl uppercase md:text-7xl">
          Built For The
          <br />
          Spotlight
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/80 md:text-2xl">
          Premium cheer ponytails designed for movement, volume, confidence,
          and unforgettable competition moments.
        </p>

        <Link
          href="/team-partnership/#team-order"
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-black
            px-10
            py-5
            text-lg
            font-bold
            text-white
            transition
            hover:scale-105
          "
        >
          Start Team Order
          <ArrowRight size={20} />
        </Link>

      </section>

    </main>
  );
}