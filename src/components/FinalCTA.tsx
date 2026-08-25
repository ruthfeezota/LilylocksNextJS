import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 text-white sm:py-28">
      {/* Background Image */}
      <Image
        src="/Hero-New-Cheer.jpg"
        alt="Cheer team wearing LilyLocks competition accessories"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-6xl flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm font-black text-[#dfff00]">
            ✦
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-white sm:text-sm">
            Built For Teams
          </span>

          <span className="text-sm font-black text-[#dfff00]">
            ✦
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-holtwood max-w-5xl text-3xl uppercase leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Outfit Your Entire Team
          <br />
          With LilyLocks
        </h2>

        {/* Copy */}
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
          Get your team competition-ready with coordinated
          LilyLocks ponytails and accessories.
        </p>

        {/* Quick Steps */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-3 gap-3 sm:gap-6">

          <div>
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#dfff00] text-sm font-black text-black">
              1
            </div>

            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              Choose Your
              <br className="sm:hidden" /> Colors
            </p>
          </div>

          <div>
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#dfff00] text-sm font-black text-black">
              2
            </div>

            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              Choose Your
              <br className="sm:hidden" /> Ponytails
            </p>
          </div>

          <div>
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#dfff00] text-sm font-black text-black">
              3
            </div>

            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
              We Build Your
              <br className="sm:hidden" /> Team Page
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="/team-partnership/#team-order"
          className="mt-9 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#ff0a8a] px-10 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-[#ff176f] sm:min-h-[60px] sm:px-14 sm:text-base"
        >
          Start Your Team Order
        </a>

        {/* Secondary Link */}
        <a
          href="/team-orders"
          className="mt-4 text-xs font-semibold text-white/75 underline underline-offset-4 transition hover:text-white sm:text-sm"
        >
          Learn more about team orders →
        </a>

      </div>
    </section>
  );
}