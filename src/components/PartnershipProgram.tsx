const features = [
  "Built For Team Orders: Outfit your athletes with coordinated LilyLocks ponytails and accessories.",
  "Choose The Right Ponytail: Select the style, level, and quantity for your team.",
  "Team-Friendly Ordering: Simple pricing and ordering built for coaches and growing programs.",
  "Easy Reorders: Quickly add athletes or replace ponytails throughout the season.",
];

export default function PartnershipProgram() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="heading-font text-3xl uppercase leading-tight md:text-5xl">
            The LilyLocks Team Partnership Program
          </h2>

          <h3 className="heading-font mx-auto mt-3 max-w-5xl text-xl uppercase leading-tight md:text-2xl">
            Start Your Team Order With LilyLocks
          </h3>

          <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed md:text-2xl">
            Built for coaches who want their athletes competition-ready
            without the stress of coordinating hair for an entire team.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-x-16 gap-y-16 md:grid-cols-2">
          {features.map((feature) => (
            <div key={feature}>
              <p className="text-xl font-bold leading-snug md:text-1xl">
                {feature}
              </p>

              {/* Pink underline accent */}
              <div className="mt-4 h-[3px] w-[70%] bg-[#ff0a8a]" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <a href="/team-partnership#apply">
            <button className="rounded-full bg-[#E8FF00] px-10 py-5 text-xl font-bold text-black transition hover:scale-105 md:px-16 md:py-6 md:text-3xl">
              Learn More About The Team Partnership Program
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}