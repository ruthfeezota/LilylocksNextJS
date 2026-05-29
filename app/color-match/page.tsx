"use client";
import Image from "next/image";

import { useState } from "react";

const shades = [
  {
    name: "Medium Brown",
    image1: "/color-match/MEDIUMBROWNColor.jpg",
    image2: "/color-match/MEDIUMBROWNPonytail.jpg",
    bestFor:
      "A classic warm brunette shade with a natural single-tone finish.",
  },
  {
    name: "Midnight Brown",
    image1: "/color-match/MIDNIGHTBROWNColor.jpg",
    image2: "/color-match/MIDNIGHTBROWNPonytail.jpg",
    bestFor:
      "A deep rich brown, nearly black, perfect for darker brunettes.",
  },
  {
    name: "Reflex Brown",
    image1: "/color-match/REFLEXBROWNColor.jpg",
    image2: "/color-match/REFLEXBROWNPonytail.jpg",
    bestFor:
      "Warm brown with subtle highlights for a naturally dimensional look.",
  },
  {
    name: "Dark Blonde",
    image1: "/color-match/DARKBLONDEColor.jpg",
    image2: "/color-match/DARKBLONDEPonytail.jpg",
    bestFor:
      "Ideal for mousy brown and darker blonde hair tones.",
  },
  {
    name: "Golden Wheat",
    image1: "/color-match/GOLDENWHEATColor.jpg",
    image2: "/color-match/GOLDENWHEATPonytail.jpg",
    bestFor:
      "A beautiful golden blonde blend with natural-looking highlights.",
  },
  {
    name: "Golden Walnut",
    image1: "/color-match/GOLDENWALNUTColor.jpg",
    image2: "/color-match/GOLDENWALNUTPonytail.jpg",
    bestFor:
      "A brunette-blonde blend and one of the most versatile shades.",
  },
  {
    name: "Ebony",
    image1: "/color-match/EBONYColor.jpg",
    image2: "/color-match/EBONYPonytail.jpg",
    bestFor:
      "Classic jet black with a silky, glossy finish.",
  },
  {
    name: "Smoke",
    image1: "/color-match/SMOKEColor.jpg",
    image2: "/color-match/SMOKEPonytail.jpg",
    bestFor:
      "Light brown blended with silver tones for a modern smoky look.",
  },
  {
    name: "Ginger",
    image1: "/color-match/GINGERColor.jpg",
    image2: "/color-match/GINGERPonytail.jpg",
    bestFor:
      "Bright golden-red tones for lighter redheads.",
  },
  {
    name: "Copper",
    image1: "/color-match/COPPERColor.jpg",
    image2: "/color-match/COPPERPonytail.jpg",
    bestFor:
      "Rich auburn and copper tones with bold fiery depth.",
  },
  {
    name: "Auburn",
    image1: "/color-match/AUBURNColor.jpg",
    image2: "/color-match/AUBURNPonytail.jpg",
    bestFor:
      "A rich reddish-brown blend with natural warmth.",
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


{/* ALL COLOR MATCHES */}
<section className="bg-[#0052cc] px-6 py-24">
  <div className="mx-auto max-w-7xl space-y-32">
    {shades.map((shade, index) => {
      const reverse = index % 2 !== 0;

      return (
        <div
          key={shade.name}
          className={`grid items-center gap-14 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
{/* IMAGES */}
<div className="grid grid-cols-2 gap-6 lg:min-h-[450px]">
  <div className="relative h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-[40px] border-4 border-white">
    <Image
      src={shade.image1}
      alt={shade.name}
      fill
      className="object-cover"
    />
  </div>

  <div className="relative h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-[40px] border-4 border-white">
    <Image
      src={shade.image2}
      alt={shade.name}
      fill
      className="object-cover"
    />
  </div>
</div>

          {/* TEXT */}
          <div>
            <h2 className="heading-font text-5xl md:text-7xl uppercase leading-none">
              {shade.name}
            </h2>

            <h3 className="mt-8 text-3xl font-bold text-[#f1ff00]">
              Best For:
            </h3>

            <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/90">
              {shade.bestFor}
            </p>

            <button className="mt-10 rounded-full bg-[#ff0a8a] px-10 py-5 text-xl font-bold transition hover:scale-105">
              Shop This Match
            </button>
          </div>
        </div>
      );
    })}
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