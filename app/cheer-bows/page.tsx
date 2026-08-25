"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, FileText, PiggyBank, School } from "lucide-react";

const bowProducts = [
  {
    name: "Rhinestone Cheer Bow",
    price: "$19.99",
    image: "/bows/rhinestone-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/rhinestone-cheer-bow/MPLWWVMGMGGMCVJIZ5EXJAG6?cs=true&cst=custom",
  },
  {
    name: "Full Bling AB Crystal Cheer Bow",
    subtitle: "White Rainbow",
    price: "$23.99",
    image: "/bows/full-bling-ab-crystal-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/full-bling-ab-crystal-cheer-bow-white-rainbow-/VJ7YKMIUMCLLFY7SDCOKUEXC?cs=true&cst=custom",
  },
  {
    name: "Pointy Tail AB Crystal Cheer Bow",
    price: "$16.99",
    image: "/bows/pointy-tail-ab-crystal-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/pointy-tail-ab-crystal-cheer-bow-listing/GZJEAMC3RKCYGCXZVKP72PUQ?cs=true&cst=custom",
  },
];

const schoolBenefits = [
  {
    icon: School,
    title: "Schools & Programs Welcome",
    text: "We work with high schools, cheer programs, gyms, colleges, and teams of all sizes.",
  },
  {
    icon: Building2,
    title: "Wholesale Pricing",
    text: "Competitive pricing is available for bulk team and school orders.",
  },
  {
    icon: FileText,
    title: "W-9 Available",
    text: "Need a W-9 for your school or organization? We can provide one upon request.",
  },
  {
    icon: PiggyBank,
    title: "Tax-Exempt Options",
    text: "Tax-exempt ordering is available for eligible organizations. Provide your certificate at the time of order.",
  },
];

