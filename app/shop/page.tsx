"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Heart,
  Star,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Users,
} from "lucide-react";

const ponytails = [
  {
    id: 1,
    handle: "rookie",
    name: "The Rookie™",
    subtitle: "Practice-ready confidence 10inch Ponytail",
    bestFor: "Practice",
    price: "$99.99",
    image: "/ponytails/rookie.jpg",
    badge: "Starter Favorite",
    rating: "4.8",
    reviews: 124,
  },
  {
    id: 2,
    handle: "varsity",
    name: "The Varsity™",
    subtitle: "Competition-ready volume 14inch Ponytail",
    bestFor: "Competition",
    price: "$149.99",
    image: "/ponytails/varsity.jpg",
    badge: "Best Seller",
    rating: "4.9",
    reviews: 231,
  },
  {
    id: 3,
    handle: "elite",
    name: "The Elite™",
    subtitle: "No blending in. Ever. 18inch Ponytail",
    bestFor: "Luxury",
    price: "$179.99",
    image: "/ponytails/elite.jpg",
    badge: "Luxury Pick",
    rating: "5.0",
    reviews: 87,
  },
];

const cheerBows = [
  {
    id: 1,
    name: "Custom Team Glitter Cheer Bow",
    subtitle:
      "Premium competition bow personalized with your team colors and wording.",
    bestFor: "Competition",
    price: "Custom",
    image: "/competition-cheer-bow.jpg",
    badge: "Best Seller",
    rating: "5.0",
    reviews: 0,
    href: "https://lilylocksshop.square.site/product/custom-team-glitter-cheer-bow/DXOTKPZKB3DEH4X4Q5LR3L7B?cs=true&cst=custom",
  },
  {
    id: 2,
    name: "Custom Collegiate Cheer Bow",
    subtitle:
      "Classic collegiate-style bow customized with team colors, mascot, athlete name, or school logo.",
    bestFor: "Game Day",
    price: "Custom",
    image: "/collegiate-cheer-bow.jpg",
    badge: "New",
    rating: "5.0",
    reviews: 0,
    href: "https://lilylocksshop.square.site/product/custom-collegiate-cheer-bow/NBQF3GCPA4OCC24XPHWK2CSU?cs=true&cst=custom",
  },
];

const shopNeeds = [
  {
    title: "Practice Ponytails",
    text: "Lightweight styles built for training, sideline, and everyday wear.",
  },
  {
    title: "Competition Ponytails",
    text: "Fuller density built for movement, volume, and impact.",
  },
  {
    title: "Luxury Statement",
    text: "High-volume premium looks made to stand out.",
  },
];

const reviews = [
  {
    quote:
      "These are hands down the best ponytails our team has ever used. The volume, hold, and color matching were perfect.",
    name: "Elite Cheer Coach",
    type: "All Star Cheer",
  },
  {
    quote:
      "The ponytail looked amazing on the floor and stayed secure through the entire routine. Our athletes absolutely loved them.",
    name: "Varsity Cheer Coach",
    type: "High School Cheer",
  },
  {
    quote:
      "The hair quality is incredible. It blends beautifully and gives our athletes the exact competition look we wanted.",
    name: "Cheer Mom",
    type: "Competition Cheer",
  },
  {
    quote:
      "We ordered matching ponytails for our entire team and the color was spot on. LilyLocks made the whole process so easy.",
    name: "Team Coach",
    type: "All Star Program",
  },
  {
    quote:
      "The bows were gorgeous and matched our team colors perfectly. They made our uniforms look so much more complete.",
    name: "Cheer Coach",
    type: "Youth Cheer",
  },
];

