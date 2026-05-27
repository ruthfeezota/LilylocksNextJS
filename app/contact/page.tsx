"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0052cc] px-6 py-28">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
            Contact LilyLocks
          </p>

          <h1 className="heading-font text-5xl uppercase leading-[0.95] md:text-8xl">
            Let’s Build Your
            <br />
            Perfect Team Look
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
            Whether you’re ordering for one athlete
            or an entire team, we’re here to help
            you create a polished, competition-ready look.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          {/* LEFT INFO */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ff0a8a] px-5 py-3 text-sm font-bold uppercase tracking-[0.15em]">
              <Sparkles size={22} />
              Contact Support
            </div>

            <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
              We’re Here
              <br />
              To Help
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/85">
              Have questions about ponytails,
              color matching, team orders, bows,
              or bulk production? Reach out and
              our team will guide you through it.
            </p>

            {/* Support Cards */}
            <div className="mt-12 grid gap-6">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <Mail
                  size={30}
                  className="text-[#E8FF00]"
                />

                <h3 className="heading-font mt-5 text-3xl uppercase">
                  Email Support
                </h3>

                <p className="mt-4 text-white/80">
                  support@lilylocks.com
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <Users
                  size={30}
                  className="text-[#E8FF00]"
                />

                <h3 className="heading-font mt-5 text-3xl uppercase">
                  Team Orders
                </h3>

                <p className="mt-4 text-white/80">
                  Bulk ordering, custom matching,
                  and gym partnerships available.
                </p>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <ShieldCheck
                  size={30}
                  className="text-[#E8FF00]"
                />

                <h3 className="heading-font mt-5 text-3xl uppercase">
                  Fast Responses
                </h3>

                <p className="mt-4 text-white/80">
                  We aim to respond within
                  1–2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-[40px] bg-[#0052cc] p-8 md:p-12">
            <h2 className="heading-font text-4xl uppercase md:text-5xl">
              Send A Message
            </h2>

            <p className="mt-5 text-white/85">
              Fill out the form below and we’ll
              get back to you shortly.
            </p>

            <form className="mt-10 space-y-6">
              {/* Name */}
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.15em] text-white/70">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.15em] text-white/70">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
                />
              </div>

              {/* Team/Gym */}
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.15em] text-white/70">
                  Team / Gym Name
                </label>

                <input
                  type="text"
                  placeholder="Optional"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.15em] text-white/70">
                  Inquiry Type
                </label>

                <select className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-[#ff0a8a]">
                  <option>General Question</option>
                  <option>Bulk Team Order</option>
                  <option>Color Match Help</option>
                  <option>Shipping Question</option>
                  <option>Product Support</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block text-sm uppercase tracking-[0.15em] text-white/70">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold text-white transition hover:scale-105"
              >
                Send Message
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ LINKS */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Quick Help
          </h2>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "FAQ",
                text: "Find answers to common questions about shipping, team orders, and products.",
                href: "/faq",
              },
              {
                title: "Color Match",
                text: "Need help finding the perfect shade for your athlete or team?",
                href: "/color-match",
              },
              {
                title: "Team Orders",
                text: "Explore bulk ordering options for gyms, schools, and programs.",
                href: "/team-orders",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[36px] bg-black p-10"
              >
                <h3 className="heading-font text-3xl uppercase">
                  {item.title}
                </h3>

                <p className="mt-5 text-white/80 leading-relaxed">
                  {item.text}
                </p>

                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#E8FF00] transition-all hover:gap-4"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-5xl uppercase md:text-7xl">
          Ready To Elevate
          <br />
          Your Team Look?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/80 md:text-2xl">
          Premium ponytails, bows, and
          competition-ready accessories
          built for standout athletes.
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