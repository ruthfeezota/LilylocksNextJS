import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Star,
  Crown,
  Check,
} from "lucide-react";

const ponytails = [
  {
    name: "The Rookie",
    subtitle: "Starter Ponytail",
    tagline: "The gateway to big hair energy.",
    price: "$99.99",
    bundles: "150g Density",
    vibe:
      "Practice-ready but still cute. This is for girls stepping into bold hair without committing to full stadium hair.",
    why: [
      "Perfect for practice + younger athletes",
      "Easy everyday competition look",
      "Best entry-level price point",
      "Builds confidence before upgrading",
    ],
    specs: [
      "10 inches",
      "Light-medium density",
      "Soft wave or sleek straight",
      "Secure wrap + hidden comb",
      "Smooth finish with slight shine",
    ],
    color: "bg-[#0052cc]",
    icon: <Sparkles size={34} />,
    image: "/ponytails/rookie.jpg",
    href: "/shop/rookie",
  },
  {
    name: "The Varsity",
    subtitle: "Mid-Level Ponytail",
    tagline: "Competition-ready volume.",
    price: "$159.99",
    bundles: "200g Density",
    vibe:
      "This pony moves. You see it from the sidelines, on video, and under lights.",
    why: [
      "Perfect volume for competitions",
      "Big enough for layered bows",
      "High movement + bounce",
      "Likely bestseller for teams",
    ],
    specs: [
      "14 inches",
      "Medium-full density",
      "Defined waves or loose curls",
      "Reinforced wrap + double comb",
      "High shine finish",
    ],
    color: "bg-[#ff0a8a]",
    icon: <Star size={34} />,
    image: "/ponytails/varsity.jpg",
    href: "/shop/varsity",
  },
  {
    name: "The Elite",
    subtitle: "Big Hair Ponytail",
    tagline: "No blending in. Ever.",
    price: "$179.99",
    bundles: "300g Density",
    vibe:
      "This is for the girl who wants people to talk. The pony that turns stunts into slow-motion moments.",
    why: [
      "Statement piece energy",
      "Maximum fullness + drama",
      "Luxury stage-ready finish",
      "Built for visibility under lights",
    ],
    specs: [
      "18 inches",
      "Extra full dramatic density",
      "Bold curls or glam waves",
      "Heavy-duty wrap + anchor comb",
      "Glossy stage-ready finish",
    ],
    color: "bg-[#E8FF00]",
    icon: <Crown size={34} />,
    image: "/ponytails/elite.jpg",
    href: "/shop/elite",
  },
];

export default function PonytailCollectionPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-28 md:py-36">
  {/* Background Image */}
  <Image
    src="/hero-cheer6.png"
    alt=""
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />

  {/* Dark / Blue Overlay */}
  <div className="absolute inset-0 bg-black/" />
  <div className="absolute inset-0 bg-black/25" />

  {/* Text */}
  <div className="relative z-10 mx-auto max-w-7xl text-center">
    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/80">
      LilyLocks Ponytail Collection
    </p>

    <h1 className="heading-font text-5xl uppercase leading-[0.95] md:text-8xl">
      Competition Hair
      <br />
      Built To Perform
    </h1>

    <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
      From first practice to championship finals,
      LilyLocks ponytails are designed for volume,
      bounce, movement, and main character energy.
    </p>
  </div>
