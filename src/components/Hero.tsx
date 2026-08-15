import Image from "next/image";

const benefits = [
  {
    icon: "✧",
    text: "Full, stage-ready volume",
  },
  {
    icon: "♙",
    text: "Team color matching",
  },
  {
    icon: "◉",
    text: "Secure through every routine",
  },
  {
    icon: "♜",
    text: "Built for repeat performances",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Hero height */}
      <div className="relative min-h-[620px] md:min-h-[650px] lg:h-[650px]">
        
        {/* Background Image */}
        <Image
          src="/Hero-New-Cheer2.jpg"
          alt="Cheer athlete wearing a LilyLocks competition ponytail"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />

        {/* Overall darkening */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Strong left-side gradient for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 via-45% to-black/10" />

        {/* Additional bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full min-h-[620px] max-w-[1400px] items-center px-6 md:min-h-[650px] md:px-10 lg:px-14">
          <div className="w-full max-w-[620px] pt-4 lg:max-w-[590px]">
            
            {/* Heading */}
            <h1 className="heading-font text-[42px] font-holtwood uppercase leading-[0.94] tracking-tight text-white sm:text-[50px] md:text-[58px] lg:text-[62px]">
              The Ponytail
              <br />
              <span className="text-[#ff0a8a]">Your Team</span>
              <br />
              Will Compete In.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[500px] text-sm leading-relaxed text-white/85 sm:text-base">
              Premium competition ponytails made for cheer teams, dancers &
              performance programs.
            </p>

            {/* Benefits */}
            {/* <div className="mt-5 grid max-w-[520px] grid-cols-2 gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center text-lg text-[#ff0a8a]">
                    {benefit.icon}
                  </span>

                  <span className="text-[11px] font-medium leading-tight text-white sm:text-xs">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="/ponytails"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#ff0a8a] px-7 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 hover:scale-[1.03] hover:bg-[#ff2497]"
              >
                Shop Ponytails
              </a>

              <a
                href="/team-orders"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#dfff00] px-7 text-xs font-bold uppercase tracking-wide text-black transition-all duration-200 hover:scale-[1.03] hover:bg-[#edff45]"
              >
                Shop for My Team
              </a>
            </div>

            {/* Trusted By */}
            <div className="mt-6">
              <p className="mb-2 text-[12 px] font-bold uppercase font-holtwood tracking-[0.15em] text-white/60 font-holtwood">
                Trusted by teams across the country
              </p>

              <div className="flex items-center gap-3">
                {/* Replace these with actual team/customer images */}
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-black bg-white/10"
                    >
                      <Image
                        src={`/team-${item}.jpg`}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* <a
                  href="#teams"
                  className="text-[9px] font-bold uppercase tracking-wide text-[#dfff00] transition hover:text-white"
                >
                  See the teams →
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}