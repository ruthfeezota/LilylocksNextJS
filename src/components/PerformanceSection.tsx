export default function PerformanceSection() {
  return (
   <section className="bg-black px-6 py-24 text-white">
  <div className="mx-auto max-w-7xl">

    {/* Intro */}
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="heading-font text-5xl uppercase leading-[0.9] md:text-7xl">
        Ponytails Built For
        <br />
        Performance.
      </h2>

      <h3 className="heading-font mt-5 text-2xl uppercase text-[#ff0a8a] md:text-3xl">
        Designed For Team Uniformity.
      </h3>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
        LilyLocks ponytails are engineered for secure wear,
        lightweight comfort, and high-impact movement.
        Whether it’s practices, game days, or nationals,
        every athlete gets the polished, consistent finish
        your program deserves.
      </p>
    </div>

{/* Image */}
<div className="mx-auto mt-12 flex h-[480px] w-[480px] items-center justify-center overflow-hidden rounded-full border-2 border-[#ff0a8a] bg-white md:h-[620px] md:w-[620px]">
  <img
    src="/Performance_lilylocks.jpeg"
    alt="Cheer athlete wearing a LilyLocks ponytail"
    className="h-full w-full object-contain "
  />
</div>

  </div>
</section>
  );
}