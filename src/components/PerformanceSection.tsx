export default function PerformanceSection() {
  return (
    <section className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="heading-font text-5xl uppercase leading-[0.9] sm:text-6xl md:text-7xl">
            Ponytails Built For
            <br />
            Performance.
          </h2>

          <h3 className="heading-font mt-5 text-xl uppercase text-[#ff0a8a] sm:text-2xl md:text-3xl">
            Designed For Team Uniformity.
          </h3>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/80 sm:mt-8 sm:text-lg md:text-xl">
            LilyLocks ponytails are engineered for secure wear,
            lightweight comfort, and high-impact movement.
            Whether it’s practices, game days, or nationals,
            every athlete gets the polished, consistent finish
            your program deserves.
          </p>
        </div>

        {/* Image */}
        <div className="mx-auto mt-10 flex aspect-square w-[min(90vw,480px)] items-center justify-center overflow-hidden rounded-full border-2 border-[#ff0a8a] bg-white sm:mt-12 md:h-[620px] md:w-[620px]">
          <img
            src="/Performance_lilylocks.jpeg"
            alt="Cheer athlete wearing a LilyLocks ponytail"
            className="h-full w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}