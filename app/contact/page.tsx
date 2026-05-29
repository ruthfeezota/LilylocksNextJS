"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  Mail,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const faqGroups = [
  {
    title: "Shopping & Products",
    questions: [
      {
        q: "What type of hair are LilyLocks ponytails made from?",
        a: "LilyLocks ponytails are designed for premium wear, fullness, and performance-ready styling.",
      },
      {
        q: "Can I choose different shades?",
        a: "Yes. We offer multiple shades and custom color matching consultations.",
      },
      {
        q: "Which ponytail is best for competitions?",
        a: "Our fuller density ponytails are ideal for competitions and showcases.",
      },
    ],
  },

  {
    title: "Team Orders",
    questions: [
      {
        q: "Do you offer bulk ordering for cheer teams?",
        a: "Yes. We support gyms, schools, dance teams, and large performance groups.",
      },
      {
        q: "Can my team get matching ponytails?",
        a: "Absolutely. We specialize in full-team consistency and color matching.",
      },
      {
        q: "Do you offer bows too?",
        a: "Yes. We offer bulk bows, rhinestones, spirit bows, and branded team styles.",
      },
    ],
  },

  {
    title: "Shipping & Support",
    questions: [
      {
        q: "How long do bulk orders take?",
        a: "Bulk production varies based on quantity and customization requirements.",
      },
      {
        q: "How do I contact LilyLocks?",
        a: "You can use the contact form below for support, team orders, or color matching help.",
      },
    ],
  },
];

export default function ContactPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0052cc] px-6 py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            LilyLocks Support
          </p>

          <h1 className="heading-font text-5xl uppercase leading-[0.95] md:text-8xl">
            Questions,
            <br />
            Support &
            <br />
            Team Help
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
            Find answers, contact support,
            request team help, or ask about
            custom color matching.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-20">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="heading-font text-4xl uppercase text-[#E8FF00] md:text-5xl">
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
                            isOpen
                              ? "rotate-180 text-[#ff0a8a]"
                              : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="border-t border-white/10 px-8 py-6 text-lg leading-relaxed text-white/80">
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

      {/* CONTACT SECTION */}
      <section className="bg-[#ff0a8a] px-6 py-24" id="contact-form">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-[0.15em]">
              <Sparkles size={20} />
              Contact Support
            </div>

            <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
              Still Need
              <br />
              Help?
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/90">
              Reach out for team orders,
              color matching, product support,
              or general LilyLocks questions.
            </p>

            {/* Support Cards */}
            <div className="mt-12 grid gap-6">
              <div className="rounded-[32px] bg-black p-8">
                <Mail
                  size={28}
                  className="text-[#E8FF00]"
                />

                <h3 className="heading-font mt-5 text-3xl uppercase">
                  Email Support
                </h3>

                <p className="mt-4 text-white/75">
                  sales@lilylocks.com
                </p>
              </div>

              <div className="rounded-[32px] bg-black p-8">
                <Users
                  size={28}
                  className="text-[#E8FF00]"
                />

                <h3 className="heading-font mt-5 text-3xl uppercase">
                  Team Orders
                </h3>

                <p className="mt-4 text-white/75">
                  Bulk ordering available for
                  gyms, schools, and coaches.
                </p>
              </div>

              <div className="rounded-[32px] bg-black p-8">
                <ShieldCheck
                  size={28}
                  className="text-[#E8FF00]"
                />

                <h3 className="heading-font mt-5 text-3xl uppercase">
                  Fast Responses
                </h3>

                <p className="mt-4 text-white/75">
                  We aim to respond within
                  1–2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-[40px] bg-black p-8 md:p-12">
            <h2 className="heading-font text-4xl uppercase md:text-5xl">
              Send A Message
            </h2>

            <p className="mt-5 text-white/75">
              Fill out the form below and our
              team will get back to you.
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
                placeholder="Team / Gym Name (Optional)"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#ff0a8a]">
                <option>General Question</option>
                <option>Bulk Team Order</option>
                <option>Color Match Help</option>
                <option>Shipping Support</option>
                <option>Product Support</option>
              </select>

              <textarea
                rows={6}
                placeholder="Tell us how we can help..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
              >
                Send Message
                <ArrowRight size={20} />
              </button>
            </form>
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
          Premium cheer ponytails and
          team accessories designed for
          confidence, movement, and performance.
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