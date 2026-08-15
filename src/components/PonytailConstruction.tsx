"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "SECURE HOLD",
    description:
      "A reinforced attachment keeps your ponytail in place through jumps, stunts, tumbling, and every big performance moment.",
  },
  {
    title: "BUILT-IN COMB",
    description:
      "The built-in comb grips your natural hair for extra stability and a confident, no-slip fit.",
  },
  {
    title: "ADJUSTABLE FIT",
    description:
      "Use the drawstring to customize the fit so your ponytail feels secure and comfortable all day.",
  },
];

export default function PonytailInside() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 text-white sm:px-6 sm:py-20 md:py-24">
      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="text-sm font-black text-[#ff0a8a]">
              ✦
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff0a8a]">
              Built To Perform
            </span>

            <span className="text-sm font-black text-[#ff0a8a]">
              ✦
            </span>
          </div>

          <h2 className="font-holtwood text-3xl uppercase leading-tight text-white sm:text-4xl md:text-5xl">
            What's Inside
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
            Big hair deserves a hold that can keep up. See what makes a
            LilyLocks ponytail ready for every jump, stunt, and performance.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr_0.8fr] lg:gap-14">

          {/* Left Features */}
          <div className="order-2 space-y-4 lg:order-1">
            {features.slice(0, 2).map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#ff0a8a]/40 hover:bg-white/[0.07]"
              >
                <h3 className="font-holtwood text-lg uppercase text-white sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Product Image */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-[520px]">

              {/* Soft background circle */}
              <div className="absolute inset-0 rounded-full bg-white/[0.035]" />

              <div className="relative aspect-square overflow-hidden rounded-full">
                <Image
                  src="/Inside_Lilylocks_Ponytail.png"
                  alt="Inside view of LilyLocks competition ponytail"
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-contain p-4 sm:p-6"
                />
              </div>

            </div>
          </div>

          {/* Right Feature + CTA */}
          <div className="order-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-[#ff0a8a]/40 hover:bg-white/[0.07]">
              <h3 className="font-holtwood text-lg uppercase text-white sm:text-xl">
                {features[2].title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {features[2].description}
              </p>
            </div>

            {/* Shopper-focused callout */}
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff0a8a]">
                Made For Movement
              </p>

              <p className="mt-2 text-sm leading-relaxed text-white/55">
                Designed for cheerleaders, dancers, and performers who need
                their hair to stay put without sacrificing comfort.
              </p>

              <Link
                href="/ponytails"
                className="mt-5 inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#ff0a8a] px-7 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff176f]"
              >
                Shop Ponytails
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-12 grid grid-cols-2 gap-3 border-t border-white/10 pt-8 sm:grid-cols-4">
          {[
            "Secure Attachment",
            "Competition Ready",
            "Premium Materials",
            "Made For Movement",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white/[0.03] px-4 py-4 text-center"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/65 sm:text-xs">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}