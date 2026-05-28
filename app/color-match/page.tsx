"use client";

import { useState } from "react";

const shades = [
  {
    name: "Jet Black",
    color: "#0B0B0B",
    bestFor: "Best for deep black ponytails and sleek high-contrast looks.",
  },
  {
    name: "Natural Black",
    color: "#1E1B18",
    bestFor: "Best for softer black hair with natural undertones.",
  },
  {
    name: "Soft Black Brown",
    color: "#2B1D17",
    bestFor: "Great for black-brown blended hair shades.",
  },
  {
    name: "Espresso Brown",
    color: "#3B241A",
    bestFor: "Perfect for rich espresso brunette tones.",
  },
  {
    name: "Dark Chocolate",
    color: "#4B2E22",
    bestFor: "Ideal for dark warm brown shades.",
  },
  {
    name: "Chestnut Brown",
    color: "#6A3F2A",
    bestFor: "Great for medium warm brunette hair.",
  },
  {
    name: "Honey Brown",
    color: "#8B5A2B",
    bestFor: "Perfect for warm honey brown blends.",
  },
  {
    name: "Dirty Blonde",
    color: "#B08D57",
    bestFor: "Best for neutral darker blonde shades.",
  },
  {
    name: "Golden Blonde",
    color: "#D4A95F",
    bestFor: "Perfect for bright golden blonde tones.",
  },
  {
    name: "Platinum Blonde",
    color: "#F2E5C4",
    bestFor: "Best for light icy blonde athletes.",
  },
];

