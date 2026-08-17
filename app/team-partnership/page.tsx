"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  Palette,
  Ruler,
  ShoppingBag,
  Users,
  CheckCircle2,
  Tag,
  Sparkles,
} from "lucide-react";

const orderingSteps = [
  {
    number: "01",
    icon: <Palette size={30} />,
    title: "Order Your Free Color Ring",
    text: "Start by ordering a LilyLocks Competition Ponytail Color Ring featuring our collection of athlete-approved hair colors. This allows your team to find the closest match before placing an order.",
  },
  {
    number: "02",
    icon: <CheckCircle2 size={30} />,
    title: "Match Each Athlete",
    text: "Have each athlete compare the color ring to their natural hair and select the shade that matches best. This helps every ponytail blend beautifully on competition day.",
  },
  {
    number: "03",
    icon: <Ruler size={30} />,
    title: "Choose Your Ponytail Style",
    text: "Select the texture and length that best fits your team's look.",
    bullets: [
      "Straight or Curly",
      '10", 14", or 18" Length',
      "One color or multiple colors for your team",
    ],
  },
  {
    number: "04",
    icon: <Users size={30} />,
    title: "Set Up Your Team Page",
    text: "Once your team has finalized its colors, textures, and lengths, contact LilyLocks. We'll create a dedicated ordering page exclusively for your team and generate a 20% Team Discount Code for eligible orders.",
  },
  {
    number: "05",
    icon: <ShoppingBag size={30} />,
    title: "Your Private Page Goes Live",
    text: "Your personalized team page will feature your approved products, colors, textures, and lengths. Parents simply visit your unique page, select their athlete's color, and check out online using the team discount code.",
  },
  {
    number: "06",
    icon: <Tag size={30} />,
    title: "Choose How Your Team Orders",
    text: "Your program can choose between individual parent orders or one coach-managed bulk order.",
    bullets: [
      "Individual Parent Orders — Parents order directly from your team's page, making payment and sizing easy while eliminating the need for coaches to collect money.",
      "Coach Bulk Order — Submit one bulk order for your entire team, and LilyLocks will manufacture and ship everything together.",
    ],
  },
];

const teamBenefits = [
  "Athlete-by-athlete color matching",
  "Straight or curly ponytail options",
  '10", 14", and 18" lengths',
  "Custom cheer bows",
  "Competition bows",
  "Team hair accessories",
  "Private team ordering page",
  "20% Team Discount Code",
  "Individual parent ordering or one bulk order",
];

