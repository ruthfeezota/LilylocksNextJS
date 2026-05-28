"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Users,
  Sparkles,
  Clock3,
  RefreshCcw,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const partnershipBenefits = [
  {
    icon: <Users size={30} />,
    title: "Tiered Bulk Pricing",
    text: "Flexible pricing built around your team size, ordering frequency, and program budget.",
  },

  {
    icon: <Sparkles size={30} />,
    title: "Dedicated Color Matching",
    text: "Consistent shade coordination across your athlete roster for polished team uniformity.",
  },

  {
    icon: <Clock3 size={30} />,
    title: "Competition Turnarounds",
    text: "Production timelines built around showcases, season launches, and nationals deadlines.",
  },

  {
    icon: <RefreshCcw size={30} />,
    title: "Easy Mid-Season Reorders",
    text: "Quick add-on ordering for new athletes, replacements, and emergency reorders.",
  },
];

export default function TeamPartnershipPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/team-partnership/team-partnership-hero.jpg"
          alt="LilyLocks Team Partnership"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
              LilyLocks Partnership Program
            </p>

            <h1 className="heading-font text-5xl uppercase leading-[0.95] md:text-8xl">
              Team Partnership
              <br />
              Program
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Reliable ordering built for growing
              programs, repeat seasons, and
              competition schedules.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold transition hover:scale-105"
              >
                Apply For Partnership
              </a>

              <Link
                href="/team-orders"
                className="rounded-full border border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-black"
              >
                Explore Team Orders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Partnership Benefits
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-white/85">
            We partner with gyms, schools, and
            cheer programs to simplify bulk
            ponytail ordering with consistent
            quality, fast communication, and
            streamlined reorders.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {partnershipBenefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[36px] bg-black p-10"
              >
                <div className="text-[#E8FF00]">
                  {item.icon}
                </div>

                <h3 className="heading-font mt-6 text-3xl uppercase">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PROGRAMS JOIN */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <h2 className="heading-font text-4xl uppercase md:text-6xl">
              Built For
              <br />
              Growing Programs
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85">
              LilyLocks Team Partners receive
              long-term ordering support built
              around seasonal competition needs,
              roster growth, and repeat production.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Reliable team-wide consistency",
                "Priority partnership communication",
                "Simplified repeat ordering",
                "Support for new athlete onboarding",
                "Scalable ordering for expanding programs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={24}
                    className="text-[#E8FF00]"
                  />

                  <p className="text-lg text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[600px] overflow-hidden rounded-[40px]">
            <Image
              src="/team-partnership/team-partnership-side.jpg"
              alt="Team Partnership"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section
        id="apply"
        className="bg-[#ff0a8a] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-[0.15em]">
              <ShieldCheck size={20} />
              Partnership Application
            </div>

            <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
              Apply For
              <br />
              Team Partnership
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/90">
              Tell us more about your gym,
              school, or program and we’ll
              review your application for
              LilyLocks Team Partnership access.
            </p>

            <div className="mt-12 rounded-[36px] bg-black p-8">
              <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
                Partnership Includes
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Bulk pricing support",
                  "Dedicated ordering assistance",
                  "Color matching coordination",
                  "Mid-season reorder flexibility",
                  "Competition schedule planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-[#E8FF00]"
                    />

                    <p className="text-white/80">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[40px] bg-black p-8 md:p-12">
            <h2 className="heading-font text-4xl uppercase md:text-5xl">
              Partnership Application
            </h2>

            <p className="mt-5 text-white/75">
              Complete the form below to start
              your LilyLocks partnership application.
            </p>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <input
                type="text"
                placeholder="Gym / School / Program Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <input
                type="text"
                placeholder="Role / Position"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#ff0a8a]">
                <option>Estimated Athlete Count</option>
                <option>1–15 Athletes</option>
                <option>16–30 Athletes</option>
                <option>31–50 Athletes</option>
                <option>50+ Athletes</option>
              </select>

              <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#ff0a8a]">
                <option>Primary Interest</option>
                <option>Bulk Ponytails</option>
                <option>Bulk Bows</option>
                <option>Color Matching</option>
                <option>Seasonal Ordering</option>
                <option>Full Team Partnership</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us more about your program, timelines, goals, or questions..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
              >
                Submit Partnership Application
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-5xl uppercase md:text-7xl">
          Let’s Build A
          <br />
          Stronger Team Look
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/80 md:text-2xl">
          Premium ponytails, streamlined ordering,
          and partnership support built for
          competition-ready programs.
        </p>

        <Link
          href="/shop"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
        >
          Shop LilyLocks
          <ArrowRight size={20} />
        </Link>
      </section>
    </main>
  );
}