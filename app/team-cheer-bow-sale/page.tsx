"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, Sparkles, Users } from "lucide-react";

const saleProducts = [
  {
    name: "Custom Team Glitter Cheer Bow",
    oldPrice: "$15.00",
    salePrice: "$9.99",
    savings: "SAVE $5.01",
    image: "/competition-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/custom-team-glitter-cheer-bow/DXOTKPZKB3DEH4X4Q5LR3L7B?cs=true&cst=custom",
    badge: "BEST SELLER",
    description:
      "Our signature competition bow with premium non-flake glitter, team colors, and personalized team wording.",
    features: [
      "Premium non-flake glitter",
      "Custom team colors",
      "Personalized team text",
      "Heavy-duty hair band",
      "Competition-ready design",
    ],
  },
  {
    name: "Custom Collegiate Cheer Bow",
    oldPrice: "$9.99",
    salePrice: "$7.99",
    savings: "SAVE $2.00",
    image: "/collegiate-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/custom-collegiate-cheer-bow/NBQF3GCPA4OCC24XPHWK2CSU?cs=true&cst=custom",
    badge: "TEAM FAVORITE",
    description:
      "A classic collegiate-style bow customized with your school colors, mascot, athlete name, or team details.",
    features: [
      "Classic collegiate style",
      "Custom team colors",
      "Personalized names or mascots",
      "Premium grosgrain ribbon",
      "Durable elastic hair band",
    ],
  },
];

