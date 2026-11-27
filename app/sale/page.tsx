import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BlackFridayPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0">
          <Image
            src="/Bulidforteams/Lilylocks_Teams6.jpg"
            alt="LilyLocks competition ponytails"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ff0a8a] px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white">
            <Sparkles size={14} />
            Black Friday & Cyber Monday
          </div>

          <h1 className="heading-font text-5xl font-black uppercase leading-none md:text-8xl">
            The Holiday
            <span className="block text-[#ff0a8a]">Hair Event</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Big hair. Bigger savings. Celebrate Black Friday and Cyber Monday
            with special savings on your favorite LilyLocks competition styles.
          </p>

          <div className="mt-10">
            <Link
              href="#shop-sale"
              className="inline-flex items-center gap-3 bg-[#E8FF00] px-8 py-4 text-sm font-black rounded-full uppercase tracking-widest text-black transition hover:bg-white"
            >
              Shop The Sale
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff0a8a]">
            It's Time to Shine
          </p>

          <h2 className="heading-font mt-4 text-4xl font-black uppercase md:text-6xl">
            Your Competition Season Starts Here
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Whether you're getting ready for competition season, upgrading
            your team's look, or shopping for your next statement style,
            this is the perfect time to save on LilyLocks favorites.
          </p>
        </div>
      </section>

      {/* BLACK FRIDAY + CYBER MONDAY OFFER */}
      <section className="bg-[#ff0a8a] px-6 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">
            Black Friday Meets Cyber Monday
          </p>

          <h2 className="heading-font mt-4 text-4xl font-black uppercase md:text-6xl">
            Take 20% Off
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            Get ready for big hair and bigger savings! Enjoy 20% off our
            Elite 18" Ponytail and TwinStar Competition Pigtails during
            the Black Friday and Cyber Monday holiday event.
          </p>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-white/80">
            Use Code At Checkout
          </p>

          <p className="heading-font mt-3 text-4xl font-black uppercase tracking-widest text-white md:text-6xl">
            WINTERSEASON
          </p>
        </div>
      </section>

      {/* SALE PRODUCTS */}
      <section id="shop-sale" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff0a8a]">
              Limited-Time Holiday Savings
            </p>

            <h2 className="heading-font mt-4 text-4xl font-black uppercase md:text-6xl ">
              Shop The Sale
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {/* ELITE PONYTAIL */}
            <div className="group overflow-hidden bg-[#111]">
              <Link href="https://shop.lilylocks.com/products/elite">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/ponytails/DarkBrown18inlilylocks.png"
                    alt="LilyLocks Elite 18 inch ponytail"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 bg-[#ff0a8a] px-4 py-2 text-xs font-black uppercase tracking-widest">
                    20% Off
                  </span>
                </div>
              </Link>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff0a8a]">
                  The Signature Collection
                </p>

                <h3 className="heading-font mt-3 text-3xl font-black uppercase">
                  Elite™ 18" Ponytail
                </h3>

                <p className="mt-4 leading-relaxed text-white/65">
                  Our signature statement ponytail. Extra-full density,
                  dramatic volume, and a competition-ready finish designed
                  to stand out.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#ff0a8a]">
                    $143.99
                  </span>
                  <span className="text-lg text-white/40 line-through">
                    $179.99
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-[#E8FF00]">
                  You save $36.00
                </p>

                <Link
                  href="https://shop.lilylocks.com/products/elite"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#E8FF00] px-6 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-white"
                >
                  Shop Elite
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* TWINSTAR PIGTAILS */}
            <div className="group overflow-hidden bg-[#111]">
              <Link href="https://shop.lilylocks.com/products/pigtails">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/Bulidforteams/Lilylocks_Teams26.png"
                    alt="LilyLocks TwinStar competition pigtails"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-5 top-5 bg-[#ff0a8a] px-4 py-2 text-xs font-black uppercase tracking-widest">
                    20% Off
                  </span>
                </div>
              </Link>

              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff0a8a]">
                  The Competition Collection
                </p>

                <h3 className="heading-font mt-3 text-3xl font-black uppercase">
                  TwinStar™ Competition Pigtails
                </h3>

                <p className="mt-4 leading-relaxed text-white/65">
                  Two ponytails. Twice the impact. Our competition pigtails
                  bring playful volume and standout style to every performance.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-2xl font-black text-[#ff0a8a]">
                    $111.99
                  </span>
                  <span className="text-lg text-white/40 line-through">
                    $139.99
                  </span>
                </div>

                <p className="mt-2 text-sm font-semibold text-[#E8FF00]">
                  You save $28.00
                </p>

                <Link
                  href="https://shop.lilylocks.com/products/pigtails"
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#E8FF00] px-6 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-white"
                >
                  Shop TwinStar
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MESSAGE */}
      <section className="bg-[#111] px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff0a8a]">
            Made For The Spotlight
          </p>

          <h2 className="heading-font mt-4 text-4xl font-black uppercase md:text-6xl">
            Big Hair. Big Energy.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            At LilyLocks, we believe every athlete deserves to feel confident,
            polished, and competition-ready. From practice to the big stage,
            we're here to help you bring your look to life.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-font text-4xl font-black uppercase md:text-6xl">
            Don't Miss The
            <span className="block text-[#ff0a8a]">Holiday Event</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Shop your favorites and enjoy 20% off with code WINTERSEASON.
            Your next competition look is waiting.
          </p>

          <Link
            href="#shop-sale"
            className="mt-9 inline-flex items-center gap-3 bg-[#E8FF00] px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition hover:bg-white rounded-full"
          >
            Shop The Sale
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}