</section>

      {/* PONYTAILS */}
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-28">
          {ponytails.map((pony, index) => (
            <div
              key={pony.name}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
           {/* IMAGE */}
<div className="relative h-[620px] overflow-hidden rounded-[40px] border border-white/10 bg-neutral-900">
  <Image
    src={pony.image}
    alt={pony.name}
    fill
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
    priority={index === 0}
  />
</div>

              {/* CONTENT */}
              <div>
                <div
                  className={`inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] ${
                    pony.color === "bg-[#E8FF00]"
                      ? `${pony.color} text-black`
                      : `${pony.color} text-white`
                  }`}
                >
                  {pony.icon}
                  {pony.subtitle}
                </div>

                <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
                  {pony.name}
                </h2>

                <p className="mt-5 text-2xl font-semibold text-[#E8FF00]">
                  {pony.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="rounded-full border border-white/15 px-5 py-3">
                    <p className="text-sm uppercase text-white/60">
                      Price
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {pony.price}
                    </p>
                  </div>

                  <div className="rounded-full border border-white/15 px-5 py-3">
                    <p className="text-sm uppercase text-white/60">
                      Hair Included
                    </p>

                    <p className="mt-1 text-xl font-bold">
                      {pony.bundles}
                    </p>
                  </div>
                </div>

                {/* VIBE */}
                <div className="mt-10 rounded-[32px] bg-white/5 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#ff0a8a]">
                    The Vibe
                  </p>

                  <p className="mt-5 text-xl leading-relaxed text-white/90">
                    {pony.vibe}
                  </p>
                </div>

                {/* SPECS */}
                <div className="mt-10">
                  <h3 className="heading-font text-3xl uppercase">
                    Specs
                  </h3>

                  <div className="mt-6 grid gap-4">
                    {pony.specs.map((spec) => (
                      <div
                        key={spec}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                      >
                        <Check
                          size={18}
                          className="shrink-0 text-[#E8FF00]"
                        />

                        <p className="text-white/85">
                          {spec}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WHY IT BELONGS */}
                <div className="mt-10">
                  <h3 className="heading-font text-3xl uppercase">
                    Why It Belongs
                  </h3>

                  <div className="mt-6 grid gap-4">
                    {pony.why.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl bg-[#0052cc]/20 px-5 py-4"
                      >
                        <p className="font-medium text-white/90">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-12">
                  <Link
                    href={pony.href}
                    className="inline-flex items-center gap-3 rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold text-white transition hover:scale-105"
                  >
                    Shop This Ponytail
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="bg-[#0052cc] px-6 py-24" id="team-pricing">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Which Ponytail
            <br />
            Fits Your Energy?
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {ponytails.map((pony) => (
              <div
                key={pony.name}
                className="rounded-[36px] bg-black p-10"
              >
                <h3 className="heading-font text-3xl uppercase">
                  {pony.name}
                </h3>

                <p className="mt-4 text-white/70">
                  {pony.subtitle}
                </p>

                <p className="mt-8 text-5xl font-black">
                  {pony.price}
                </p>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-white/80">
                    {pony.tagline}
                  </p>
                </div>

                <Link
                  href={pony.href}
                  className="mt-8 inline-flex items-center gap-2 text-[#E8FF00] font-bold hover:gap-4 transition-all"
                >
                  View Ponytail
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================
    CHEER BOWS
========================================================= */}
<section className="relative overflow-hidden bg-black px-6 py-24 md:py-32">

  {/* Decorative background */}
  <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#0052cc]" />

  <div className="absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-[#E8FF00]" />


  <div className="relative z-10 mx-auto max-w-7xl">

    <div className="grid items-center gap-12 lg:grid-cols-2">

      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden rounded-[40px] bg-black">

        <Image
          src="/CheerBows.png"
          alt="LilyLocks Cheer Bows"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 md:p-8"
        />

      </div>


      {/* COPY */}
      <div className="text-white">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
          Complete The Look
        </p>

        <h2 className="heading-font mt-5 text-6xl uppercase leading-[0.85] md:text-8xl">
          Cheer
          <br />
          Bows
        </h2>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
          Finish your competition look with a LilyLocks cheer bow.
          Made to coordinate with your ponytail, uniform, and team colors.
        </p>

        <Link
          href="/cheer-bows"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-8 py-5 font-bold text-black transition hover:scale-105"
        >
          Shop Cheer Bows
          <ArrowRight size={19} />
        </Link>

      </div>

    </div>

  </div>

</section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-5xl uppercase md:text-7xl">
          Built For The
          <br />
          Spotlight
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/80 md:text-2xl">
          Premium cheer ponytails designed for
          movement, volume, confidence, and
          unforgettable competition moments.
        </p>

      <Link
  href="/team-partnership/#team-order"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
>
  Start Team Order
  <ArrowRight size={20} />
</Link>
      </section>
    </main>
  );
}