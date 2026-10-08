"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Trophy, Mail, ArrowUpRight } from "lucide-react";

const shades = [
  { name: "Jet Black", image1: "/color-match/jet_black.png", bestFor: "A classic jet-black shade for a deep, rich, glossy look." },
  { name: "Dark Brown", image1: "/color-match/dark_brown.png", bestFor: "A deep brunette shade for naturally dark brown hair." },
  { name: "Medium Brown", image1: "/color-match/medium_brown.png", bestFor: "A natural medium brown shade for classic brunette tones." },
  { name: "Ash Brown", image1: "/color-match/ash_brown.png", bestFor: "A cool-toned brown with ashy undertones for a more muted brunette look." },
  { name: "Honey Brown", image1: "/color-match/honey_brown.png", bestFor: "A warm brown shade with golden undertones for dimensional brunette hair." },
  { name: "Dark Blonde", image1: "/color-match/dark_blonde.png", bestFor: "A darker blonde shade for dark blonde and lighter brunette hair." },
  { name: "Honey Blonde", image1: "/color-match/honey_blonde.png", bestFor: "A warm blonde shade with rich golden undertones." },
  { name: "Ash Blonde", image1: "/color-match/ash_blonde.png", bestFor: "A cool blonde shade with muted, ashy undertones." },
  { name: "Beige Blonde", image1: "/color-match/beige_blonde.png", bestFor: "A balanced, neutral blonde shade with soft beige undertones." },
  { name: "Platinum Blonde", image1: "/color-match/platinum_blonde.png", bestFor: "A very light blonde shade for bright, icy blonde hair." },
];

const approvedPonytail = {
  name: 'Capital Cheer 16"',
  subtitle: "Team Competition Ponytail",
  image: "/teams/CapitalCheer/16inPonytailLilylocks.png",
  length: "16 Inches",
  bunOptions: "Small / Medium / Large",
  tease: "Medium Tease",
  style: "Curly Units",
  vibe: "Capital Cheer-approved competition styling.",
  link: "https://lilylocksshop.square.site/product/the-varsity-pro-16-cheerleading-ponytail/EUJRQVY6V6PAU37BA5Q4J6GK",
};

const requirements = [
  { label: "Approved Length", value: "16 Inches" },
  { label: "Bun Options", value: "Small / Medium / Large" },
  { label: "Tease", value: "Medium Tease" },
  { label: "Style", value: "Curly Units" },
];