export default function ColorMatchPage() {
  const [selectedShade, setSelectedShade] = useState(shades[0]);

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-black opacity-90" />

        <div className="relative z-10 max-w-5xl">
          <h1 className="heading-font text-5xl md:text-7xl uppercase leading-tight">
            Perfect Team &
            <br />
            Athlete Color Matching
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg md:text-2xl text-white/85 leading-relaxed">
            Choose from 10 LilyLocks shades or request a custom consultation
            for a near-perfect ponytail match.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://shopify.com/66851471426/account">
            <button className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold hover:scale-105 transition">
              Start Group Order
            </button>
            </a>

            <a href="/color-match#color-match-consultation-form">
            <button className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-black transition">
              Ask About Custom Match
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* COLOR SELECTOR */}
      <section className="bg-[#0052cc] px-6 py-24" id="color-match-selector">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl md:text-6xl uppercase">
            Choose Your Shade
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-white/90">
            Click a shade below to preview the match.
          </p>

          {/* Swatches */}
          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
            {shades.map((shade) => (
              <button
                key={shade.name}
                onClick={() => setSelectedShade(shade)}
                className={`rounded-3xl border-4 p-5 transition duration-300 ${
                  selectedShade.name === shade.name
                    ? "border-[#ff0a8a] bg-white/10 shadow-[0_0_25px_#ff0a8a]"
                    : "border-transparent bg-white/5 hover:bg-white/10"
                }`}
              >
                {/* Placeholder photo area */}
                <div
                  className="mx-auto h-24 w-24 rounded-full border-4 border-white"
                  style={{ backgroundColor: shade.color }}
                />

                <p className="mt-4 text-center font-bold">{shade.name}</p>
              </button>
            ))}
          </div>

          {/* Preview */}
          <div className="mt-20 grid items-center gap-12 md:grid-cols-2">
            <div
              className="h-[420px] rounded-[40px] border-4 border-white shadow-2xl"
              style={{ backgroundColor: selectedShade.color }}
            >
              {/* Add real hair image later */}
              <div className="flex h-full items-center justify-center text-center text-white/70 text-xl font-bold">
                Shade Photo Coming Soon
              </div>
            </div>

            <div>
              <h3 className="heading-font text-4xl md:text-5xl uppercase">
                {selectedShade.name}
              </h3>

              <p className="mt-6 text-2xl font-semibold text-[#f1ff00]">
                Best For:
              </p>

              <p className="mt-3 text-lg md:text-xl text-white/90 leading-relaxed">
                {selectedShade.bestFor}
              </p>

              <button className="mt-10 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold hover:scale-105 transition">
                Shop This Match
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section className="bg-[#ff0a8a] px-6 py-24" id="color-match-consultation-form">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-black p-10 md:p-16">
          <h2 className="heading-font text-center text-4xl md:text-6xl uppercase">
            Need A Custom Match?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-white/85">
            Perfect for gyms, coaches, teams, or athletes needing a more exact
            ponytail blend.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <input
              className="rounded-2xl bg-white px-6 py-4 text-black outline-none"
              placeholder="Team / Gym Name"
            />
            <input
              className="rounded-2xl bg-white px-6 py-4 text-black outline-none"
              placeholder="Contact Name"
            />
            <input
              className="rounded-2xl bg-white px-6 py-4 text-black outline-none"
              placeholder="Email"
            />
            <input
              className="rounded-2xl bg-white px-6 py-4 text-black outline-none"
              placeholder="Number of Athletes"
            />
          </div>

          <textarea
            rows={5}
            className="mt-6 w-full rounded-2xl bg-white px-6 py-4 text-black outline-none"
            placeholder="Tell us about your current shade, ponytail reference, or consultation needs..."
          />

          <div className="mt-8 text-center">
            <button className="rounded-full bg-[#f1ff00] px-10 py-4 text-lg font-black text-black hover:scale-105 transition">
              Book My Consultation
            </button>
          </div>
        </div>
      </section>

      {/* WHY LILYLOCKS */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-font text-center text-4xl md:text-6xl uppercase">
            Why Color Matching Matters
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Team Consistency",
                text: "Uniform ponytails across full teams and rosters.",
              },
              {
                title: "Natural Blending",
                text: "Seamless color transitions for realistic wear.",
              },
              {
                title: "Coach Approved",
                text: "Perfect for both bulk orders and single athletes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] border border-white/20 bg-white/5 p-8 text-center"
              >
                <h3 className="heading-font text-3xl uppercase text-[#f1ff00]">
                  {item.title}
                </h3>
                <p className="mt-4 text-white/80 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* FAQ */}
<section className="bg-[#0052cc] px-6 py-24">
  <div className="mx-auto max-w-4xl">
    <h2 className="heading-font text-center text-4xl md:text-6xl uppercase">
      FAQ
    </h2>

    <div className="mt-14 space-y-4">
      {[
        {
          question: "Can I order for just one athlete?",
          answer:
            "Yes! We offer both individual and team orders. Whether you're shopping for one athlete or an entire squad, we’ve got you covered.",
        },
        {
          question: "Do you offer full team matching?",
          answer:
            "Absolutely. We can create coordinated looks for full teams with matching colors, styles, and custom details.",
        },
        {
          question: "Can I request a custom blend?",
          answer:
            "Yes — custom blends are available. We’ll work with you to create a unique formula tailored to your preferences and performance needs.",
        },
        {
          question: "How long does consultation take?",
          answer:
            "Most consultations take around 15–30 minutes depending on the level of customization and team size.",
        },
      ].map((item, index) => (
        <details
          key={index}
          className="group rounded-2xl bg-white/10 transition-all duration-300"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-8 py-6 text-lg font-semibold md:text-xl">
            {item.question}

            <span className="ml-4 text-3xl transition-transform duration-300 group-open:rotate-45">
              +
            </span>
          </summary>

          <div className="px-8 pb-6 pt-0 text-base leading-relaxed text-white/80 md:text-lg">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  </div>
</section>



      {/* FINAL CTA */}
      <section className="bg-[#f1ff00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-4xl md:text-6xl uppercase">
          Ready To Match
          <br />
          Your Perfect Shade?
        </h2>
        <a href="/color-match#color-match-selector">
        <button className="mt-10 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition">
          Start My Color Match
        </button>
        </a>
      </section>
    </main>
  );
}