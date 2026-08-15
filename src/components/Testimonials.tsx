"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The quality is incredible and every athlete's ponytail looks polished and consistent. LilyLocks makes our team look and feel confident every time we hit the mat.",
    author: "Coach Morgan",
    team: "Texas Elite Cheer",
    images: [
      "/testimonial-1.jpg",
      "/testimonial-2.jpg",
      "/testimonial-3.jpg",
    ],
  },
  {
    quote:
      "LilyLocks made our team ordering process simple. Every athlete had the same polished finish, and the quality held up through practices and competitions.",
    author: "Coach Mia",
    team: "Houston Cheer Program",
    images: [
      "/testimonial-2.jpg",
      "/testimonial-3.jpg",
      "/testimonial-1.jpg",
    ],
  },
  {
    quote:
      "The consistency was incredible. We finally had a reliable ponytail partner that made bulk orders and replacements stress-free.",
    author: "Coach Ava",
    team: "National Performance Squad",
    images: [
      "/testimonial-3.jpg",
      "/testimonial-1.jpg",
      "/testimonial-2.jpg",
    ],
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  const previous = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  return (
   <section className="w-full overflow-hidden border-t border-white/10 bg-[#2854cf] px-4 py-8 text-white sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1100px] mb-16">

        {/* Heading */}
        <div className="mb-5 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-black text-[#dfff00]">
              ✦
            </span>

            <h2 className="font-holtwood heading-font text-3xl uppercase leading-tight md:text-5xl">
              Real Teams. Real Results.
            </h2>

            <span className="text-sm font-black text-[#dfff00]">
              ✦
            </span>
          </div>

          <p className="mt-1 text-[9px] text-white/70 sm:text-[16px]">
            Loved by athletes and trusted by programs nationwide.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative grid items-center gap-5 lg:grid-cols-[1.7fr_0.8fr]">

          {/* Image Gallery */}
          <div className="relative">

            {/* Images */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {current.images.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="relative aspect-[1.25/1] overflow-hidden rounded-md bg-white/5"
                >
                  <Image
                    src={image}
                    alt={`${current.team} team`}
                    fill
                    sizes="(max-width: 640px) 33vw, 20vw"
                    className="object-cover transition-all duration-700"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              className="absolute -left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black text-white transition hover:border-white hover:bg-white hover:text-black sm:-left-4"
            >
              <ChevronLeft size={15} />
            </button>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute -right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black text-white transition hover:border-white hover:bg-white hover:text-black sm:-right-4"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Testimonial */}
          <div className="flex flex-col justify-center">

            {/* Stars */}
            <div className="mb-2 flex gap-0.5 text-[#ff0a8a]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={12}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              key={active}
              className="text-[11px] leading-[1.45] text-white sm:text-[18px]"
            >
              "{current.quote}"
            </blockquote>

            {/* Author */}
            <div
              key={`author-${active}`}
              className="mt-3"
            >
              <p className="text-[10px] font-bold text-white sm:text-[14px]">
                — {current.author}
              </p>

              <p className="text-[9px] text-white/60 sm:text-[12px]">
                {current.team}
              </p>
            </div>

            {/* Progress */}
            <div className="mt-4 flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    active === index
                      ? "w-8 bg-[#ff0a8a]"
                      : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}