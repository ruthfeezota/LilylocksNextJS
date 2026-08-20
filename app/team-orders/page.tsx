"use client";

import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Heart,
  Star,
  ShieldCheck,
  Sparkles,
  ShoppingBag,
  Users,
  CalendarDays,
  Palette,
  Send,
} from "lucide-react";

const ponytails = [
  {
    id: 1,
    handle: "rookie",
    name: "The Rookie™",
    subtitle: "Simple & Sporty • 10 inch Ponytail",
    bestFor: "Younger & Simpler Looks",
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
    subtitle: "Competition-ready volume • 14 inch Ponytail",
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
    subtitle: "No blending in. Ever. • 18 inch Ponytail",
    bestFor: "Maximum Impact",
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
    href: "https://lilylocksshop.square.site/product/custom-collegiate-cheer-bow/NBQF3GCPA4OCC24XPHWK2CSU?cs=true&cst=custom",
  },
];

const shades = [
  {
    name: "Jet Black",
    image: "/color-match/jet_black.png",
  },
  {
    name: "Dark Brown",
    image: "/color-match/dark_brown.png",
  },
  {
    name: "Ash Brown",
    image: "/color-match/ash_brown.png",
  },
  {
    name: "Medium Brown",
    image: "/color-match/medium_brown.png",
  },
  {
    name: "Honey Brown",
    image: "/color-match/honey_brown.png",
  },
  {
    name: "Dark Blonde",
    image: "/color-match/dark_blonde.png",
  },
  {
    name: "Honey Blonde",
    image: "/color-match/honey_blonde.png",
  },
  {
    name: "Beige Blonde",
    image: "/color-match/beige_blonde.png",
  },
  {
    name: "Ash Blonde",
    image: "/color-match/ash_blonde.png",
  },
  {
    name: "Platinum Blonde",
    image: "/color-match/platinum_blonde.png",
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

const orderSteps = [
  {
    number: "01",
    title: "Team Details",
    icon: Users,
  },
  {
    number: "02",
    title: "Choose Your Look",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Order Details",
    icon: CalendarDays,
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

      <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white md:text-2xl">
        “{review.quote}”
      </p>

      <div className="mt-7">
        <p className="font-bold text-[#ff0a8a]">
          — {review.name}
        </p>

        <p className="mt-1 text-sm uppercase tracking-wider text-white/60">
          {review.type}
        </p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeReview, setActiveReview] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formTopRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    teamName: "",
    athleteCount: "",
    level: "",
    teamColors: "",
    competitionDeadline: "",
    orderingMethod: "",
    coachName: "",
    email: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(
        (current) => (current + 1) % reviews.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // After a successful submission, automatically bring the
  // thank-you message into view so the user never has to scroll
  // back down to find it.
  useEffect(() => {
    if (!submitted) return;

    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [submitted]);

  const updateForm = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  /*
   * Keeps the form itself in view when moving between steps.
   * This prevents the page from jumping all the way back
   * to the top of the Team Order section.
   */
  const keepFormInPlace = () => {
    requestAnimationFrame(() => {
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((step) => step + 1);
      keepFormInPlace();
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
      keepFormInPlace();
    }
  };

  /*
   * EMAILJS SUBMISSION
   *
   * This replaces the old:
   * fetch("/api/team-orders")
   *
   * Your EmailJS variables need to be in .env.local:
   *
   * NEXT_PUBLIC_EMAILJS_SERVICE_ID=
   * NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
   * NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS environment variables are missing."
        );
      }

      const templateParams = {
        team_name: form.teamName,
        athlete_count: form.athleteCount,
        coach_name: form.coachName,
        email: form.email,
        phone: form.phone,
        ponytail_level: form.level,
        team_colors: form.teamColors,
        competition_deadline: form.competitionDeadline,
        ordering_method: form.orderingMethod,
        notes: form.notes,
      };

      console.log(
        "Sending LilyLocks team order:",
        templateParams
      );

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey,
        }
      );

      console.log(
        "LilyLocks team order sent successfully."
      );

      setSubmitted(true);
    } catch (error: any) {
      console.error(
        "========== EMAILJS ERROR =========="
      );
      console.error("Status:", error?.status);
      console.error("Text:", error?.text);
      console.error("Message:", error?.message);
      console.error("Full error:", error);
      console.error(
        "==================================="
      );

      alert(
        `We couldn't submit your team order.\n\n${
          error?.text ||
          error?.message ||
          "Please try again."
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-black text-white">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[88vh] overflow-hidden">

        {/*
          The hero image is intentionally oversized slightly so any
          built-in black edges/padding in the source photo are cropped
          out. The section itself remains full-bleed.
        */}
        <div className="absolute -inset-[4%]">
          <Image
            src="/Bulidforteams/Lilylocks_Teams6.jpg"
            alt="LilyLocks Cheer Team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#E8FF00]">
              LilyLocks • Team Ordering
            </p>

            <h1 className="heading-font text-4xl uppercase leading-[0.95] md:text-7xl">
              Your Team.
              <br />
              Your Look.
              <br />
              <span className="text-[#ff0a8a]">
                Built Together.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white md:text-2xl">
              Matching ponytails and cheer bows shouldn't
              require a dozen emails. Tell LilyLocks about
              your team once and we'll build your team order
              from there.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/team-orders#team-order"
                className="inline-flex items-center gap-3 rounded-full bg-[#ff0a8a] px-8 py-4 text-lg font-bold transition hover:scale-105"
              >
                Start A Team Order
                <ArrowRight size={20} />
              </Link>

              <Link
                href="#ponytails"
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
              >
                Shop Ponytails
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/90">

              <span className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-[#E8FF00]"
                />
                Team color matching
              </span>

              <span className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-[#E8FF00]"
                />
                Team team orders
              </span>

              <span className="flex items-center gap-2">
                <Check
                  size={16}
                  className="text-[#E8FF00]"
                />
                Coach or parent ordering
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TEAM ORDER MACHINE
      ========================================================= */}

      <section
        id="team-order"
        className="bg-[#0052cc] px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="heading-font text-sm uppercase tracking-[0.3em] text-[#E8FF00]">
              The LilyLocks Team Order Machine
            </p>

            <h2 className="heading-font mt-4 text-5xl uppercase leading-tight md:text-7xl">
              Start A Team Order
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
              One simple form. Tell us about your team,
              choose your look, and we'll prepare your quote
              and ordering path.
            </p>

          </div>


          {/* =====================================================
              COMPACT 3-STEP OVERVIEW
          ===================================================== */}

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-3 gap-3 md:gap-5">

            {orderSteps.map((step, index) => {
              const Icon = step.icon;

              const active =
                currentStep === index + 1;

              const complete =
                currentStep > index + 1;

              return (
                <div
                  key={step.number}
                  className={`rounded-2xl border p-4 transition md:rounded-[28px] md:p-6 ${
                    active
                      ? "border-[#E8FF00] bg-black"
                      : complete
                      ? "border-[#ff0a8a]/50 bg-black/40"
                      : "border-white/15 bg-black/20"
                  }`}
                >

                  <div className="flex items-center justify-between">

                    <span
                      className={`text-sm font-bold ${
                        active || complete
                          ? "text-[#E8FF00]"
                          : "text-white/60"
                      }`}
                    >
                      {complete ? (
                        <Check size={16} />
                      ) : (
                        step.number
                      )}
                    </span>

                    <Icon
                      size={19}
                      className={
                        active
                          ? "text-[#ff0a8a]"
                          : "text-white/60"
                      }
                    />

                  </div>

                  <h3
                    className={`heading-font mt-4 text-base uppercase md:text-xl ${
                      active
                        ? "text-white"
                        : "text-white/75"
                    }`}
                  >
                    {step.title}
                  </h3>

                </div>
              );
            })}

          </div>


          {/* =====================================================
              FORM ANCHOR
          ===================================================== */}

          <div
            ref={formTopRef}
            className="scroll-mt-8"
          />


          {/* =====================================================
              FORM
          ===================================================== */}

          <div className="mx-auto mt-8 max-w-5xl">

            {submitted ? (

              /* =================================================
                 SUCCESS STATE
              ================================================= */

              <div
                ref={successRef}
                className="scroll-mt-8 rounded-[40px] bg-black p-10 text-center md:p-20"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#E8FF00] text-black">
                  <Check size={40} />
                </div>

                <p className="mt-8 text-sm uppercase tracking-[0.25em] text-[#ff0a8a]">
                  You're In
                </p>

                <h3 className="heading-font mt-3 text-4xl uppercase md:text-6xl">
                  Team Order Started
                </h3>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                  We've received your team information.
                  LilyLocks can now review your team details
                  and prepare your quote and ordering path.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);

                    setForm({
                      teamName: "",
                      athleteCount: "",
                      level: "",
                      teamColors: "",
                      competitionDeadline: "",
                      orderingMethod: "",
                      coachName: "",
                      email: "",
                      phone: "",
                      notes: "",
                    });
                  }}
                  className="mt-10 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold transition hover:scale-[1.02]"
                >
                  Start Another Team Order
                </button>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="overflow-hidden rounded-[40px] bg-black"
              >

                {/* =================================================
                    PROGRESS
                ================================================= */}

                <div className="border-b border-white/10 px-6 py-6 md:px-10">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                        Team Order
                      </p>

                      <p className="mt-1 font-bold text-white">
                        Step {currentStep} of 3
                      </p>

                    </div>

                    <p className="text-sm font-bold text-[#E8FF00]">
                      {Math.round(
                        (currentStep / 3) * 100
                      )}
                      %
                    </p>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

                    <div
                      className="h-full bg-[#ff0a8a] transition-all duration-500"
                      style={{
                        width: `${
                          (currentStep / 3) * 100
                        }%`,
                      }}
                    />

                  </div>

                </div>


                {/* =================================================
                    FORM CONTENT
                ================================================= */}

                <div className="p-6 md:p-12">


                  {/* =================================================
                      STEP 1
                  ================================================= */}

                  {currentStep === 1 && (

                    <div>

                      <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
                        Step 01
                      </p>

                      <h3 className="heading-font mt-3 text-4xl uppercase text-white md:text-6xl">
                        Tell Us About Your Team
                      </h3>

                      <p className="mt-4 max-w-2xl text-white/80">
                        Start with the basics so we know who
                        we're building this order for.
                      </p>


                      <div className="mt-10 grid gap-6 md:grid-cols-2">


                        {/* TEAM NAME */}

                        <label className="md:col-span-2">

                          <span className="mb-2 block text-sm font-semibold text-white">
                            Team Name *
                          </span>

                          <input
                            required
                            name="team_name"
                            value={form.teamName}
                            onChange={(e) =>
                              updateForm(
                                "teamName",
                                e.target.value
                              )
                            }
                            placeholder="Example: North Texas Elite"
                            className="w-full rounded-2xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                          />

                        </label>


                        {/* ATHLETE COUNT */}

                        <label>

                          <span className="mb-2 block text-sm font-semibold text-white">
                            Number of Athletes *
                          </span>

                          <input
                            required
                            name="athlete_count"
                            type="number"
                            min="1"
                            value={form.athleteCount}
                            onChange={(e) =>
                              updateForm(
                                "athleteCount",
                                e.target.value
                              )
                            }
                            placeholder="Example: 24"
                            className="w-full rounded-2xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                          />

                        </label>


                        {/* COACH */}

                        <label>

                          <span className="mb-2 block text-sm font-semibold text-white">
                            Coach / Contact Name *
                          </span>

                          <input
                            required
                            name="coach_name"
                            value={form.coachName}
                            onChange={(e) =>
                              updateForm(
                                "coachName",
                                e.target.value
                              )
                            }
                            placeholder="Your name"
                            className="w-full rounded-2xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                          />

                        </label>


                        {/* EMAIL */}

                        <label>

                          <span className="mb-2 block text-sm font-semibold text-white">
                            Email *
                          </span>

                          <input
                            required
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                              updateForm(
                                "email",
                                e.target.value
                              )
                            }
                            placeholder="coach@example.com"
                            className="w-full rounded-2xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                          />

                        </label>


                        {/* PHONE */}

                        <label>

                          <span className="mb-2 block text-sm font-semibold text-white">
                            Phone
                          </span>

                          <input
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) =>
                              updateForm(
                                "phone",
                                e.target.value
                              )
                            }
                            placeholder="(555) 555-5555"
                            className="w-full rounded-2xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                          />

                        </label>

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      STEP 2
                  ================================================= */}

                  {currentStep === 2 && (

                    <div>

                      <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
                        Step 02
                      </p>

                      <h3 className="heading-font mt-3 text-4xl uppercase text-white md:text-6xl">
                        Choose Your Team Look
                      </h3>

                      <p className="mt-4 max-w-2xl text-white/80">
                        Choose the ponytail that best fits your
                        athletes and the look you want on the
                        floor.
                      </p>


                      {/* Hidden EmailJS field for ponytail */}

                      <input
                        type="hidden"
                        name="ponytail_level"
                        value={form.level}
                      />


                      {/* PONYTAIL OPTIONS */}

                      <div className="mt-10 grid gap-5 md:grid-cols-3">

                        {ponytails.map((product) => {

                          const selected =
                            form.level ===
                            product.handle;

                          return (

                            <button
                              type="button"
                              key={product.handle}
                              onClick={() =>
                                updateForm(
                                  "level",
                                  product.handle
                                )
                              }
                              className={`overflow-hidden rounded-[28px] border-2 text-left transition ${
                                selected
                                  ? "border-[#E8FF00] bg-[#E8FF00]/10"
                                  : "border-white/10 bg-white/5 hover:border-white/30"
                              }`}
                            >

                              <div className="relative h-60">

                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />

                                {selected && (

                                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FF00] text-black">
                                    <Check size={20} />
                                  </div>

                                )}

                              </div>


                              <div className="p-6">

                                <p className="text-xs font-bold uppercase tracking-wider text-[#ff0a8a]">
                                  {product.handle ===
                                  "rookie"
                                    ? "10 inch"
                                    : product.handle ===
                                      "varsity"
                                    ? "14 inch"
                                    : "18 inch"}
                                </p>

                                <h4 className="heading-font mt-2 text-3xl uppercase text-white">
                                  {product.name.replace(
                                    "™",
                                    ""
                                  )}
                                </h4>

                                <p className="mt-2 font-semibold text-white">
                                  {product.handle ===
                                  "rookie"
                                    ? "Simple & Sporty"
                                    : product.handle ===
                                      "varsity"
                                    ? "Competition-ready"
                                    : "Maximum Impact"}
                                </p>

                                <p className="mt-3 text-sm leading-relaxed text-white/75">
                                  {product.handle ===
                                  "rookie"
                                    ? "For younger cheerleaders or teams that want a simpler look."
                                    : product.handle ===
                                      "varsity"
                                    ? "A classic competition look with more length and movement."
                                    : "Our biggest, most dramatic look for maximum presence."}
                                </p>

                              </div>

                            </button>

                          );
                        })}

                      </div>


                      {/* TEAM COLORS */}

                      <label className="mt-8 block">

                        <span className="mb-2 block text-sm font-semibold text-white">
                          Team Colors *
                        </span>

                        <textarea
                          required
                          name="team_colors"
                          value={form.teamColors}
                          onChange={(e) =>
                            updateForm(
                              "teamColors",
                              e.target.value
                            )
                          }
                          rows={4}
                          placeholder="Example: Royal blue, neon pink, white and silver glitter"
                          className="w-full rounded-3xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                        />

                      </label>


                      {/* COLOR NOTE */}

                      <div className="mt-6 rounded-3xl border border-[#E8FF00]/20 bg-[#E8FF00]/5 p-6">

                        <div className="flex gap-4">

                          <Palette
                            size={24}
                            className="shrink-0 text-[#E8FF00]"
                          />

                          <div>

                            <h4 className="font-bold text-white">
                              Don't know the exact color?
                            </h4>

                            <p className="mt-2 text-sm leading-relaxed text-white/75">
                              That's okay. Just describe
                              your team colors and we'll help
                              you figure out the right match.
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      STEP 3
                  ================================================= */}

                  {currentStep === 3 && (

                    <div>

                      <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
                        Step 03
                      </p>

                      <h3 className="heading-font mt-3 text-4xl uppercase text-white md:text-6xl">
                        Finish Your Order Details
                      </h3>

                      <p className="mt-4 max-w-2xl text-white/80">
                        Tell us when you need everything and
                        how your team wants to handle the
                        ordering.
                      </p>


                      {/* DEADLINE */}

                      <label className="mt-10 block">

                        <span className="mb-2 block text-sm font-semibold text-white">
                          Competition / Needed-By Date *
                        </span>

                        <div className="relative">

                          <CalendarDays
                            size={20}
                            className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60"
                          />

                          <input
                            required
                            name="competition_deadline"
                            type="date"
                            value={
                              form.competitionDeadline
                            }
                            onChange={(e) =>
                              updateForm(
                                "competitionDeadline",
                                e.target.value
                              )
                            }
                            className="w-full rounded-2xl border border-white/15 bg-[#111111] px-14 py-4 text-white outline-none transition focus:border-[#ff0a8a]"
                          />

                        </div>

                      </label>


                      {/* ORDERING METHOD */}

                      <div className="mt-8">

                        <h4 className="text-sm font-semibold text-white">
                          How Will Your Team Order? *
                        </h4>

                        <p className="mt-2 text-sm text-white/70">
                          Choose the option that works best
                          for your program.
                        </p>


                        {/* Hidden EmailJS field */}

                        <input
                          type="hidden"
                          name="ordering_method"
                          value={form.orderingMethod}
                        />


                        <div className="mt-5 grid gap-5 md:grid-cols-2">


                          {/* COACH ORDERS */}

                          <button
                            type="button"
                            onClick={() =>
                              updateForm(
                                "orderingMethod",
                                "Coach orders everything"
                              )
                            }
                            className={`rounded-[32px] border-2 p-7 text-left transition ${
                              form.orderingMethod ===
                              "Coach orders everything"
                                ? "border-[#E8FF00] bg-[#E8FF00]/10"
                                : "border-white/10 bg-white/5 hover:border-white/30"
                            }`}
                          >

                            <div className="flex items-center justify-between">

                              <ShoppingBag
                                size={28}
                                className="text-[#ff0a8a]"
                              />

                              {form.orderingMethod ===
                                "Coach orders everything" && (

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8FF00] text-black">
                                  <Check size={18} />
                                </div>

                              )}

                            </div>

                            <h4 className="heading-font mt-6 text-2xl uppercase text-white md:text-3xl">
                              Coach Orders Everything
                            </h4>

                            <p className="mt-3 leading-relaxed text-white/75">
                              LilyLocks prepares one team
                              order and the coach or program
                              handles payment and distribution.
                            </p>

                          </button>


                          {/* PARENTS ORDER */}

                          <button
                            type="button"
                            onClick={() =>
                              updateForm(
                                "orderingMethod",
                                "Parents order individually"
                              )
                            }
                            className={`rounded-[32px] border-2 p-7 text-left transition ${
                              form.orderingMethod ===
                              "Parents order individually"
                                ? "border-[#E8FF00] bg-[#E8FF00]/10"
                                : "border-white/10 bg-white/5 hover:border-white/30"
                            }`}
                          >

                            <div className="flex items-center justify-between">

                              <Users
                                size={28}
                                className="text-[#ff0a8a]"
                              />

                              {form.orderingMethod ===
                                "Parents order individually" && (

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8FF00] text-black">
                                  <Check size={18} />
                                </div>

                              )}

                            </div>

                            <h4 className="heading-font mt-6 text-2xl uppercase text-white md:text-3xl">
                              Parents Order Individually
                            </h4>

                            <p className="mt-3 leading-relaxed text-white/75">
                              LilyLocks provides a team order
                              link that parents can use to
                              place individual orders.
                            </p>

                          </button>

                        </div>

                      </div>


                      {/* NOTES */}

                      <label className="mt-8 block">

                        <span className="mb-2 block text-sm font-semibold text-white">
                          Anything Else We Should Know?
                        </span>

                        <textarea
                          name="notes"
                          value={form.notes}
                          onChange={(e) =>
                            updateForm(
                              "notes",
                              e.target.value
                            )
                          }
                          rows={3}
                          placeholder="Special requirements, additional details, multiple competition dates, etc."
                          className="w-full rounded-3xl border border-white/15 bg-[#111111] px-5 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-[#ff0a8a]"
                        />

                      </label>


                      {/* WHAT HAPPENS NEXT */}

                      <div className="mt-7 rounded-3xl bg-[#E8FF00]/10 p-6">

                        <div className="flex gap-4">

                          <Sparkles
                            size={24}
                            className="shrink-0 text-[#E8FF00]"
                          />

                          <div>

                            <h4 className="font-bold text-[#E8FF00]">
                              What happens next?
                            </h4>

                            <p className="mt-2 text-sm leading-relaxed text-white/75">
                              LilyLocks will review your team
                              details, quantity, colors, and
                              deadline. We'll then prepare
                              your quote and the appropriate
                              team ordering path.
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>
                  )}


                  {/* =================================================
                      NAVIGATION
                  ================================================= */}

                  <div className="mt-12 flex flex-col-reverse justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">

                    {currentStep > 1 ? (

                      <button
                        type="button"
                        onClick={previousStep}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
                      >
                        <ArrowLeft size={18} />
                        Back
                      </button>

                    ) : (
                      <div />
                    )}


                    {currentStep < 3 ? (

                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold text-white transition hover:scale-[1.02]"
                      >
                        Continue
                        <ArrowRight size={18} />
                      </button>

                    ) : (

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E8FF00] px-8 py-4 font-bold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                      >

                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Start My Team Order
                            <Send size={18} />
                          </>
                        )}

                      </button>

                    )}

                  </div>

                </div>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =========================================================
          SHOP BY NEED
      ========================================================= */}

      <section className="bg-black px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Shop By Need
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              {
                title: "Sporty Ponytails",
                text: "Lightweight styles built for training, youth, and everyday wear.",
                
              },
              {
                title: "Competition Ponytails",
                text: "Fuller density built for movement, volume, and impact.",
              },
              {
                title: "Big Statements",
                text: "High-volume premium looks made to stand out.",
              },
            ].map((item) => (

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


      {/* =========================================================
          PONYTAILS
      ========================================================= */}

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

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 md:text-xl">
              Premium human hair ponytails built for volume,
              movement, and confidence from practice to
              competition.
            </p>

          </div>


          <div className="grid gap-10 md:grid-cols-3">

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
                    type="button"
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

                  <h3 className="heading-font text-3xl uppercase text-white">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-white/80">
                    {product.subtitle}
                  </p>

                  <div className="mb-5 mt-4 flex items-center gap-2 text-sm text-white/80">

                    <Star
                      size={16}
                      className="fill-[#E8FF00] text-[#E8FF00]"
                    />

                    <span>{product.rating}</span>
                    <span>
                      ({product.reviews} reviews)
                    </span>

                  </div>

                  <p className="mb-8 font-semibold text-[#E8FF00]">
                    Best For: {product.bestFor}
                  </p>

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


      {/* =========================================================
          CHEER BOWS
      ========================================================= */}

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

            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 md:text-xl">
              Custom cheer bows designed to coordinate with
              your ponytail, team colors, mascot, school, or
              athlete name.
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

                  <span className="absolute left-5 top-5 rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-bold uppercase text-black">
                    {product.badge}
                  </span>

                </div>


                <div className="p-8">

                  <h3 className="heading-font text-3xl uppercase text-white">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-white/85">
                    {product.subtitle}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm text-white/80">

                    <Star
                      size={16}
                      className="fill-[#E8FF00] text-[#E8FF00]"
                    />

                    {product.rating}

                  </div>

                  <p className="mt-5 font-semibold text-[#E8FF00]">
                    Best For: {product.bestFor}
                  </p>

                  <Link
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] py-4 font-bold transition hover:scale-[1.02]"
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


      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

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

            <div
              key={item.text}
              className="space-y-3"
            >

              <div className="flex justify-center text-[#E8FF00]">
                {item.icon}
              </div>

              <p className="font-semibold text-white">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================================
          LOVED BY ATHLETES
      ========================================================= */}

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
                  active={
                    index === activeReview
                  }
                />

              ))}

            </div>


            <button
              type="button"
              onClick={() =>
                setActiveReview(
                  (activeReview -
                    1 +
                    reviews.length) %
                    reviews.length
                )
              }
              aria-label="Previous review"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black md:left-8"
            >
              <ArrowLeft size={18} />
            </button>


            <button
              type="button"
              onClick={() =>
                setActiveReview(
                  (activeReview + 1) %
                    reviews.length
                )
              }
              aria-label="Next review"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black md:right-8"
            >
              <ArrowRight size={18} />
            </button>


            <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 gap-2">

              {reviews.map((_, index) => (

                <button
                  type="button"
                  key={index}
                  onClick={() =>
                    setActiveReview(index)
                  }
                  aria-label={`Go to review ${
                    index + 1
                  }`}
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


      {/* =========================================================
          FINAL CTA — COLOR MATCHING
      ========================================================= */}

      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">

        <div className="mx-auto max-w-6xl">

          <p className="heading-font text-sm uppercase tracking-[0.3em] text-black/70">
            Match The Perfect Shade
          </p>

          <h2 className="heading-font mt-3 text-4xl uppercase md:text-6xl">
            Your Team Colors.
            <br />
            Your Perfect Match.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            From deep black to platinum blonde, LilyLocks offers
            a range of shades designed to blend beautifully with
            different hair colors. Not sure which one your team
            needs? Tell us your colors in the team order form and
            we'll help you find the closest match.
          </p>

          {/* SHADE SWATCHES */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-5 gap-x-4 gap-y-8 sm:grid-cols-5 md:gap-x-8">

            {shades.map((shade) => (
              <div
                key={shade.name}
                className="flex flex-col items-center"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-black/15 bg-white shadow-lg transition duration-300 hover:scale-110 sm:h-20 sm:w-20">
                  <Image
                    src={shade.image}
                    alt={`${shade.name} LilyLocks hair color`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <p className="mt-3 text-xs font-bold leading-tight sm:text-sm">
                  {shade.name}
                </p>
              </div>
            ))}

          </div>

          <Link
            href="#team-order-machine"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-bold text-white transition hover:scale-105"
          >
            Tell Us Your Team Colors
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}