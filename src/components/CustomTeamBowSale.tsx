
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CustomTeamBowSale() {
  return (
    <section className="relative overflow-hidden bg-[#ff0a8a] px-5 py-14 sm:px-8 sm:py-20">
      {/* Decorative background */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#E8FF00]/20 blur-3xl" />


      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[28px] bg-black shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">

          {/* IMAGE */}
          <div className="relative min-h-[360px] sm:min-h-[450px] lg:min-h-[560px]">
            <Image
              src="/team-cheer-bows/Teamcheerbows7.jpeg"
              alt="Custom LilyLocks team glitter cheer bow"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/10" />

            {/* Sale badge */}
            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-black shadow-lg">
                <Sparkles size={14} />
                Limited-Time Sale
              </span>
            </div>

            {/* Image text */}
            <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#E8FF00]">
                CUSTOM TEAM BOWS
              </p>

              <h2 className="heading-font max-w-xl text-4xl uppercase leading-[0.9] text-white sm:text-5xl lg:text-6xl">
                Your Team.
                <br />
                Your Colors.
                <br />
                <span className="text-[#E8FF00]">Your Bow.</span>
              </h2>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center bg-black px-7 py-10 text-white sm:px-10 sm:py-12 lg:px-12">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff0a8a]">
              TEAM BOW SALE
            </p>

            <h3 className="heading-font mt-3 text-3xl uppercase leading-[0.95] sm:text-4xl lg:text-5xl">
              Custom Cheer Bows
              <br />
              <span className="text-[#E8FF00]">
                Starting at $7.99
              </span>
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
              Outfit your entire team with custom bows made in your
              colors and personalized with your team name, mascot, or
              design.
            </p>

            {/* PRICING */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white px-4 py-5 text-black">
                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-black/50">
                  Custom Team Glitter Bow
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm text-black/35 line-through">
                    $15
                  </span>

                  <span className="text-3xl font-black text-[#ff0a8a]">
                    $9.99
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-[#E8FF00] px-4 py-5 text-black">
                <p className="text-[9px] font-black uppercase tracking-[0.12em] text-black/60">
                 Custom Collegiate Bow
                </p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-sm text-black/40 line-through">
                    $9.99
                  </span>

                  <span className="text-3xl font-black text-[#ff0a8a]">
                    $7.99
                  </span>
                </div>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mt-7 grid gap-2 text-xs font-bold uppercase tracking-wide text-white/80 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="text-[#E8FF00]">✓</span>
                Custom team colors
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#E8FF00]">✓</span>
                Personalized designs
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#E8FF00]">✓</span>
                Competition ready
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[#E8FF00]">✓</span>
                Team orders welcome
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/team-cheer-bow-sale"
              className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[#E8FF00] px-7 text-sm font-black uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-white sm:w-fit"
            >
              Shop the Bow Sale
              <ArrowRight size={18} />
            </Link>

            <p className="mt-4 text-xs text-white/40">
              Ordering for your whole team? Bulk team orders available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