export default function TeamPage() {
  return (
    <main className="overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[680px] overflow-hidden md:min-h-[760px]">
        <Image
          src="/teams/CapitalCheer/CapitalCheer10.png"
          alt="Capital Cheer athletes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-20 sm:px-8 md:min-h-[760px]">
          <div className="max-w-2xl">
            <Image
              src="/teams/CapitalCheer/CapitalCheerLogo.png"
              alt="Capital Cheer logo"
              width={150}
              height={150}
              className="mb-8 rounded-full bg-black/80 p-2 ring-1 ring-white/20 sm:h-[170px] sm:w-[170px]"
            />
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#E8FF00]">
              Official Team Ordering
            </p>
            <h1 className="heading-font text-5xl uppercase leading-[0.95] sm:text-6xl md:text-8xl">
              Capital <span className="text-[#ff0a8a]">Cheer</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/85 sm:text-xl">
              Official LilyLocks ordering page for Capital Cheer athletes and parents. Review the team-approved ponytail requirements and ordering details below.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={approvedPonytail.link}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold text-white transition hover:scale-[1.03] hover:bg-[#e90079]"
              >
                Order Approved Ponytail <ArrowUpRight size={18} />
              </Link>
              <Link
                href="#requirements"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-8 py-4 font-bold text-white transition hover:border-[#E8FF00] hover:text-[#E8FF00]"
              >
                View Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK REQUIREMENTS STRIP */}
      <section id="requirements" className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8">
        <div className="grid overflow-hidden rounded-[28px] shadow-2xl sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map((item, index) => (
            <div key={item.label} className={`p-6 sm:p-7 ${index !== 0 ? "border-white/10 sm:border-l" : ""} ${index > 1 ? "lg:border-l" : ""}`}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E8FF00]">{item.label}</p>
              <p className="mt-2 text-lg font-semibold sm:text-xl">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT TEAM */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] sm:min-h-[500px]">
            <Image
              src="/teams/CapitalCheer/CapitalCheer8.png"
              alt="Capital Cheer team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              Strong Body. Strong Mind. Strong Self.
            </div>
          </div>

          <div className="lg:py-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#ff0a8a]">The Team Behind the Look</p>
            <h2 className="heading-font text-4xl uppercase leading-tight sm:text-5xl md:text-6xl">About the <span className="text-[#0052cc]">Team</span></h2>
            <p className="mt-7 text-base leading-8 text-white/75 sm:text-lg">
              Capital Cheer All Stars Booster Club (CCABC) is a 501 (c) (3) organization, ran by cheer parents who volunteer their time and talents in supporting Capital Cheer athletes. Your donations are tax deductible and go directly to the activities managed by the Booster Club that help each athlete build a: Strong Body, Strong Mind, Strong Self.
            </p>
            <div className="mt-8 rounded-[24px] border-l-4 border-[#E8FF00] bg-[#111111] p-6 sm:p-8">
              <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">Capital Cheer Mission</h3>
              <p className="mt-3 leading-7 text-white/80">
                Our mission is to empower athletes to reach their highest potential while building confidence, discipline, and lifelong friendships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROVED PONYTAIL PRODUCT */}
      <section className="bg-[#0052cc] px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#E8FF00]">Made for Your Team</p>
            <h2 className="heading-font text-4xl uppercase leading-tight sm:text-5xl md:text-6xl">Capital Cheer Approved Ponytail</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Capital Cheer athletes should order the team&apos;s approved 16-inch ponytail with the required bun and styling options below.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-[30px] bg-black text-white shadow-2xl md:grid-cols-2">
            <div className="relative min-h-[380px] bg-white/5 sm:min-h-[540px]">
              <Image
                src={approvedPonytail.image}
                alt={approvedPonytail.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-5 sm:p-8"
              />
              <div className="absolute left-5 top-5 rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-black">
                Team Approved
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ff0a8a]">{approvedPonytail.subtitle}</p>
              <h3 className="heading-font mt-3 text-4xl uppercase leading-tight sm:text-5xl">{approvedPonytail.name}</h3>
              <p className="mt-4 leading-7 text-white/70">{approvedPonytail.vibe}</p>

              <div className="mt-8 space-y-0 divide-y divide-white/10 rounded-2xl border border-white/10 px-5">
                {[
                  ["Length", approvedPonytail.length],
                  ["Bun Options", approvedPonytail.bunOptions],
                  ["Tease", approvedPonytail.tease],
                  ["Style", approvedPonytail.style],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-sm text-white/55">{label}</span>
                    <span className="font-semibold sm:text-right">{value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-white/65">
                Important: Athletes should order the Capital Cheer-approved 16-inch ponytail and select the required bun and styling options for a consistent team look.
              </p>
              <Link
                href={approvedPonytail.link}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-7 py-4 font-bold transition hover:scale-[1.02] hover:bg-[#e90079]"
              >
                Order 16&quot; Ponytail <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR MATCH */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#ff0a8a]">Find Your Shade</p>
              <h2 className="heading-font text-4xl uppercase leading-tight sm:text-5xl md:text-6xl">Find the Best Color Match</h2>
            </div>
            <p className="max-w-lg leading-7 text-white/65">Select the shade closest to your athlete&apos;s natural hair color. When in doubt, compare the swatches in natural lighting.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 md:gap-5">
            {shades.map((shade) => (
              <div key={shade.name} className="group overflow-hidden rounded-[22px] border border-white/10 bg-[#101010] transition duration-300 hover:-translate-y-1 hover:border-[#E8FF00]/60">
                <div className="relative aspect-square overflow-hidden bg-white/5">
                  <Image
                    src={shade.image1}
                    alt={`${shade.name} hair color swatch`}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center sm:p-4">
                  <p className="font-semibold">{shade.name}</p>
                  <p className="mt-1 hidden text-xs leading-5 text-white/55 sm:block">{shade.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link href="/color-match" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ff0a8a] px-7 py-3.5 font-bold transition hover:bg-[#ff0a8a]">
              View Full Color Guide <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TEAM GALLERY */}
      <section className="bg-[#ff0a8a] px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-black/70">Team Spirit</p>
            <h2 className="heading-font text-4xl uppercase leading-tight text-white sm:text-5xl md:text-6xl">Team Gallery</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative aspect-[4/5] overflow-hidden rounded-[24px] bg-black/10">
                <Image
                  src={`/teams/CapitalCheer/CapitalCheer${item}.png`}
                  alt={`Capital Cheer team gallery image ${item}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + FINAL CTA */}
      <section className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] bg-[#0052cc] p-8 sm:p-10">
            <Mail size={34} className="text-[#E8FF00]" />
            <h2 className="heading-font mt-5 text-3xl uppercase sm:text-4xl">Questions?</h2>
            <p className="mt-4 max-w-lg leading-7 text-white/85">
              Contact the Capital Cheer coaching staff for questions regarding team requirements and ordering.
            </p>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] bg-[#E8FF00] p-8 text-black sm:p-10 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <Trophy size={34} />
              <h2 className="heading-font mt-5 text-3xl uppercase sm:text-4xl">Ready to Order?</h2>
              <p className="mt-3 max-w-xl leading-7 text-black/75">Purchase your approved competition ponytail before the ordering deadline.</p>
            </div>
            <Link
              href={approvedPonytail.link}
              className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-7 py-4 font-bold text-white transition hover:scale-[1.03] md:mt-0"
            >
              Shop Approved Ponytail <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