export default function TeamPartnershipPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    programName: "",
    role: "",
    athleteCount: "",
    orderingMethod: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    try {
      await emailjs.send(
        "service_dyzdosm",
        "template_5m93isk",
        {
          full_name: formData.fullName,
          email: formData.email,
          program_name: formData.programName,
          role: formData.role,
          athlete_count: formData.athleteCount,
          ordering_method: formData.orderingMethod,
          message: formData.message,
        },
        "RWRalKOkRxi315OiP"
      );

      setSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        programName: "",
        role: "",
        athleteCount: "",
        orderingMethod: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        "There was an error submitting your request. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <main className="bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[85vh] overflow-hidden">

        <Image
          src="/Bulidforteams/Lilylocks_Teams6.jpg"
          alt="LilyLocks Team Ordering Program"
          fill
          priority
          className="object-cover object-top-right"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
              LilyLocks Team Ordering
            </p>

            <h1 className="heading-font text-5xl uppercase leading-[0.95] md:text-8xl">
              Your Team's
              <br />
              Complete
              <br />
              Look.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Competition ponytails, custom cheer bows, and team
              accessories — all coordinated around your team's colors
              and available through one simple ordering system.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#team-setup"
                className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold transition hover:scale-105"
              >
                Set Up Your Team Page
              </a>

              <a
                href="https://lilylocksshop.square.site/product/lilylocks-competition-ponytail-color-ring/CF534WLWJ7QQMDU2ER2CPXYG?cs=true&cst=custom"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-black"
              >
                Order Your Free Color Ring
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="bg-[#0052cc] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-[#E8FF00]">
              Simple Team Ordering
            </p>

            <h2 className="heading-font mt-4 text-4xl uppercase md:text-6xl">
              How It Works
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85">
              From color matching to competition day, LilyLocks makes
              ordering team hair accessories simple, organized, and
              flexible for both coaches and parents.
            </p>

          </div>


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {orderingSteps.map((step) => (

              <div
                key={step.number}
                className="rounded-[36px] bg-black p-8 md:p-10"
              >

                <div className="flex items-start justify-between gap-6">

                  <div className="text-[#E8FF00]">
                    {step.icon}
                  </div>

                  <span className="heading-font text-4xl text-white/20">
                    {step.number}
                  </span>

                </div>

                <h3 className="heading-font mt-6 text-3xl uppercase">
                  {step.title}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  {step.text}
                </p>

                {step.bullets && (
                  <div className="mt-6 space-y-3">

                    {step.bullets.map((bullet) => (

                      <div
                        key={bullet}
                        className="flex items-start gap-3"
                      >

                        <CheckCircle2
                          size={20}
                          className="mt-1 shrink-0 text-[#E8FF00]"
                        />

                        <p className="text-white/80">
                          {bullet}
                        </p>

                      </div>

                    ))}

                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM BENEFITS
      ===================================================== */}

      <section className="bg-black px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-[#ff0a8a]">
              Built For Cheer Teams
            </p>

            <h2 className="heading-font mt-4 text-4xl uppercase md:text-6xl">
              One Team.
              <br />
              One Easy
              <br />
              Ordering System.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85">
              LilyLocks gives your program one simple way to coordinate
              ponytails, bows, and team accessories without making coaches
              collect individual payments or manage every parent's order.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {teamBenefits.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-[#E8FF00]"
                  />

                  <p className="text-white/85">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>


          <div className="relative h-[600px] overflow-hidden rounded-[40px]">

            <Image
              src="/Bulidforteams/Lilylocks_Teams.jpg"
              alt="LilyLocks cheer team"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          COMPLETE YOUR TEAM LOOK
      ===================================================== */}

      <section className="bg-[#0052cc] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm uppercase tracking-[0.25em] text-[#E8FF00]">
              More Than Ponytails
            </p>

            <h2 className="heading-font mt-4 text-4xl uppercase md:text-6xl">
              Complete Your
              <br />
              Team Look
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85">
              Build a coordinated competition look with custom cheer
              bows, competition bows, and team accessories designed
              to complement your team's colors and style.
            </p>

          </div>


          <div className="mt-16 grid gap-8 md:grid-cols-3">

            {/* CUSTOM CHEER BOWS */}

            <div className="rounded-[36px] bg-black p-8 md:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0a8a] text-white">
                <Sparkles size={30} />
              </div>

              <h3 className="heading-font mt-8 text-3xl uppercase">
                Custom Cheer Bows
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Create custom bows that coordinate with your team's
                colors, branding, and competition uniform. Perfect
                for team orders, events, and season launches.
              </p>

            </div>


            {/* COMPETITION BOWS */}

            <div className="rounded-[36px] bg-black p-8 md:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0a8a] text-white">
                <Sparkles size={30} />
              </div>

              <h3 className="heading-font mt-8 text-3xl uppercase">
                Competition Bows
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Add a polished finishing piece to your competition
                look with bows designed to coordinate with your
                team's colors and overall aesthetic.
              </p>

            </div>


            {/* TEAM ACCESSORIES */}

            <div className="rounded-[36px] bg-black p-8 md:p-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0a8a] text-white">
                <Users size={30} />
              </div>

              <h3 className="heading-font mt-8 text-3xl uppercase">
                Team Accessories
              </h3>

              <p className="mt-5 text-lg leading-relaxed text-white/80">
                Coordinate your team with additional hair accessories
                and customized pieces that bring your colors, branding,
                and competition-day look together.
              </p>

            </div>

          </div>


          <div className="mt-12 text-center">

            <p className="mx-auto max-w-2xl text-white/75">
              Interested in adding bows or accessories to your team
              order? Let us know when you set up your team page and
              we'll help you build a coordinated team collection.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM SETUP
      ===================================================== */}

      <section
        id="team-setup"
        className="bg-[#ff0a8a] px-6 py-24"
      >

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-[0.15em]">

              <Users size={20} />

              Team Page Setup

            </div>


            <h2 className="heading-font mt-8 text-5xl uppercase leading-none md:text-7xl">
              Ready To
              <br />
              Set Up
              <br />
              Your Team?
            </h2>


            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/90">
              Once you've matched your athletes' colors and finalized
              your ponytails, bows, or team accessories, send us your
              team information. We'll create your private ordering page
              and provide your 20% Team Discount Code.
            </p>


            <div className="mt-12 rounded-[36px] bg-black p-8">

              <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
                Build Your Team Collection
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  "Competition ponytails in your approved team colors",
                  "Straight or curly textures",
                  '10", 14", and 18" ponytail lengths',
                  "Custom cheer bows",
                  "Competition bows and team accessories",
                  "A private team ordering page",
                  "A 20% Team Discount Code",
                  "Individual parent ordering",
                  "Coach bulk ordering",
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
              Start Your Team Page
            </h2>

            <p className="mt-5 text-white/75">
              Send us your team information and we'll help you get
              your private ordering page set up.
            </p>


            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />


              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />


              <input
                type="text"
                name="programName"
                value={formData.programName}
                onChange={handleChange}
                placeholder="Gym / School / Program Name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />


              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Role / Position"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />


              <select
                name="athleteCount"
                value={formData.athleteCount}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#ff0a8a]"
              >

                <option value="">
                  Estimated Athlete Count
                </option>

                <option value="1–15 Athletes">
                  1–15 Athletes
                </option>

                <option value="16–30 Athletes">
                  16–30 Athletes
                </option>

                <option value="31–50 Athletes">
                  31–50 Athletes
                </option>

                <option value="50+ Athletes">
                  50+ Athletes
                </option>

              </select>


              <select
                name="orderingMethod"
                value={formData.orderingMethod}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-[#ff0a8a]"
              >

                <option value="">
                  Preferred Ordering Method
                </option>

                <option value="Individual Parent Orders">
                  Individual Parent Orders
                </option>

                <option value="Coach Bulk Order">
                  Coach Bulk Order
                </option>

                <option value="Not Sure Yet">
                  Not Sure Yet
                </option>

              </select>


              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your team, preferred colors, ponytail styles, bows, accessories, competition dates, or anything else we should know..."
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
              />


              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-3 rounded-full bg-[#E8FF00] px-8 py-4 text-lg font-bold text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >

                {loading
                  ? "Sending..."
                  : "Set Up My Team Page"}

                <ArrowRight size={20} />

              </button>


              {success && (

                <div className="rounded-2xl border border-[#E8FF00] bg-[#E8FF00]/10 p-4 text-[#E8FF00]">

                  Your team page request has been submitted successfully.
                  A LilyLocks team member will contact you shortly.

                </div>

              )}

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">

        <p className="text-sm font-bold uppercase tracking-[0.25em]">
          Start With Color
        </p>

        <h2 className="heading-font mt-4 text-5xl uppercase md:text-7xl">
          Find Your Team's
          <br />
          Perfect Match
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-black/80 md:text-2xl">
          Order a LilyLocks Competition Ponytail Color Ring first,
          then build your team's personalized collection of ponytails,
          bows, and accessories.
        </p>


        <a
          href="https://lilylocksshop.square.site/product/lilylocks-competition-ponytail-color-ring/CF534WLWJ7QQMDU2ER2CPXYG?cs=true&cst=custom"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
        >

          Order Your Free Color Ring

          <ArrowRight size={20} />

        </a>

      </section>

    </main>
  );
}