export default function TeamCheerBowSale() {
  return (
    <main className="bg-[#0057d8] text-white">



{/* HERO */}
<section
  className="relative min-h-[620px] overflow-hidden bg-black bg-cover bg-center sm:min-h-[680px] lg:min-h-[700px]"
  style={{
    backgroundImage: "url('/team-cheer-bows/Teamcheerbows13.jpeg')",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55" />

  {/* Blue color wash */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/30" />

  {/* Bottom fade */}
  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

  <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-16 sm:min-h-[680px] sm:px-10 lg:min-h-[700px] lg:px-16">
    <div className="max-w-3xl">

      {/* SALE TAG */}
      <div className="mb-6 inline-flex items-center gap-2 bg-[#ff0a8a] px-5 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg sm:text-sm">
        <Sparkles size={15} />
        Limited-Time Team Bow Sale
      </div>

      {/* MAIN HEADLINE */}
      <h1 className="heading-font text-5xl uppercase leading-[0.86] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
        Custom Team
        <br />
        <span className="text-[#E8FF00]">
          Cheer Bows.
        </span>
      </h1>

      {/* SALE PRICE */}
      <div className="mt-7 flex flex-wrap items-end gap-x-7 gap-y-3">
        <div>
          <p className="mb-0.5 text-[10px] font-black uppercase tracking-[0.18em] text-white/70 sm:text-xs">
            Team Bows Starting At
          </p>

          <div className="flex items-baseline gap-3">
            <span className="heading-font text-6xl leading-none text-[#E8FF00] sm:text-7xl md:text-8xl">
              $7.99
            </span>

            <span className="text-sm font-bold uppercase text-white/50 sm:text-base">
              each
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden h-14 w-px bg-white/30 sm:block" />

        {/* Second price */}
        <div className="pb-1">
          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-white/60">
            Custom Team Glitter Bow
          </p>

          <div className="flex items-baseline gap-2">
            <span className="text-sm font-bold text-white/40 line-through">
              $15
            </span>

            <span className="text-2xl font-black text-white sm:text-3xl">
              $9.99
            </span>
          </div>
        </div>
      </div>

      {/* COPY */}
      <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-white/85 sm:text-lg">
        Get your whole team competition-ready with custom colors,
        personalized designs, and special team pricing.
      </p>

      {/* CTA + SECONDARY */}
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">

        <Link
          href="/team-cheer-bow-sale/#team-bows"
          className="group inline-flex items-center gap-3 bg-[#E8FF00] rounded-full px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-black shadow-xl transition-all duration-200 hover:scale-105 hover:bg-white sm:px-9 sm:py-5"
        >
          Shop the Bow Sale
          <ArrowRight
            size={19}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>

        <span className="text-[10px] font-black uppercase tracking-[0.14em] text-white/60">
          Custom team orders welcome
        </span>
      </div>

    </div>
  </div>

  {/* Bottom sale strip */}
  <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-black/70 px-5 py-3">
    <div className="mx-auto flex max-w-7xl items-center justify-center gap-5 text-center text-[9px] font-black uppercase tracking-[0.16em] text-white sm:gap-8 sm:text-[10px]">
      <span>Custom Team Colors</span>
      <span className="text-[#ff0a8a]">•</span>
      <span>Personalized Designs</span>
      <span className="text-[#ff0a8a]">•</span>
      <span>Competition Ready</span>
      <span className="hidden text-[#ff0a8a] sm:inline">•</span>
      <span className="hidden sm:inline">Bulk Orders</span>
    </div>
  </div>
</section>




      {/* SALE PRODUCTS */}
      <section className="bg-[#f8f8f8] px-6 py-16 text-black sm:py-20" id="team-bows">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#ff0a8a]">
              Team Bow Sale
            </p>

            <h2 className="heading-font mt-3 text-3xl uppercase sm:text-5xl">
              Two Custom Styles. Special Pricing.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-black/60">
              Perfect for cheer teams, gyms, schools, college squads,
              competitions, and team gifts.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {saleProducts.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[30px] bg-white shadow-2xl"
              >
                {/* IMAGE */}
                <Link
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative aspect-square overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* SALE BADGE */}
                    <div className="absolute left-5 top-5 rounded-full bg-[#ff0a8a] px-4 py-2 text-sm font-black uppercase text-white shadow-lg">
                      {product.badge}
                    </div>

                    <div className="absolute right-5 top-5 rounded-full bg-[#E8FF00] px-4 py-2 text-sm font-black uppercase text-black shadow-lg">
                      SALE
                    </div>
                  </div>
                </Link>

                {/* CONTENT */}
                <div className="p-7 sm:p-9">
                  <h3 className="heading-font text-3xl uppercase leading-tight sm:text-4xl">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-black/65 sm:text-lg">
                    {product.description}
                  </p>

                  {/* PRICE */}
                  <div className="mt-7 flex items-end gap-3">
                    <span className="text-lg font-medium text-black/40 line-through">
                      {product.oldPrice}
                    </span>

                    <span className="text-5xl font-black leading-none text-[#ff0a8a]">
                      {product.salePrice}
                    </span>

                    <span className="mb-1 rounded-full bg-[#E8FF00] px-3 py-1 text-xs font-black text-black">
                      {product.savings}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-semibold text-black/50">
                    Special team sale pricing
                  </p>

                  {/* FEATURES */}
                  <ul className="mt-7 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm font-medium sm:text-base"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff0a8a] text-white">
                          <Check size={14} strokeWidth={3} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-7 text-base font-black uppercase tracking-wide text-white transition hover:scale-[1.02] hover:bg-[#e90078]"
                  >
                    Order This Bow
                    <ArrowRight size={19} />
                  </Link>

                  <Link
                    href="/team-orders/#cheer-bows-team-orders"
                    className="mt-3 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border-2 border-[#0057d8] bg-white px-7 text-sm font-black uppercase tracking-wide text-[#0057d8] transition hover:bg-[#0057d8] hover:text-white"
                  >
                    Need a Team Order?
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* ========================================================= */}
{/* TEAM BOW IMAGE GALLERY */}
{/* ========================================================= */}

<section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {[
        "/team-cheer-bows/Teamcheerbows2.jpeg",
        "/team-cheer-bows/Teamcheerbows3.jpeg",
        "/team-cheer-bows/Teamcheerbows5.jpeg",
        "/team-cheer-bows/Teamcheerbows10.jpeg",
        "/team-cheer-bows/Teamcheerbows14.jpeg",
        "/team-cheer-bows/Teamcheerbows7.jpeg",
      ].map((src, index) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden "
        >
          <Image
            src={src}
            alt={`LilyLocks custom cheer bow ${index + 1}`}
            fill
            sizes="
              (max-width: 640px) 50vw,
              (max-width: 1024px) 33vw,
              33vw
            "
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WHY LILYLOCKS */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#E8FF00]">
              Built for Teams
            </p>

            <h2 className="heading-font mt-3 text-3xl uppercase sm:text-5xl">
              Your Team. Your Colors. Your Bow.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
              LilyLocks makes custom cheer accessories for teams that
              want a polished, coordinated look without the hassle.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <div className="rounded-[24px] bg-white p-7 text-center text-black">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff0a8a]/10 text-[#ff0a8a]">
                <Users size={28} />
              </div>

              <h3 className="heading-font mt-5 text-xl uppercase">
                Team Orders
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Ordering for your entire team or gym? We make bulk
                ordering simple.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-7 text-center text-black">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff0a8a]/10 text-[#ff0a8a]">
                <Sparkles size={28} />
              </div>

              <h3 className="heading-font mt-5 text-xl uppercase">
                Custom Designs
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Match your team colors and personalize your bows with
                team names, mascots, or other details.
              </p>
            </div>

            <div className="rounded-[24px] bg-white p-7 text-center text-black">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ff0a8a]/10 text-[#ff0a8a]">
                <Clock size={28} />
              </div>

              <h3 className="heading-font mt-5 text-xl uppercase">
                Limited Sale
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-black/60">
                Lock in the special sale pricing while this team bow
                promotion is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BULK ORDER CTA */}
      <section className="bg-[#ff0a8a] px-6 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-font text-4xl uppercase sm:text-5xl">
            Ordering for Your Whole Team?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Tell us your team size, colors, customization needs, and
            deadline. We can help you plan your bulk bow order.
          </p>

          <Link
            href="/team-orders/#cheer-bows-team-orders"
            className="mt-8 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[#E8FF00] px-9 text-base font-black uppercase tracking-wide text-black transition hover:scale-105"
          >
            Request a Team Bow Order
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      {/* <section className="bg-[#0057d8] px-6 py-14 text-center">
        <h2 className="heading-font text-3xl uppercase sm:text-4xl">
          Custom Bows. Better Team Pricing.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Shop the sale and get your team competition-ready with
          custom LilyLocks cheer bows.
        </p>

        <Link
          href="#team-bows"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#E8FF00] px-8 py-4 font-black uppercase text-black transition hover:scale-105"
        >
          Shop Team Bows
          <ArrowRight size={18} />
        </Link>
      </section> */}



    </main>
  );
}