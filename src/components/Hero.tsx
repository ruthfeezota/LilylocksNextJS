import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-cheer4.jpg"
        alt="LilyLocks cheer team"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center pt-4 ">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="max-w-6xl">
            {/* Heading */}
            <h1 className="heading-font text-3xl leading-tight uppercase text-white md:text-5xl lg:text-5xl backdrop-blur-xl">
              Custom Ponytails Built For Elite Cheer Teams & Gyms
            </h1>

            {/* Copy */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg backdrop-blur-xl">
              Premium performance ponytails designed for high-intensity
              movement, long competition days, and full-team consistency.
              From youth programs to elite all-star gyms, LilyLocks helps
              athletes perform with confidence and programs look unified.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/ponytails">
              <button className="rounded-full bg-[#ff0a8a] px-8 py-4 font-semibold text-white transition hover:scale-105
              ">
                Shop Ponytails
              </button>
              </a>
              <a href="/contact#contact-form">
              <button className="rounded-full border-2 border-[#ff0a8a] px-8 py-4 font-semibold text-white transition hover:bg-[#ff0a8a]">
                Request a Bulk Quote
              </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}