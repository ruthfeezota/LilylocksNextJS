
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WinterSaleBanner() {
  return (
    <section className="relative overflow-hidden bg-[#ff0a8a] px-6 py-14 text-white md:py-20">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[30px] border-white/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[30px] border-white/10" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 text-center md:flex-row md:text-left">
        {/* Sale headline */}
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
            <Sparkles size={14} />
            Black Friday + Cyber Monday
          </div>

          <h2 className="heading-font text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            The Holiday
            <span className="block text-[#E8FF00]">Hair Event</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Your favorite competition styles, now with bigger savings.
            Get 20% off the Elite 18&quot; Ponytail and TwinStar Competition Pigtails.
          </p>
        </div>

        {/* Offer and CTA */}
        <div className="flex w-full max-w-sm flex-col items-center bg-black px-7 py-8 text-center md:w-auto md:min-w-[290px]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
            Take
          </p>

          <p className="heading-font mt-1 text-7xl font-black text-[#E8FF00]">
            20%
          </p>

          <p className="text-lg font-black uppercase tracking-widest">
            Off
          </p>

          <div className="my-5 w-full border-t border-white/20" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Use Code
          </p>

          <p className="mt-2 text-2xl font-black tracking-wider">
            WINTERSEASON
          </p>

          <Link
            href="/sale"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#E8FF00] px-6 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-white"
          >
            Shop The Sale
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
