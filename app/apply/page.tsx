
"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  ArrowRight,
  Scissors,
  Heart,
  Home,
  DollarSign,
  CheckCircle2,
  Sparkles,
  MapPin,
} from "lucide-react";

// SAME EMAILJS CREDENTIALS AS YOUR WORKING CONTACT PAGE
const SERVICE_ID = "service_dyzdosm";
const TEMPLATE_ID = "template_brxka7g";
const PUBLIC_KEY = "RWRalKOkRxi315OiP";

// LILYLOCKS PHOTOGRAPHY
const photos = {
  hero: "https://d2779tscntxxsw.cloudfront.net/63c7032f31244.png?quality=85&width=1800",
  ponytails:
    "https://hairbydede.com/cdn/shop/articles/Cre_er-in-Minuten-een-Volle-Lange-Paardenstaart-Hair-by-DEDE-99184486.jpg?v=1742595918",
  bows: "https://theultimatebow.com/cdn/shop/files/QueenofBling_Purple_2048x2048.jpg?v=1755117058",
};

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  // SAME SUBMISSION FORMAT AS CONTACT PAGE
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      formRef.current.reset();

    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Something went wrong. Please try again.");

    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-white/20 bg-[#1d1d1d] px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-[#E8FF00]";

  const responsibilities = [
    {
      number: "01",
      title: "Sew Cheer Ponytails",
      description:
        "Help create premium cheer ponytails using our production instructions.",
    },
    {
      number: "02",
      title: "Make Cheer Bows",
      description:
        "Create cheer bows and accessories for teams and individual customers.",
    },
    {
      number: "03",
      title: "Work From Home",
      description:
        "Complete production assignments from your own workspace.",
    },
    {
      number: "04",
      title: "Get Paid Per Piece",
      description:
        "Receive agreed compensation for each accepted product you complete.",
    },
  ];

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="overflow-hidden bg-[#0052cc]">
        <div className="mx-auto grid max-w-[1600px] items-center lg:grid-cols-2">

          <div className="px-6 py-24 md:px-16 lg:py-32">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/70">
              LilyLocks Production Team
            </p>

            <h1 className="heading-font text-6xl uppercase leading-[0.9] md:text-8xl">
              Sew From
              <br />
              <span className="text-[#E8FF00]">Home.</span>
              <br />
              Get Paid.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Turn your sewing skills into income. Make cheer
              ponytails and bows from your own workspace and
              get paid for every approved piece you produce.
            </p>

            <a
              href="#application"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-9 py-5 text-lg font-bold text-black transition hover:scale-105"
            >
              Apply To Join Our Team
              <ArrowRight size={20} />
            </a>

            <p className="mt-6 text-xs uppercase tracking-widest text-white/60">
              Dallas–Fort Worth Area
            </p>
          </div>

          <div className="relative h-[420px] lg:h-full lg:min-h-[700px]">
            <img
              src={photos.hero}
              alt="Cheerleader wearing a competition ponytail"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-[#ff0a8a] px-5 py-3 text-sm font-bold uppercase tracking-widest">
              <Sparkles size={18} />
              Now Recruiting
            </div>

            <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
              Make It.
              <br />
              Create It.
              <br />
              Get Paid.
            </h2>

            <p className="mt-8 text-xl leading-relaxed text-white/75">
              LilyLocks is a growing cheer hair accessories
              brand specializing in premium ponytails, team
              bows, and accessories for cheerleaders, dance
              teams, gyms, and schools.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/65">
              We're looking for talented makers who enjoy
              sewing, creating beautiful products, and working
              independently from home.
            </p>
          </div>

          <div className="rounded-[35px] bg-[#141414] p-8 md:p-12">

            <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
              The Opportunity
            </h3>

            <div className="mt-10 space-y-8">

              <div className="flex gap-5">
                <MapPin className="shrink-0 text-[#ff0a8a]" size={28} />
                <div>
                  <h4 className="text-xl font-bold">Location</h4>
                  <p className="mt-2 text-white/65">
                    Dallas–Fort Worth area.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Scissors className="shrink-0 text-[#ff0a8a]" size={28} />
                <div>
                  <h4 className="text-xl font-bold">What You'll Make</h4>
                  <p className="mt-2 text-white/65">
                    Cheer ponytails, team bows, and hair accessories.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Home className="shrink-0 text-[#ff0a8a]" size={28} />
                <div>
                  <h4 className="text-xl font-bold">Work From Home</h4>
                  <p className="mt-2 text-white/65">
                    Complete production assignments from your own workspace.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <DollarSign className="shrink-0 text-[#ff0a8a]" size={28} />
                <div>
                  <h4 className="text-xl font-bold">Piece-Rate Pay</h4>
                  <p className="mt-2 text-white/65">
                    Get paid based on accepted products completed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#141414] px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm uppercase tracking-[0.3em] text-[#ff0a8a]">
            What You'll Create
          </p>

          <h2 className="heading-font mt-6 text-5xl uppercase md:text-7xl">
            Made By You.
            <br />
            Worn On The Mat.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="overflow-hidden rounded-[35px] bg-black">
              <div className="relative h-[400px]">
                <img
                  src={photos.ponytails}
                  alt="Ponytail hair extension"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="heading-font text-4xl uppercase">
                  Cheer Ponytails
                </h3>
                <p className="mt-4 leading-relaxed text-white/65">
                  Help assemble and sew premium cheer ponytails
                  for individual athletes and full team orders.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[35px] bg-black">
              <div className="relative h-[400px]">
                <img
                  src={photos.bows}
                  alt="Glitter cheer bow"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="heading-font text-4xl uppercase">
                  Cheer Bows
                </h3>
                <p className="mt-4 leading-relaxed text-white/65">
                  Create cheer bows and team accessories using
                  our product designs and production instructions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES */}
      <section className="bg-[#ff0a8a] px-6 py-24 text-black">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em]">
            The Opportunity
          </p>

          <h2 className="heading-font mt-6 text-5xl uppercase md:text-7xl">
            Grow With LilyLocks.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {responsibilities.map((item) => (
              <div
                key={item.number}
                className="rounded-[30px] bg-black p-8 text-white"
              >
                <span className="heading-font text-4xl text-[#E8FF00]">
                  {item.number}
                </span>

                <h3 className="heading-font mt-8 text-2xl uppercase">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/65">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[#ff0a8a]">
              Simple Production Process
            </p>

            <h2 className="heading-font mt-6 text-5xl uppercase md:text-7xl">
              Your Home.
              <br />
              Your Craft.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Receive Orders", "Get production instructions and assigned quantities."],
              ["02", "Make Products", "Create ponytails and bows from your workspace."],
              ["03", "Quality Review", "Products are reviewed against agreed standards."],
              ["04", "Get Paid", "Receive the agreed rate for accepted products."],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-[30px] border border-white/10 bg-[#141414] p-8"
              >
                <span className="heading-font text-4xl text-[#E8FF00]">
                  {item[0]}
                </span>

                <h3 className="heading-font mt-8 text-2xl uppercase">
                  {item[1]}
                </h3>

                <p className="mt-4 leading-relaxed text-white/60">
                  {item[2]}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section
        id="application"
        className="scroll-mt-10 bg-[#0052cc] px-6 py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>

            <div className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-widest">
              <Scissors size={20} />
              LilyLocks Careers
            </div>

            <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
              Let's Make
              <br />
              Something
              <br />
              <span className="text-[#E8FF00]">Amazing.</span>
            </h2>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/85">
              Interested in joining our production team?
              Complete this short application and tell us
              a little about your sewing experience.
            </p>

            <div className="mt-12 space-y-6">

              <div className="rounded-[28px] bg-black p-7">
                <Home className="text-[#E8FF00]" size={30} />
                <h3 className="heading-font mt-5 text-2xl uppercase">
                  Work From Home
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">
                  Make products from your own workspace in the Dallas–Fort Worth area.
                </p>
              </div>

              <div className="rounded-[28px] bg-black p-7">
                <DollarSign className="text-[#E8FF00]" size={30} />
                <h3 className="heading-font mt-5 text-2xl uppercase">
                  Get Paid Per Piece
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">
                  Compensation is based on completed, accepted production.
                </p>
              </div>

              <div className="rounded-[28px] bg-black p-7">
                <Heart className="text-[#E8FF00]" size={30} />
                <h3 className="heading-font mt-5 text-2xl uppercase">
                  Grow With Us
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">
                  Become part of a growing cheer accessories brand.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="rounded-[40px] bg-black p-8 md:p-12">

            <h2 className="heading-font text-4xl uppercase md:text-5xl">
              Apply Now
            </h2>

            <p className="mt-5 text-white/75">
              Tell us about yourself. We'd love to learn more
              about your sewing experience.
            </p>

            {submitted && (
              <div className="mt-8 rounded-[24px] border border-[#E8FF00] bg-[#E8FF00]/10 p-6 text-center">

                <CheckCircle2
                  className="mx-auto text-[#E8FF00]"
                  size={40}
                />

                <p className="mt-4 font-bold text-[#E8FF00]">
                  🎉 Application received!
                </p>

                <p className="mt-2 text-white/80">
                  Thank you for your interest in joining LilyLocks.
                  We've received your application and will be in touch.
                </p>

              </div>
            )}

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* CONTACT INFORMATION */}
              <div>
                <h3 className="heading-font mb-5 text-xl uppercase text-[#E8FF00]">
                  Your Information
                </h3>

                <div className="space-y-4">

                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    className={inputClass}
                  />

                  <input
                    type="email"
                    name="reply_to"
                    required
                    autoComplete="email"
                    placeholder="Email Address *"
                    className={inputClass}
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={inputClass}
                  />

                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="border-t border-white/10 pt-7">

                <h3 className="heading-font mb-5 text-xl uppercase text-[#E8FF00]">
                  Your Skills
                </h3>

                <label className="mb-3 block text-sm font-semibold text-white/75">
                  How much sewing experience do you have?
                </label>

                <select
                  name="sewing_experience"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="">Select Experience</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Professional</option>
                </select>

                <label className="mb-3 mt-6 block text-sm font-semibold text-white/75">
                  Do you have access to a sewing machine?
                </label>

                <select
                  name="machine_access"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="">Select One</option>
                  <option>Yes, I own one</option>
                  <option>Yes, I have access to one</option>
                  <option>No</option>
                </select>

                <label className="mb-3 mt-6 block text-sm font-semibold text-white/75">
                  What would you be interested in making?
                </label>

                <select
                  name="products"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="">Select Products</option>
                  <option>Cheer Ponytails</option>
                  <option>Cheer Bows</option>
                  <option>Both Ponytails and Bows</option>
                  <option>Open to Learning</option>
                </select>

                <label className="mb-3 mt-6 block text-sm font-semibold text-white/75">
                  How much time could you dedicate to production?
                </label>

                <select
                  name="weekly_capacity"
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="">Select Availability</option>
                  <option>5–10 hours per week</option>
                  <option>10–20 hours per week</option>
                  <option>20+ hours per week</option>
                  <option>Flexible / Depends on orders</option>
                </select>

              </div>

              {/* ADDITIONAL INFORMATION */}
              <div className="border-t border-white/10 pt-7">

                <h3 className="heading-font mb-5 text-xl uppercase text-[#E8FF00]">
                  Tell Us More
                </h3>

                <input
                  type="url"
                  name="portfolio"
                  placeholder="Instagram or Portfolio Link (Optional)"
                  className={inputClass}
                />

                <textarea
                  name="about"
                  rows={4}
                  placeholder="Tell us a little about your sewing experience or yourself"
                  className={`${inputClass} mt-4 resize-y`}
                />

              </div>

              {/* SUBMIT */}
              <div className="border-t border-white/10 pt-7">

                <p className="mb-6 text-sm leading-relaxed text-white/50">
                  Send us your information and we'll be in touch
                  if there's a potential fit.
                </p>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#E8FF00] px-8 py-5 text-lg font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Submitting..." : "Send Application"}
                  <ArrowRight size={22} />
                </button>

              </div>

            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">

        <p className="text-sm font-bold uppercase tracking-[0.3em]">
          LilyLocks
        </p>

        <h2 className="heading-font mt-6 text-5xl uppercase md:text-8xl">
          Built For The
          <br />
          Spotlight.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
          Premium cheer ponytails. Beautiful craftsmanship.
          Made for the teams that take the spotlight.
        </p>

      </section>

    </main>
  );
}
