
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Calendar,
  Trophy,
  Mail,
} from "lucide-react";

const shades = [
    {
    name: "Ebony",
    image1: "/color-match/EBONYColor.jpg",
    image2: "/color-match/EBONYPonytail.jpg",
    bestFor:
      "Classic jet black with a silky, glossy finish.",
  },

  {
    name: "Midnight Brown",
    image1: "/color-match/MIDNIGHTBROWNColor.jpg",
    image2: "/color-match/MIDNIGHTBROWNPonytail.jpg",
    bestFor:
      "A deep rich brown, nearly black, perfect for darker brunettes.",
  },


  {
    name: "Medium Brown",
    image1: "/color-match/MEDIUMBROWNColor.jpg",
    image2: "/color-match/MEDIUMBROWNPonytail.jpg",
    bestFor:
      "A classic warm brunette shade with a natural single-tone finish.",
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


const approvedPonytails = [
 
  {
    name: "The Extra Bounce™",
    subtitle: "Competition Ponytail",
    image: "/competition-program.png",
    price: "$139.99",
    length: "14 Inches",
    bundles: "2 Bundles",
    vibe: "Competition-ready volume.",
    link: "/shop/extra-bounce",
  },
  {
    name: "The Main Character™",
    subtitle: "Big Hair Ponytail",
    image: "/elite-program.png",
    price: "$199.99",
    length: "18 Inches",
    bundles: "3 Bundles",
    vibe: "No blending in. Ever.",
    link: "/shop/main-character",
  },
];



const requirements = [
  {
    title: "Ponytail Placement",
    value: "High Competition Ponytail",
  },
  {
    title: "Required Length",
    value: "16 Inches",
  },
  {
    title: "Teasing",
    value: "Moderate Competition Tease",
  },
  {
    title: "Style",
    value: "Competition Curl",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image
          src="/teams/hero.jpg"
          alt="Team Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
          <div className="max-w-4xl">
            <Image
              src="/teams/logo.png"
              alt="Team Logo"
              width={180}
              height={180}
              className="mb-8 rounded-full bg-white p-3"
            />

            <h1 className="heading-font text-5xl uppercase md:text-7xl">
              Blackwatch Cheer
            </h1>

            <p className="mt-8 max-w-2xl text-xl text-white/85">
              Official LilyLocks ordering page for athletes and parents.
              Review requirements, approved colors, and ordering details
              below.
            </p>

            <Link
              href="/shop"
              className="mt-10 inline-block rounded-full bg-[#ff0a8a] px-10 py-4 font-bold hover:scale-105 transition"
            >
              Order Ponytail
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT TEAM */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div className="relative h-[450px] overflow-hidden rounded-[40px]">
            <Image
              src="/teams/gallery-7.jpg"
              alt="Team"
              fill
              className="object-top object-cover"
            />
          </div>

          <div>
            <h2 className="heading-font text-4xl uppercase md:text-6xl">
              About The Team
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-white/85">
              Blackwatch Cheer is dedicated to developing confident,
              disciplined athletes through teamwork, leadership,
              sportsmanship, and competitive excellence.
            </p>

            <div className="mt-10 rounded-[30px] bg-black p-8">
              <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
                Team Mission
              </h3>

              <p className="mt-4 text-white/80 leading-relaxed">
                Our mission is to empower athletes to reach their
                highest potential while building confidence,
                discipline, and lifelong friendships.
              </p>
            </div>
          </div>
        </div>
      </section>


{/* TEAM ORDERING REQUIREMENTS */}
<section className="bg-[#ff0a8a] px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
      Team Ordering Requirements
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/85">
      Please review the requirements below before placing your order.
      All athletes must follow the team standards for competitions,
      performances, and team events.
    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Approved Ponytail
        </h3>

        <p className="mt-4 text-lg text-white">
          The Extra Bounce™
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Approved Color
        </h3>

        <p className="mt-4 text-lg text-white">
          Color that best matches the athlete&#39;s natural hair color
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Order Deadline
        </h3>

        <p className="mt-4 text-lg text-white">
          July 31, 2026
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Required For
        </h3>

        <p className="mt-4 text-lg text-white">
          All Competition Athletes
        </p>
      </div>
    </div>

    <div className="mt-10 rounded-[32px] border-2 border-[#E8FF00] bg-black p-8 text-center">
      <p className="text-xl font-bold text-[#E8FF00]">
        Important:
      </p>

      <p className="mt-3 text-lg text-white/90">
        Athletes should only purchase the ponytail and color approved
        by the coaching staff to ensure a consistent team appearance.
      </p>
    </div>
  </div>
</section>


{/* APPROVED PONYTAILS */}
<section className="bg-black px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
      Approved Ponytails
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/75">
      Choose the LilyLocks ponytail that best fits your athlete&#39;s needs.
      From practice-ready styles to competition-level volume, every
      ponytail is designed to create a consistent team look. 
    </p>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {approvedPonytails.map((ponytail) => (
        <div
          key={ponytail.name}
          className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5"
        >
          <div className="relative h-[450px]">
            <Image
              src={ponytail.image}
              alt={ponytail.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-8">
            <p className="text-sm uppercase tracking-[3px] text-[#E8FF00]">
              {ponytail.subtitle}
            </p>

            <h3 className="heading-font mt-3 text-4xl uppercase">
              {ponytail.name}
            </h3>

            <p className="mt-5 text-white/80 italic">
              {ponytail.vibe}
            </p>

            <div className="mt-8 space-y-3 text-white/75">
              <p>
                <span className="font-bold text-white">Length:</span>{" "}
                {ponytail.length}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link
                href={ponytail.link}
                className="rounded-full bg-[#ff0a8a] px-6 py-3 font-bold hover:scale-105 transition"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-black px-6 py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
      Find The Best Color Match
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-white/75">
      Select the shade closest to your athlete's natural hair color.
    </p>

    <div className="mt-16 flex flex-wrap justify-center gap-6">
  {shades.map((shade) => (
    <div
      key={shade.name}
      className="group text-center"
    >
      <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/10 transition-all duration-300 group-hover:border-[#E8FF00] group-hover:scale-105 md:h-32 md:w-32">
        <Image
          src={shade.image1}
          alt={shade.name}
          fill
          className="object-cover"
        />
      </div>

      <p className="mt-3 text-sm font-medium md:text-base">
        {shade.name}
      </p>
    </div>
  ))}
</div>

    <div className="mt-12 text-center">
      <Link
        href="/color-match"
        className="inline-flex items-center rounded-full bg-[#ff0a8a] px-8 py-4 font-bold transition hover:scale-105"
      >
        View Full Color Guide
      </Link>
    </div>
  </div>
</section>



      {/* ORDER DEADLINE */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-black p-12 text-center">
          <Calendar
            size={50}
            className="mx-auto text-[#E8FF00]"
          />

          <h2 className="heading-font mt-6 text-4xl uppercase md:text-6xl">
            Important Dates
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-[#E8FF00] font-bold">
                Order Deadline
              </p>
              <p className="mt-2 text-xl">
                July 31, 2026
              </p>
            </div>

            <div>
              <p className="text-[#E8FF00] font-bold">
                First Practice
              </p>
              <p className="mt-2 text-xl">
                September 1, 2026
              </p>
            </div>

            <div>
              <p className="text-[#E8FF00] font-bold">
                Competition Begins
              </p>
              <p className="mt-2 text-xl">
                November 5, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Every Ponytail Includes
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              "Competition Volume",
              "Secure Wrap System",
              "Premium Human Hair",
              "Reusable Design",
              "Heat Resistant Fibers",
              "Coach Approved Style",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-[24px] bg-white/5 p-6"
              >
                <CheckCircle
                  size={24}
                  className="text-[#E8FF00]"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Team Gallery
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative h-[350px] overflow-hidden rounded-[30px]"
              >
                <Image
                  src={`/teams/gallery-${item}.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0052cc] p-12 text-center">
          <Mail
            className="mx-auto"
            size={40}
          />

          <h2 className="heading-font mt-6 text-4xl uppercase">
            Questions?
          </h2>

          <p className="mt-4 text-white/85">
            Contact Coach Ayden for questions regarding team
            requirements and ordering.
          </p>

            <Link href="mailto:cheer@blackwatchsports.com">
          <p className="mt-6 text-xl font-bold">
            cheer@blackwatchsports.com
          </p>
            </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        id="order"
        className="bg-[#E8FF00] px-6 py-24 text-center text-black"
      >
        <Trophy
          size={50}
          className="mx-auto"
        />

        <h2 className="heading-font mt-6 text-4xl uppercase md:text-6xl">
          Ready To Order?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Purchase your approved competition ponytail before the
          ordering deadline.
        </p>
       <Link href="/shop">
        <button className="mt-10 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition">
          Shop Approved Ponytails
        </button>
         </Link>
      </section>
    </main>
  );
}