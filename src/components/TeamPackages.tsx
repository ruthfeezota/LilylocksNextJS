"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const packages = {
  starter: {
    title: "IDEAL FOR: YOUTH TEAMS, SIDELINE CHEER & DANCE PROGRAMS",
    build:
      "10 inch ponytail with a secure, reinforced drawstring base that is lightweight.",
    description:
      "Designed for programs that need polished team consistency without unnecessary weight.",
    fit: "Lightweight, natural-looking fullness that moves comfortably during practices, sidelines, and game-day routines.",
    bestFor:
      "Youth teams, prep squads, sideline cheer, dance teams.",
    pricing: "Custom quote based on roster size.",
    image: "/starter-program.png",
    link: "/shop/rookie",
  },

  competition: {
    title: "IDEAL FOR: COMPETITIVE TEAMS & ALL-STAR PROGRAMS",
    build:
      "14 inch ponytail with a secure, reinforced drawstring base that is for high-intensity performance.",
    description:
      "Designed for teams performing at showcases, competitions, and nationals.",
    fit: "Fuller body and stronger hold for elevated performance styling.",
    bestFor:
      "All-star gyms, comp teams, travel squads.",
    pricing: "Tiered seasonal pricing available.",
    image: "/competition-program.png",
    link: "/shop/varsity",
  },

  elite: {
    title: "IDEAL FOR: ELITE GYMS & CHAMPIONSHIP PROGRAMS",
    build:
      "18 inch ponytail with a secure, reinforced drawstring base that is designed for main character-level performance and visual impact.",
    description:
      "Luxury-level consistency for premium high-visibility teams.",
    fit: "Maximum fullness and elevated stage presence.",
    bestFor:
      "Elite gyms, national-level teams, premium programs.",
    pricing: "Premium quote based on scale + customization.",
    image: "/elite-program.png",
    link: "/shop/elite",
  },
};

type PackageKey = keyof typeof packages;

export default function TeamPackages() {
  const [activeTab, setActiveTab] = useState<PackageKey>("starter");
  const current = packages[activeTab];

  const tabs: PackageKey[] = ["starter", "competition", "elite"];

  const tabLabels = {
    starter: "The Rookie",
    competition: "The Varsity",
    elite: "The Elite",
  };

  return (
    <section className="bg-[#0057d8] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="heading-font text-center text-3xl uppercase md:text-5xl">
          The LilyLocks Ponytails
        </h2>

        {/* Connected Pill Tabs */}
        <div className="mx-auto mt-8 flex w-full max-w-6xl overflow-hidden rounded-full bg-[#ff0a8a]">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`
                heading-font
                flex-1
                px-4
                py-5
                text-sm
                uppercase
                transition
                md:text-xl
                ${
                  activeTab === tab
                    ? "bg-[#E8FF00] text-black"
                    : "bg-[#ff0a8a] text-white hover:bg-[#ff168f]"
                }
              `}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.95fr_1.25fr]">

          {/* Left Image Block */}
          <div className="rounded-[28px] bg-[#eeb4cf] p-0 shadow-lg">
            <div className="relative h-[520px] w-full overflow-hidden rounded-[28px]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>

            {/* Title */}
            <h3 className="heading-font text-3xl uppercase leading-tight md:text-3xl">
              {current.title}
            </h3>

            {/* Description */}
            <p className="mt-8 text-md leading-snug md:text-[1.5rem]">
              {current.description}
            </p>

            {/* Details */}
            <div className="mt-10 space-y-7 text-lg md:text-2xl">

              <p>
                <span className="font-bold">The Build:</span>{" "}
                {current.build}
              </p>

              <p>
                <span className="font-bold">The Fit:</span>{" "}
                {current.fit}
              </p>

              <p>
                <span className="font-bold">Best For:</span>{" "}
                {current.bestFor}
              </p>

              <p>
                <span className="font-bold">Bulk Pricing:</span>{" "}
                {current.pricing}
              </p>

            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#E8FF00]
                  px-7
                  py-4
                  text-lg
                  font-bold
                  text-black
                  transition-all
                  duration-200
                  hover:gap-5
                  hover:bg-white
                  hover:shadow-lg
                "
              >
                Learn More About {tabLabels[activeTab]}
                <span className="text-xl">→</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}