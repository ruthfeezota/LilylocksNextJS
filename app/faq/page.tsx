"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqGroups = [
  {
    title: "Shopping & Products",
    questions: [
      {
        q: "What type of hair are LilyLocks ponytails made from?",
        a: "LilyLocks ponytails are designed for premium wear, fullness, and performance-ready styling with high-quality materials built for cheer and movement.",
      },
      {
        q: "Can I choose different shades?",
        a: "Yes. We offer multiple shade options and custom color matching consultations for teams or athletes needing a closer match.",
      },
      {
        q: "Which ponytail is best for competitions?",
        a: "Our fuller density and higher volume ponytails are ideal for competitions, showcases, and statement looks.",
      },
    ],
  },
  {
    title: "Team Orders",
    questions: [
      {
        q: "Do you offer bulk ordering for cheer teams?",
        a: "Yes. LilyLocks supports bulk team ordering for gyms, schools, coaches, dance teams, and performance groups.",
      },
      {
        q: "Can my full team get matching ponytails?",
        a: "Absolutely. We offer color matching and bulk consistency support for full-team ordering.",
      },
      {
        q: "Do you offer cheer bows too?",
        a: "Yes. Bulk bows, rhinestone bows, spirit bows, and branded options are available for team buyers.",
      },
    ],
  },
  {
    title: "Shipping & Support",
    questions: [
      {
        q: "Do you accept returns?",
        a: "Return policies can vary by product type and customization. Contact us for order-specific support.",
      },
      {
        q: "How long do bulk orders take?",
        a: "Production depends on quantity, customization, and seasonality. Team orders usually require extra lead time.",
      },
      {
        q: "How do I contact LilyLocks?",
        a: "You can contact us through our consultation page or team ordering support channels.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="bg-[#0052cc] px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            Support Center
          </p>

          <h1 className="heading-font mt-6 text-5xl uppercase md:text-7xl leading-tight">
            Frequently
            <br />
            Asked Questions
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
            Everything you need to know about
            LilyLocks ponytails, team orders,
            color matching, shipping, and support.
          </p>
        </div>
      </section>

      {/* FAQ GROUPS */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-20">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="heading-font text-4xl uppercase md:text-5xl text-[#E8FF00]">
                {group.title}
              </h2>

              <div className="mt-10 space-y-5">
                {group.questions.map((item, index) => {
                  const id = `${group.title}-${index}`;
                  const isOpen = openItem === id;

                  return (
                    <div
                      key={id}
                      className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5"
                    >
                      <button
                        onClick={() => toggleFAQ(id)}
                        className="flex w-full items-center justify-between px-8 py-7 text-left"
                      >
                        <span className="text-lg font-semibold md:text-xl">
                          {item.q}
                        </span>

                        <ChevronDown
                          size={22}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-[#ff0a8a]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-8 py-6 text-white/80 leading-relaxed text-lg">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STILL NEED HELP */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-black p-12 text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Still Need Help?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Whether you&#39;re ordering for one athlete
            or an entire team, we’re here to help
            you find the perfect match. 
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/color-match"
              className="rounded-full bg-[#E8FF00] px-8 py-4 text-lg font-bold text-black hover:scale-105 transition"
            >
              Color Match Help
            </Link>

            <Link
              href="/team-orders"
              className="rounded-full border border-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-black transition"
            >
              Team Orders
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Ready To Shop
          <br />
          LilyLocks?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
          Explore premium ponytails, cheer bows,
          and team-ready accessories built
          for performance.
        </p>

        <Link
          href="/shop"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition"
        >
          Shop LilyLocks
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}