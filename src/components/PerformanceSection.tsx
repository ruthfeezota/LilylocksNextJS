
export default function PerformanceSection() {
  return (
    <section className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-font text-5xl uppercase leading-[0.9] sm:text-6xl md:text-6xl">
            Ponytails Built For
            <br />
            Performance.
          </h2>

          <h3 className="heading-font mt-5 text-xl uppercase text-[#ff0a8a] sm:text-2xl md:text-3xl">
            Designed For Team Uniformity.
          </h3>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
            LilyLocks ponytails are engineered for secure wear,
            lightweight comfort, and high-impact movement. Our
            built-in drawstring and comb system helps anchor the
            ponytail securely to the athlete’s natural hair,
            keeping it snug and in place through every routine.
            Whether it’s practices, game days, or nationals,
            every athlete gets the polished, consistent finish
            your program deserves.
          </p>
        </div>

        {/* Circular Images */}
        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-8 sm:mt-12 md:flex-row md:gap-10">

          {/* Athlete Image */}
          <div className="flex aspect-square w-[min(82vw,480px)] items-center justify-center overflow-hidden rounded-full border-2 border-[#ff0a8a] bg-white md:h-[480px] md:w-[480px]">
            <img
              src="/Performance_lilylocks.jpeg"
              alt="Cheer athlete wearing a LilyLocks ponytail"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Drawstring + Comb Image */}
          <div className="flex aspect-square w-[min(82vw,480px)] items-center justify-center overflow-hidden rounded-full border-2 border-[#dfff00] bg-white md:h-[480px] md:w-[480px]">
            <img
              src="/Inside_Lilylocks_Ponytail.png"
              alt="LilyLocks ponytail drawstring and comb system"
              className="h-full w-full object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