export default function CheerBowsSection() {
  return (
    <section className="bg-[#0057d8] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="heading-font text-center text-3xl uppercase md:text-5xl">
          Custom Cheer Bows
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg md:text-2xl">
          Personalized cheer bows designed for athletes, schools, gyms, and
          All Star programs. Choose your colors, add your mascot or athlete
          name, and create a bow that's uniquely yours.
        </p>

        {/* ========================================================= */}
        {/* THREE BOW PRODUCT CARDS */}
        {/* ========================================================= */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {bowProducts.map((product) => (
            <div
              key={product.name}
              className="
                group
                overflow-hidden
                rounded-[22px]
                bg-white
                text-black
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >

              {/* Product Image */}
              <Link
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
                    "
                    className="
                      object-contain
                      p-4
                      transition-transform
                      duration-300
                      group-hover:scale-[1.04]
                    "
                  />
                </div>
              </Link>

              {/* Product Information */}
              <div className="px-5 pb-6 pt-4 text-center">

                <h3 className="heading-font text-xl uppercase leading-tight sm:text-2xl">
                  {product.name}
                </h3>

                {product.subtitle && (
                  <p className="mt-1 text-sm text-gray-600">
                    ({product.subtitle})
                  </p>
                )}

                <p className="mt-2 text-lg font-bold">
                  {product.price}
                </p>

                {/* Shop Bow */}
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Shop Bow
                  <ArrowRight className="ml-2" size={16} />
                </Link>

                {/* Order Bulk */}
                <Link
                  href="/team-orders/#cheer-bows-team-orders"
                  className="
                    mt-3
                    inline-flex
                    min-h-[46px]
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#0057d8]
                    bg-white
                    px-5
                    text-sm
                    font-bold
                    uppercase
                    tracking-wide
                    text-[#0057d8]
                    transition
                    hover:bg-[#0057d8]
                    hover:text-white
                  "
                >
                  Request Team Bow Order
                  <ArrowRight className="ml-2" size={16} />
                </Link>

              </div>
            </div>
          ))}

        </div>

        {/* ========================================================= */}
        {/* FEATURED CUSTOM BOWS */}
        {/* ========================================================= */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Competition Bow */}
          <div className="overflow-hidden rounded-[30px] bg-white text-black shadow-xl">

            <div className="relative h-[360px]">
              <Image
                src="/competition-cheer-bow.jpg"
                alt="Custom Team Glitter Cheer Bow"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">

              <span className="heading-font rounded-full bg-[#ff0a8a] px-4 py-2 text-sm uppercase text-white">
                Best Seller
              </span>

              <h3 className="heading-font mt-6 text-3xl uppercase">
                Custom Team Glitter Cheer Bow
              </h3>

              <p className="mt-5 text-lg text-gray-700">
                Our signature competition bow featuring premium non-flake
                glitter, vibrant team colors, and personalized wording.
                Designed to stand out on the mat while staying secure through
                every stunt and routine.
              </p>

              <ul className="mt-6 space-y-3 text-base">
                <li>✔ Premium Glimmer Glitter</li>
                <li>✔ Personalized Team Text</li>
                <li>✔ Heavy-Duty Hair Band</li>
                <li>✔ Team Color Matching</li>
                <li>✔ Individual & Team Orders</li>
              </ul>

              <Link
                href="https://lilylocksshop.square.site/product/custom-team-glitter-cheer-bow/DXOTKPZKB3DEH4X4Q5LR3L7B?cs=true&cst=custom"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#ff0a8a]
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Buy Competition Bow
                <ArrowRight size={18} />
              </Link>


                <Link
                href="https://lilylocksshop.square.site/product/custom-team-glitter-cheer-bow/DXOTKPZKB3DEH4X4Q5LR3L7B?cs=true&cst=custom"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                 m-1
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  border-2
                  border-[#ff0a8a]
                  px-8
                  py-4
                  font-bold
                  text-[#ff0a8a]
                  transition
                  hover:scale-105
                "
              >
                Request Bulk Order
                <ArrowRight size={18} />
              </Link>



            </div>
          </div>

          {/* Collegiate Bow */}
          <div className="overflow-hidden rounded-[30px] bg-white text-black shadow-xl">

            <div className="relative h-[360px]">
              <Image
                src="/collegiate-cheer-bow.jpg"
                alt="Custom Collegiate Cheer Bow"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">

              <span className="heading-font rounded-full bg-[#E8FF00] px-4 py-2 text-sm uppercase">
                New
              </span>

              <h3 className="heading-font mt-6 text-3xl uppercase">
                Custom Collegiate Cheer Bow
              </h3>

              <p className="mt-5 text-lg text-gray-700">
                A timeless collegiate-style cheer bow that can be customized
                with your team colors, mascot, athlete name, or school logo.
                Perfect for sidelines, pep rallies, and game day.
              </p>

              <ul className="mt-6 space-y-3 text-base">
                <li>✔ Classic Collegiate Style</li>
                <li>✔ Personalized Names & Mascots</li>
                <li>✔ Premium Grosgrain Ribbon</li>
                <li>✔ Durable Elastic Hair Band</li>
                <li>✔ Great for Teams & Individuals</li>
              </ul>

              <Link
                href="https://lilylocksshop.square.site/product/custom-collegiate-cheer-bow/NBQF3GCPA4OCC24XPHWK2CSU?cs=true&cst=custom"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#0057d8]
                  px-8
                  py-4
                  font-bold
                  text-white
                  transition
                  hover:scale-105
                "
              >
                Buy Collegiate Bow
                <ArrowRight size={18} />
              </Link>


              <Link
                href="https://lilylocksshop.square.site/product/custom-collegiate-cheer-bow/NBQF3GCPA4OCC24XPHWK2CSU?cs=true&cst=custom"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  m-1
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  border-2
                  border-[#0057d8]
                  px-8
                  py-4
                  font-bold
                  text-[#0057d8]
                  transition
                  hover:scale-105
                "
              >
                Request Bulk Order
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* SCHOOL & TEAM ORDERS */}
        {/* ========================================================= */}

        <div className="mt-20 overflow-hidden rounded-[30px] bg-white text-black shadow-2xl">

          {/* Header */}
          <div className="px-6 py-10 text-center sm:px-10">

            <span className="heading-font inline-block rounded-full bg-[#ff0a8a] px-4 py-2 text-sm uppercase text-white">
              Schools • Teams • Programs
            </span>

            <h3 className="heading-font mt-6 text-3xl uppercase md:text-4xl">
              Ordering for Your School or Team?
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-black/65">
              LilyLocks proudly works with high schools, cheer programs,
              gyms, colleges, and All Star teams. Whether you need a small
              team order or hundreds of bows, we're here to make the process
              simple.
            </p>

          </div>

          {/* Benefits */}
          <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">

            {schoolBenefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className={`
                    px-6 py-8 text-center
                    ${
                      index !== schoolBenefits.length - 1
                        ? "border-b border-black/10 sm:border-r lg:border-b-0"
                        : ""
                    }
                  `}
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff0a8a]/10 text-[#ff0a8a]">
                    <Icon size={28} strokeWidth={1.8} />
                  </div>

                  <h4 className="heading-font mt-5 text-lg uppercase">
                    {benefit.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-black/65">
                    {benefit.text}
                  </p>

                </div>
              );
            })}

          </div>

          {/* Bulk Order CTA */}
          <div className="border-t border-black/10 bg-[#f8f8f8] px-6 py-10 text-center sm:px-10">

            <h4 className="heading-font text-2xl uppercase md:text-3xl">
              Need a Bulk Order or Have Questions?
            </h4>

            <p className="mx-auto mt-3 max-w-2xl text-base text-black/65">
              Tell us what you're looking for, including your team size,
              colors, customization needs, and deadline. We'll help you
              determine the best option for your program.
            </p>

            <Link
              href="/contact#wholesale-policies"
              className="
                mt-6
                inline-flex
                min-h-[52px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#ff0a8a]
                px-9
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white
                transition
                hover:scale-105
              "
            >
              Bulk Orders & Questions
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM CTA */}
        {/* ========================================================= */}

        <div className="mt-20 text-center">

          <h3 className="heading-font text-3xl uppercase md:text-4xl">
            Ordering for Your Entire Team?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            We offer discounts, team color matching, and personalized bows
            for schools, gyms, colleges, and All Star programs.
          </p>

          <Link
            href="/team-orders#cheer-bows-team-orders"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#E8FF00]
              px-10
              py-5
              text-lg
              font-bold
              text-black
              transition
              hover:scale-105
            "
          >
            Team Bow Orders & Questions
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>
    </section>
  );
}