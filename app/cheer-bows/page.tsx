"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CheerBowsComingSoon() {
  return (
    <section className="bg-[#0057d8] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="heading-font text-center text-3xl uppercase md:text-5xl">
          Custom Cheer Bows
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg md:text-2xl">
          Competition-quality custom cheer bows designed for gyms, schools, and
          All Star programs.
        </p>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-[0.95fr_1.25fr]">
          {/* Left Image */}
          <div className="rounded-[28px] bg-[#ff0a8a] p-0 shadow-xl">
            <div className="relative h-[520px] overflow-hidden rounded-[28px]">
              <Image
                src="/cheerbows.jpg"
                alt="Custom Cheer Bow"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="heading-font inline-block rounded-full bg-[#E8FF00] px-5 py-2 text-lg uppercase text-black">
              Coming Soon
            </span>

            <h3 className="heading-font mt-8 text-4xl uppercase leading-tight md:text-5xl">
              Bulk Cheer Bow Orders Are Launching Soon
            </h3>

            <p className="mt-8 text-xl leading-relaxed">
              We're expanding LilyLocks to offer premium custom cheer bows for
              gyms, schools, colleges, and All Star programs. Just like our
              ponytails, coaches will be able to place one bulk order or create
              a private team ordering page for parents.
            </p>

            <div className="mt-10 space-y-5 text-xl">
              <p>✔ Fully Custom Team Designs</p>
              <p>✔ Bulk Team Pricing</p>
              <p>✔ Private Team Ordering Pages</p>
              <p>✔ Coach or Parent Ordering Options</p>
              <p>✔ Fast Production for Competition Season</p>
            </div>

            <Link
              href="/contact#contact-form"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#ff0a8a] px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
            >
              Join the Waitlist
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}