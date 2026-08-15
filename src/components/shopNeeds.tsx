"use client";

import Image from "next/image";
import Link from "next/link";

const shopNeeds = [
  {
    title: "Competition Ponytails",
    description:
      '14" and 18" premium ponytails in the perfect shades.',
    image: "/Competitionponytails.png",
    button: "Shop Ponytails",
    href: "/ponytails",
    buttonClass: "bg-[#ff0a8a] hover:bg-[#ff176f]",
  },
  {
    title: "Team Orders",
    description:
      "Bulk pricing, custom team colors, and dedicated team support.",
    image: "/Teamponytailslingup.png",
    button: "Start Team Order",
    href: "/team-orders",
    buttonClass: "bg-[#f7ed00] text-[#111] hover:bg-[#fff52e]",
  },
  {
    title: "Team Accessories",
    description:
      "Complete your look with bows, scrunchies, ties & more.",
    image: "BowsCheer.png",
    button: "Shop Accessories",
    href: "/cheer-bows",
    buttonClass: "bg-[#ff0a8a] hover:bg-[#ff176f]",
  },
];

export default function ShopByNeed() {
  return (
    <section className="w-full overflow-hidden bg-[#2854cf] px-4 py-7 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mb-5 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-black text-[#ff0a8a]">✦</span>

            <h2 className="font-display text-2xl font-black uppercase tracking-wide text-white text-3xl uppercase md:text-5xl font-holtwood">
              Shop By Need
            </h2>

            <span className="text-sm font-black text-[#ff0a8a]">✦</span>
          </div>

          <p className="mt-1 text-[11px] text-white/90 sm:text-[18px]">
            Everything your team needs to look and perform their best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {shopNeeds.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center"
            >
              {/* Product Image */}
<Link
  href={item.href}
  className="group relative mx-auto block aspect-square w-full max-w-[340px] overflow-hidden rounded-full bg-white"
>
  <Image
    src={item.image}
    alt={item.title}
    fill
    sizes="(max-width: 640px) 100vw, 33vw"
    className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
  />
</Link>

              {/* Title */}
              <h3 className="mt-2.5 text-[11px] font-black uppercase tracking-wide text-white sm:text-[18px] font-holtwood">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-1 max-w-[190px] text-[9px] leading-[1.35] text-white/90 sm:text-[15px]">
                {item.description}
              </p>

              {/* CTA */}
              <Link
                href={item.href}
                className={`mt-2.5 inline-flex min-h-[24px] items-center justify-center rounded-full px-5 py-1 text-[13px] text-black transition-colors inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#dfff00] px-7 text-xs font-bold uppercase tracking-wide text-black ${item.buttonClass}`}
              >
                {item.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}