import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 text-white">
      {/* Background Image */}
      <Image
        src="/final-cta-bg.jpg"
        alt="LilyLocks team athletes"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[500px] max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Heading */}
        <h2 className="heading-font max-w-5xl text-3xl uppercase leading-tight md:text-5xl">
          Elevate Your Program’s Look With A Reliable Team Partner
        </h2>

        {/* Copy */}
        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/90 md:text-2xl">
          From youth squads to elite all-star programs, LilyLocks helps
          coaches simplify bulk ordering while giving athletes a polished,
          competition-ready finish.
        </p>

        {/* CTA Button */}
        <a href="https://lilylocksshop.square.site">
        <button className="mt-10 rounded-full bg-[#ff0a8a] px-10 py-5 text-md font-bold text-white transition hover:scale-105 md:px-20 md:py-6 md:text-2xl">
          Start A Bulk Order
        </button>
        </a>
      </div>
    </section>
  );
}