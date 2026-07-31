"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

        {/* Products */}
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
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Buy Competition Bow
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
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0057d8] px-8 py-4 font-bold text-white transition hover:scale-105"
              >
                Buy Collegiate Bow
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

          <h3 className="heading-font text-3xl uppercase md:text-4xl">
            Ordering for Your Entire Team?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            We offer bulk discounts, team color matching, and personalized bows
            for schools, gyms, colleges, and All Star programs.
          </p>

          <Link
            href="/team-orders"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
          >
            Team Ordering
            <ArrowRight size={20} />
          </Link>

        </div>

      </div>
    </section>
  );
}