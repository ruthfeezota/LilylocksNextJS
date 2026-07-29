import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Droplets,
  ShieldCheck,
  Sparkles,
  Wind,
} from "lucide-react";

const careSteps = [
  {
    icon: <Sparkles size={28} />,
    title: "Brush Gently",
    text: "Use a soft brush or wide-tooth comb to gently detangle from ends upward to reduce pulling and shedding.",
  },
  {
    icon: <Droplets size={28} />,
    title: "Wash Carefully",
    text: "Use lightweight product-safe washing methods and avoid harsh buildup that can affect softness and movement.",
  },
  {
    icon: <Wind size={28} />,
    title: "Air Dry Fully",
    text: "Let ponytails dry completely before storing to maintain shape, texture, and bounce.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Store Safely",
    text: "Keep ponytails in clean storage bags or packaging to protect shape and reduce tangling.",
  },
];

const dontDo = [
  "Do not aggressively brush wet hair",
  "Avoid heavy oil buildup",
  "Do not store while damp",
  "Avoid tight twisting or folding",
  "Do not overheat repeatedly",
  "Avoid rough friction during transport",
];

export default function HairCareGuidePage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src="/gallery-2.jpg"
          alt="LilyLocks Hair Care Guide"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
              LilyLocks Care Guide
            </p>

            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Keep Your
              <br />
              Ponytail Looking
              <br />
              Competition Ready
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Learn how to protect volume, softness,
              bounce, and shape so your LilyLocks
              ponytail stays polished wear after wear.
            </p>
          </div>
        </div>
      </section>

      {/* CARE STEPS */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            4 Essential Care Steps
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {careSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-[36px] bg-black p-8"
              >
                <div className="text-[#E8FF00]">
                  {step.icon}
                </div>

                <h3 className="heading-font mt-6 text-3xl uppercase">
                  {step.title}
                </h3>

                <p className="mt-5 text-white/80 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTERCARE */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 items-center">
          {/* Left */}
          <div className="relative h-[520px] overflow-hidden rounded-[40px]">
            <Image
              src="/hero-cheer4.jpg"
              alt="Hair care example"
              fill
              className="object-cover"
            />
          </div>

          {/* Right */}
          <div>
            <h2 className="heading-font text-4xl uppercase md:text-6xl">
              Protect The
              <br />
              Bounce + Fullness
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85">
              Proper care helps maintain density,
              softness, styling shape, and
              competition-day volume.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/80">
              With regular maintenance, LilyLocks
              ponytails stay polished and
              performance-ready longer.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT NOT TO DO */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            What To Avoid
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dontDo.map((item) => (
              <div
                key={item}
                className="rounded-[30px] bg-black p-8"
              >
                <p className="font-semibold text-lg text-[#E8FF00]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CARE */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0052cc] p-12 text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Caring For
            <br />
            Full Team Orders
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Coaches and gyms should store
            ponytails separately, label by athlete,
            and keep sets protected between
            practices, travel, and competitions.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Need A Fresh
          <br />
          Competition Look?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
          Explore premium ponytails, color
          matching, and team-ready styles
          built for athletes.
        </p>

        <Link
          href="https://lilylocksshop.square.site/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition"
        >
          Shop LilyLocks
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}