function ReviewSlide({
  review,
  active,
}: {
  review: {
    quote: string;
    name: string;
    type: string;
  };
  active: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center px-16 py-16 transition-all duration-700 md:px-24 ${
        active
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-8 opacity-0"
      }`}
    >
      <p className="text-3xl tracking-widest text-[#E8FF00]">
        ★★★★★
      </p>

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
        “{review.quote}”
      </p>

      <div className="mt-7">
        <p className="font-bold text-[#ff0a8a]">
          — {review.name}
        </p>

        <p className="mt-1 text-sm uppercase tracking-wider text-white/50">
          {review.type}
        </p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/team-3.jpg"
          alt="LilyLocks Shop Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">

            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
              Home / Shop
            </p>

            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Signature
              <br />
              Cheer Hair
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Premium human hair ponytails and custom cheer bows designed for
              practice, competition, game day, and statement looks.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#ponytails"
                className="rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold transition hover:scale-105"
              >
                Shop Ponytails
              </Link>

              <Link
                href="#cheer-bows"
                className="rounded-full bg-[#E8FF00] px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
              >
                Shop Cheer Bows
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* FILTER BAR */}
      <section className="sticky top-0 z-40 border-y border-white/10 bg-[#0052cc]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">

          <p className="text-sm font-semibold text-white/80">
            Showing 5 Products
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Length",
              "Density",
              "Color",
              "Best For",
              "Price",
              "Sort By",
            ].map((item) => (
              <button
                key={item}
                className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:bg-white hover:text-black"
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </section>


      {/* SHOP BY NEED */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Shop By Need
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {shopNeeds.map((item) => (
              <div
                key={item.title}
                className="rounded-[36px] border border-white/10 bg-white/5 p-10"
              >
                <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
                  {item.title}
                </h3>

                <p className="mt-5 text-lg leading-relaxed text-white/80">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ========================= */}
      {/* PONYTAILS */}
      {/* ========================= */}

      <section
        className="bg-[#0052cc] px-6 py-24"
        id="ponytails"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="heading-font text-sm uppercase tracking-[0.3em] text-[#E8FF00]">
              LilyLocks Signature Collection
            </p>

            <h2 className="heading-font mt-3 text-5xl uppercase md:text-7xl">
              Ponytails
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
              Premium human hair ponytails built for volume, movement, and
              confidence from practice to competition.
            </p>

          </div>


          <div className="grid gap-10 md:grid-cols-2">

            {ponytails.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-[40px] bg-black"
              >

                <div className="relative h-[520px] overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    aria-label={`Add ${product.name} to favorites`}
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md"
                  >
                    <Heart size={18} />
                  </button>

                  <span className="absolute left-5 top-5 rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-bold uppercase text-black">
                    {product.badge}
                  </span>

                </div>


                <div className="p-8">

                  <div className="mb-4 flex items-start justify-between gap-4">

                    <div>
                      <h3 className="heading-font text-3xl uppercase">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-white/75">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-2xl font-bold text-[#ff0a8a]">
                      {product.price}
                    </p>

                  </div>


                  <div className="mb-5 flex items-center gap-2 text-sm text-white/80">

                    <Star
                      size={16}
                      className="fill-[#E8FF00] text-[#E8FF00]"
                    />

                    <span>{product.rating}</span>

                    <span>
                      ({product.reviews} reviews)
                    </span>

                  </div>


                  <p className="mb-6 font-semibold text-[#E8FF00]">
                    Best For: {product.bestFor}
                  </p>


                  <div className="mb-8 flex gap-2">

                    {[
                      "#111111",
                      "#2f1f1f",
                      "#5b3b2a",
                      "#8a623d",
                      "#d4b48c",
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-7 w-7 rounded-full border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}

                  </div>


                  <Link
                    href={`/shop/${product.handle}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] py-4 font-bold transition hover:scale-[1.02]"
                  >
                    Shop Ponytail
                    <ArrowRight size={18} />
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ========================= */}
      {/* CHEER BOWS */}
      {/* ========================= */}

      <section
        className="bg-black px-6 py-24"
        id="cheer-bows"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <p className="heading-font text-sm uppercase tracking-[0.3em] text-[#ff0a8a]">
              Complete Your Competition Look
            </p>

            <h2 className="heading-font mt-3 text-5xl uppercase md:text-7xl">
              Cheer Bows
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-xl">
              Custom cheer bows designed to coordinate with your ponytail,
              team colors, mascot, school, or athlete name.
            </p>

          </div>


          <div className="grid gap-10 md:grid-cols-2">

            {cheerBows.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-[40px] bg-[#0052cc]"
              >

                <div className="relative h-[520px] overflow-hidden">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <button
                    aria-label={`Add ${product.name} to favorites`}
                    className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md"
                  >
                    <Heart size={18} />
                  </button>

                  <span className="absolute left-5 top-5 rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-bold uppercase text-black">
                    {product.badge}
                  </span>

                </div>


                <div className="p-8">

                  <div className="mb-4 flex items-start justify-between gap-4">

                    <div>
                      <h3 className="heading-font text-3xl uppercase">
                        {product.name}
                      </h3>

                      <p className="mt-2 text-white/80">
                        {product.subtitle}
                      </p>
                    </div>

                    <p className="text-xl font-bold text-[#E8FF00]">
                      {product.price}
                    </p>

                  </div>


                  <div className="mb-5 flex items-center gap-2 text-sm text-white/80">

                    <Star
                      size={16}
                      className="fill-[#E8FF00] text-[#E8FF00]"
                    />

                    <span>{product.rating}</span>

                  </div>


                  <p className="mb-8 font-semibold text-[#E8FF00]">
                    Best For: {product.bestFor}
                  </p>


                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] py-4 font-bold transition hover:scale-[1.02]"
                  >
                    Customize Your Bow
                    <ArrowRight size={18} />
                  </Link>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* TRUST STRIP */}
      <section className="bg-[#0052cc] px-6 py-16">

        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-4">

          {[
            {
              icon: <Sparkles size={26} />,
              text: "Premium Human Hair",
            },
            {
              icon: <ShieldCheck size={26} />,
              text: "Secure Checkout",
            },
            {
              icon: <Users size={26} />,
              text: "Team Color Matching",
            },
            {
              icon: <ShoppingBag size={26} />,
              text: "Team Orders",
            },
          ].map((item) => (
            <div key={item.text} className="space-y-3">

              <div className="flex justify-center text-[#E8FF00]">
                {item.icon}
              </div>

              <p className="font-semibold">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* COMPLETE THE LOOK */}
      <section className="bg-[#ff0a8a] px-6 py-24">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Complete Your Team Look
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {[
              {
                title: "Color Matching",
                text: "Match your ponytail and bow to your exact team colors.",
              },
              {
                title: "Team Orders",
                text: "Need coordinated looks for your entire squad? We offer team ordering.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[32px] bg-black p-10"
              >

                <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
                  {item.title}
                </h3>

                <p className="mt-4 text-lg text-white/80">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ========================= */}
      {/* AUTO-SWIPING REVIEWS */}
      {/* ========================= */}

      <section className="bg-[#0052cc] px-6 py-24">

        <div className="mx-auto max-w-6xl text-center">

          <p className="heading-font text-sm uppercase tracking-[0.3em] text-[#E8FF00]">
            Real Teams. Real Results.
          </p>

          <h2 className="heading-font mt-3 text-4xl uppercase md:text-6xl">
            Loved By Athletes
          </h2>


          <div className="relative mt-12 overflow-hidden rounded-[40px] bg-black">

            <div className="relative min-h-[390px] md:min-h-[350px]">

              {reviews.map((review, index) => (
                <ReviewSlide
                  key={`${review.name}-${index}`}
                  review={review}
                  active={index === activeReview}
                />
              ))}

            </div>


            {/* PREVIOUS */}
            <button
              onClick={() =>
                setActiveReview(
                  (activeReview - 1 + reviews.length) % reviews.length
                )
              }
              aria-label="Previous review"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black md:left-8"
            >
              ←
            </button>


            {/* NEXT */}
            <button
              onClick={() =>
                setActiveReview(
                  (activeReview + 1) % reviews.length
                )
              }
              aria-label="Next review"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black md:right-8"
            >
              →
            </button>


            {/* DOTS */}
            <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">

              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveReview(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeReview
                      ? "w-8 bg-[#E8FF00]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">

        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Need Matching Ponytails
          <br />
          & Cheer Bows?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Create a coordinated look for your athlete, school, gym,
          or entire cheer squad.
        </p>

        <Link
          href="/team-orders"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-bold text-white transition hover:scale-105"
        >
          Explore Team Orders
          <ArrowRight size={18} />
        </Link>

      </section>

    </main>
  );
}

