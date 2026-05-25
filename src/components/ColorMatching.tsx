import Image from "next/image";

export default function ColorMatching() {
  return (
    <section className="relative overflow-hidden bg-[#ff0a8a] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl text-center relative z-10">
        {/* Heading */}
        <h2 className="heading-font text-3xl uppercase leading-tight md:text-5xl">
          Team Color Matching, Made Simple
        </h2>

        {/* Copy */}
        <p className="mx-auto mt-8 max-w-5xl text-lg leading-snug md:text-3xl">
          Send your roster, athlete photos, or team shade details. Our
          Dallas-based experts help ensure accurate color consistency across
          your full order—so every athlete looks uniform on the mat, field,
          or floor.
        </p>

        {/* CTA */}
        <button className="mt-10 rounded-full bg-[#0057d8] px-10 py-5 text-lg font-semibold text-white transition hover:scale-105 md:px-14 md:text-2xl">
          Start My Team Color Match
        </button>
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute left-8 top-8 h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden">
          <Image
            src="/team-1.jpg"
            alt="Cheer team"
            fill
            className="object-cover"
          />
        </div>

        {/* Top Center */}
        <div className="absolute left-1/2 top-4 h-16 w-16 md:h-20 md:w-20 -translate-x-1/2 rounded-full overflow-hidden">
          <Image
            src="/team-2.jpg"
            alt="Cheer team"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Left Large */}
        <div className="absolute bottom-10 left-10 h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden">
          <Image
            src="/team-3.jpg"
            alt="Cheer team"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Mid Left */}
        <div className="absolute bottom-10 left-[30%] h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden">
          <Image
            src="/team-4.jpg"
            alt="Cheer team"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom Right Large */}
        <div className="absolute bottom-10 right-36 h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden">
          <Image
            src="/team-5.jpg"
            alt="Cheer team"
            fill
            className="object-cover"
          />
        </div>

        {/* Far Right */}
        <div className="absolute bottom-8 right-8 h-20 w-20 md:h-24 md:w-24 rounded-full overflow-hidden">
          <Image
            src="/team-6.jpg"
            alt="Cheer team"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}