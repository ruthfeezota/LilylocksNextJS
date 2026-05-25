"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "We ordered for our full roster before competition season, and every athlete had consistent color, secure fit, and a polished team look. Reordering for new athletes mid-season was seamless.",
    author: "Coach Sarah, Dallas-Based All-Star Gym",
    image: "/testimonial-1.jpg",
  },
  {
    quote:
      "LilyLocks made our team ordering process simple. Every athlete had the same polished finish, and the quality held up through practices and competitions.",
    author: "Coach Mia, Houston Cheer Program",
    image: "/testimonial-2.jpg",
  },
  {
    quote:
      "The consistency was incredible. We finally had a reliable ponytail partner that made bulk orders and replacements stress-free.",
    author: "Coach Ava, National Performance Squad",
    image: "/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section className="bg-[#E8FF00] px-6 py-16 text-black">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.5fr_0.7fr]">
        {/* Left Content */}
        <div>
          <p className="max-w-4xl text-2xl leading-snug md:text-4xl">
            {current.quote}
          </p>

          <p className="mt-8 text-lg font-bold md:text-2xl">
            {current.author}
          </p>

          {/* Tab Dots */}
          <div className="mt-8 flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all ${
                  active === index
                    ? "w-10 bg-[#ff0a8a]"
                    : "w-3 bg-black/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-44 w-44 overflow-hidden rounded-full md:h-64 md:w-64">
            <Image
              src={current.image}
              alt={current.author}
              fill
              className="object-cover transition duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}