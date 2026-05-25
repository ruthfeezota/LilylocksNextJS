"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";

export default function VideoShowcase() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="text-center">
            <h2 className="heading-font text-3xl uppercase leading-tight md:text-6xl">
              Proven On The Mat. Trusted Under Pressure.
            </h2>

            <p className="mx-auto mt-5 max-w-4xl text-lg leading-snug md:text-3xl">
              See LilyLocks in motion during practices, performances, and
              competition weekends.
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="group relative w-full max-w-6xl overflow-hidden border border-[#ff0a8a]"
            >
              {/* Background */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/video-preview.jpg"
                  alt="LilyLocks cheer team performance"
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#ff0a8a] bg-black/80 transition group-hover:scale-110 md:h-32 md:w-32">
                    <Play
                      className="ml-1 fill-[#ff0a8a] text-[#ff0a8a]"
                      size={42}
                    />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6">
          <div className="relative w-full max-w-xl rounded-3xl bg-black border border-[#ff0a8a] p-10 text-center text-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-5 top-5 text-white hover:text-[#ff0a8a]"
            >
              <X size={28} />
            </button>

            <h3 className="heading-font text-3xl uppercase md:text-5xl">
              Video Coming Soon
            </h3>

            <p className="mt-6 text-lg md:text-xl text-white/85">
              We’re putting together a premium LilyLocks showcase so you can
              see our ponytails in motion during performances, practices,
              and competition weekends.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-8 rounded-full bg-[#E8FF00] px-8 py-4 font-bold text-black transition hover:scale-105"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
}