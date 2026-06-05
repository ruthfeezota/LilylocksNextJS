// components/LilyLocksPopup.tsx

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { X, Sparkles } from "lucide-react";

const SERVICE_ID = "service_55uypx6";
const TEMPLATE_ID = "template_ux38u5q";
const PUBLIC_KEY = "MIXNv9Ve6nyUOUlcy";

export default function LilyLocksPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const lastShown =
      localStorage.getItem("LilyLocksPopupDate");

    const today = new Date().toDateString();

    if (lastShown !== today) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem(
          "LilyLocksPopupDate",
          today
        );
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (
    e: React.FormEvent
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
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setIsSending(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[40px] bg-black shadow-2xl">

        {/* Close */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 z-20 text-white transition hover:text-[#ff0a8a]"
        >
          <X size={28} />
        </button>

        <div className="grid md:grid-cols-2">

          {/* IMAGE */}
          <div className="relative min-h-[280px] md:min-h-[420px]">
            <Image
              src="/popup/popup-cheer.jpg"
              alt="LilyLocks Cheer Ponytail"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center p-6 md:p-8">

            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#ff0a8a] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]">
              <Sparkles size={16} />
              VIP Cheer Club
            </div>

            <h2 className="heading-font text-3xl uppercase leading-[0.95] text-white md:text-4xl">
              Competition Hair Starts Here
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/80">
              Join the LilyLocks VIP list and get
              15% OFF your first competition-ready ponytail.
            </p>

            <div className="mt-5 space-y-2 text-sm text-white">
              <div>🎀 15% OFF your first order</div>
              <div>🏆 Competition hair tips</div>
              <div>✨ Early access to restocks</div>
              <div>📬 Exclusive VIP offers</div>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-[24px] bg-[#E8FF00] p-5 text-center font-bold text-black">
                🎉 You&#39;re in! Check your inbox for your 
                discount code.
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-6 space-y-3"
              >
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
                />

                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#ff0a8a]"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full rounded-full bg-[#E8FF00] px-6 py-4 text-base font-bold text-black transition hover:scale-[1.02] disabled:opacity-60"
                >
                  {isSending
                    ? "JOINING..."
                    : "GET MY 15% OFF"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}