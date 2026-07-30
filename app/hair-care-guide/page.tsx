import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brush,
  Droplets,
  Flame,
  ShieldCheck,
  Sparkles,
  Wind,
  Package,
  Trophy,
  Heart,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const careSteps = [
  {
    icon: <Brush size={34} />,
    title: "Brush Before & After Every Wear",
    text: "Always begin brushing at the ends and slowly work your way toward the attachment point. Gentle brushing prevents tangles, minimizes shedding, and keeps your LilyLocks ponytail soft and full.",
  },
  {
    icon: <Droplets size={34} />,
    title: "Wash Only When Needed",
    text: "Human hair ponytails do not require frequent washing. Wash only when product buildup becomes noticeable or at the end of the competition season using sulfate-free products.",
  },
  {
    icon: <Wind size={34} />,
    title: "Dry Completely",
    text: "Never store your ponytail while damp. Allow the hair to air dry completely or finish with a blow dryer on medium heat to preserve its shape and natural movement.",
  },
  {
    icon: <Flame size={34} />,
    title: "Style With Care",
    text: "Human hair can be curled or straightened just like your natural hair. Always use a heat protectant and avoid excessive temperatures to extend the life of your ponytail.",
  },
  {
    icon: <Package size={34} />,
    title: "Store Properly",
    text: "After every practice or competition, gently brush the ponytail and place it inside its travel bag or storage container to prevent tangles and flattening.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Protect Your Investment",
    text: "With proper care, your LilyLocks ponytail can remain competition-ready for multiple seasons. A few minutes of maintenance after each wear makes all the difference.",
  },
];

const avoidItems = [
  "Brushing aggressively from the top down",
  "Using excessive heat without protectant",
  "Sleeping while wearing your ponytail",
  "Storing the ponytail while damp",
  "Using heavy oils or greasy styling products",
  "Leaving the ponytail inside a hot vehicle",
  "Twisting or folding the ponytail tightly",
  "Using products containing sulfates or alcohol",
];

export default function HairCareGuidePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}

      <section className="relative min-h-[90vh] overflow-hidden">

        <Image
          src="/gallery-2.jpg"
          alt="LilyLocks Hair Care Guide"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24">

          <div className="max-w-4xl">

            <p className="mb-5 uppercase tracking-[0.25em] text-white/70">
              LilyLocks Human Hair Care Guide
            </p>

            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Keep Your
              <br />
              Ponytail Looking
              <br />
              Competition Ready
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/85">

              Your LilyLocks ponytail is handcrafted using premium human hair
              to deliver beautiful movement, incredible fullness, and a natural
              finish that performs from warmups to awards. Like your own hair,
              proper care is the key to keeping it soft, healthy, and
              competition ready throughout the season.

            </p>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75">

              Whether you're preparing for your first competition or traveling
              every weekend with your team, this guide will teach you how to
              wash, brush, style, dry, transport, and store your ponytail so it
              continues looking beautiful wear after wear.

            </p>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="bg-[#0052cc] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-[40px] bg-black p-12">

            <div className="flex items-center gap-4">

              <Heart
                className="text-[#E8FF00]"
                size={36}
              />

              <h2 className="heading-font text-4xl uppercase md:text-5xl">
                Why Proper Care Matters
              </h2>

            </div>

            <p className="mt-8 text-lg leading-9 text-white/85">

              Every LilyLocks ponytail is designed to withstand practices,
              competitions, performances, photos, and travel. While human hair
              is incredibly durable, it still requires regular maintenance just
              like your own hair. A few simple habits after each wear will keep
              your ponytail smooth, shiny, and full while preventing tangles,
              dryness, and unnecessary shedding.

            </p>

            <p className="mt-6 text-lg leading-9 text-white/80">

              Think of your ponytail as an investment in your performance. The
              better you care for it, the longer it will maintain its softness,
              body, and professional appearance. Most athletes only need a few
              minutes of maintenance after each event to dramatically extend the
              life of their ponytail.

            </p>

          </div>

        </div>

      </section>

      {/* CARE STEPS */}

      <section className="bg-black px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <h2 className="heading-font text-center text-5xl uppercase">
            The Six Essentials
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-white/70">

            Following these six habits will help your ponytail stay soft,
            healthy, shiny, and performance-ready throughout the entire season.

          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {careSteps.map((step) => (

              <div
                key={step.title}
                className="rounded-[36px] border border-white/10 bg-[#111] p-9 transition hover:-translate-y-2 hover:border-[#E8FF00]"
              >

                <div className="text-[#E8FF00]">
                  {step.icon}
                </div>

                <h3 className="heading-font mt-6 text-3xl uppercase">
                  {step.title}
                </h3>

                <p className="mt-6 leading-8 text-white/75">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BEFORE COMPETITION */}

      <section className="bg-[#ff0a8a] px-6 py-24">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 items-center">

          <div>

            <Image
              src="/before_competition.jpg"
              alt="Competition ponytail"
              width={700}
              height={900}
              className="rounded-[40px] object-cover"
            />

          </div>

          <div>

            <div className="flex items-center gap-4">

              <Trophy
                className="text-[#E8FF00]"
                size={34}
              />

              <h2 className="heading-font text-5xl uppercase">
                Before Competition
              </h2>

            </div>

            <p className="mt-8 text-lg leading-9 text-white/90">

              Preparing your ponytail before competition helps create a polished,
              professional look that photographs beautifully and performs
              throughout every routine.

            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 text-[#E8FF00]" />

                <p className="leading-8">
                  Brush out all tangles before styling. Never begin curling or
                  teasing tangled hair.
                </p>

              </div>

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 text-[#E8FF00]" />

                <p className="leading-8">
                  Apply a lightweight heat protectant before using any hot
                  tools.
                </p>

              </div>

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 text-[#E8FF00]" />

                <p className="leading-8">
                  Use medium heat whenever possible to maintain softness and
                  reduce unnecessary dryness.
                </p>

              </div>

              <div className="flex gap-4">

                <CheckCircle2 className="mt-1 text-[#E8FF00]" />

                <p className="leading-8">
                  Secure all combs, clips, and wrap pieces before taking the
                  floor to prevent movement during routines.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* AFTER COMPETITION */}

<section className="bg-black px-6 py-24">

  <div className="mx-auto max-w-7xl">

    <div className="grid gap-16 lg:grid-cols-2 items-center">

      <div>

        <h2 className="heading-font text-5xl uppercase md:text-6xl">
          After
          <br />
          Competition
        </h2>

        <p className="mt-8 text-lg leading-9 text-white/80">

          Taking just five minutes to care for your LilyLocks ponytail after
          each competition will keep it looking soft, full, and beautiful for
          future performances.

        </p>

        <div className="mt-12 space-y-8">

          <div>
            <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
              1. Remove Carefully
            </h3>

            <p className="mt-3 leading-8 text-white/75">
              Gently remove your ponytail without pulling or twisting the
              attachment. Avoid rushing, as excessive pulling can place
              unnecessary stress on both the extension and your natural hair.
            </p>
          </div>

          <div>
            <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
              2. Brush Before Storing
            </h3>

            <p className="mt-3 leading-8 text-white/75">
              Brush through the ponytail starting at the ends and working
              upward. Removing tangles immediately prevents knots from becoming
              more difficult to remove later.
            </p>
          </div>

          <div>
            <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
              3. Let It Breathe
            </h3>

            <p className="mt-3 leading-8 text-white/75">
              If your ponytail became damp from sweat, allow it to dry
              completely before placing it back into its storage bag or travel
              case.
            </p>
          </div>

        </div>

      </div>

      <div className="relative h-[600px] overflow-hidden rounded-[40px]">

        <Image
          src="/after_competition.png"
          alt="After competition"
          fill
          className="object-cover"
        />

      </div>

    </div>

  </div>

</section>

{/* WASHING */}

<section className="bg-[#0052cc] px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="heading-font text-center text-5xl uppercase">
      Washing Your Ponytail
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-white/85">

      Human hair ponytails should only be washed when product buildup becomes
      noticeable or at the end of the competition season. Washing too often can
      strip moisture from the hair and shorten its lifespan.

    </p>

    <div className="mt-16 grid gap-8 md:grid-cols-2">

      <div className="rounded-[36px] bg-black p-10">

        <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
          Before Washing
        </h3>

        <ul className="mt-8 space-y-4 text-white/80 leading-8">

          <li>• Brush out every tangle first.</li>
          <li>• Fill a sink with lukewarm water.</li>
          <li>• Use only sulfate-free shampoo.</li>
          <li>• Remove excess hairspray before washing.</li>

        </ul>

      </div>

      <div className="rounded-[36px] bg-black p-10">

        <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
          While Washing
        </h3>

        <ul className="mt-8 space-y-4 text-white/80 leading-8">

          <li>• Gently work shampoo downward.</li>
          <li>• Never scrub or twist the hair.</li>
          <li>• Rinse thoroughly with lukewarm water.</li>
          <li>• Apply conditioner to the mid-lengths and ends.</li>
          <li>• Rinse until all product has been removed.</li>

        </ul>

      </div>

    </div>

  </div>

</section>

{/* DRYING */}

<section className="bg-black px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="heading-font text-center text-5xl uppercase">
      Drying Your Ponytail
    </h2>

    <div className="mt-16 grid gap-10 md:grid-cols-3">

      <div className="rounded-[36px] bg-[#111] p-10">

        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Step One
        </h3>

        <p className="mt-5 leading-8 text-white/75">
          Gently squeeze excess water from the hair using a clean microfiber
          towel. Never wring or twist the ponytail.
        </p>

      </div>

      <div className="rounded-[36px] bg-[#111] p-10">

        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Step Two
        </h3>

        <p className="mt-5 leading-8 text-white/75">
          Allow the ponytail to air dry until slightly damp. Brush gently while
          drying to help maintain smoothness.
        </p>

      </div>

      <div className="rounded-[36px] bg-[#111] p-10">

        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Step Three
        </h3>

        <p className="mt-5 leading-8 text-white/75">
          Finish with a blow dryer on medium heat and a round brush if desired
          to restore fullness and natural movement.
        </p>

      </div>

    </div>

  </div>

</section>
{/* STYLING */}

<section className="bg-[#ff0a8a] px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="heading-font text-center text-5xl uppercase">
      Styling Tips
    </h2>

    <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-9 text-white/90">

      Because LilyLocks ponytails are made with premium human hair, they can be
      curled, straightened, teased, and styled just like your own hair.

    </p>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      <div className="rounded-[36px] bg-black p-10">

        <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
          Recommended
        </h3>

        <ul className="mt-8 space-y-4 leading-8 text-white/80">

          <li>✓ Use heat protectant.</li>
          <li>✓ Use medium heat whenever possible.</li>
          <li>✓ Allow curls to cool before brushing.</li>
          <li>✓ Finish with lightweight hairspray.</li>

        </ul>

      </div>

      <div className="rounded-[36px] bg-black p-10">

        <h3 className="heading-font text-3xl uppercase text-[#E8FF00]">
          Avoid
        </h3>

        <ul className="mt-8 space-y-4 leading-8 text-white/80">

          <li>✕ Repeated high heat.</li>
          <li>✕ Heavy oils.</li>
          <li>✕ Sticky styling waxes.</li>
          <li>✕ Overusing dry shampoo.</li>

        </ul>

      </div>

    </div>

  </div>

</section>

{/* STORAGE */}

<section className="bg-black px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="heading-font text-center text-5xl uppercase">
      Storage & Travel
    </h2>

    <div className="mt-16 rounded-[40px] bg-[#0052cc] p-12">

      <p className="text-lg leading-9 text-white/90">

        Proper storage is one of the easiest ways to extend the life of your
        ponytail. Always brush the hair before storing and make sure it is
        completely dry.

      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div>

          <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
            Best Practices
          </h3>

          <ul className="mt-6 space-y-4 leading-8 text-white/85">

            <li>• Store inside the LilyLocks travel bag.</li>
            <li>• Keep away from moisture.</li>
            <li>• Avoid crushing under heavy bags.</li>
            <li>• Brush before every storage.</li>
            <li>• Keep away from direct sunlight.</li>

          </ul>

        </div>

        <div>

          <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
            Traveling With Your Ponytail
          </h3>

          <p className="mt-6 leading-8 text-white/85">

            Whether you're flying to Nationals or heading to a weekend
            competition, pack your ponytail in a protective travel bag to keep
            it clean, smooth, and ready for performance. Avoid placing heavy
            equipment on top of the ponytail during transport.

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* FAQ */}

<section className="bg-[#111] px-6 py-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="heading-font text-center text-5xl uppercase">
      Frequently Asked Questions
    </h2>

    <div className="mt-16 space-y-8">

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          How often should I wash my ponytail?
        </h3>
        <p className="mt-4 leading-8 text-white/75">
          Most athletes only need to wash their ponytail once each competition
          season or whenever noticeable product buildup occurs.
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Can I curl or straighten it?
        </h3>
        <p className="mt-4 leading-8 text-white/75">
          Yes. LilyLocks ponytails are made from premium human hair and can be
          heat styled. Always use a heat protectant and avoid excessive
          temperatures.
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Why does my ponytail become tangled?
        </h3>
        <p className="mt-4 leading-8 text-white/75">
          Tangles are normal with human hair after performances, teasing, and
          travel. Gentle brushing after each wear helps prevent larger knots.
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          How long will my LilyLocks ponytail last?
        </h3>
        <p className="mt-4 leading-8 text-white/75">
          With proper care, many athletes enjoy their LilyLocks ponytail for
          multiple competition seasons. Longevity depends on styling frequency,
          maintenance, and storage.
        </p>
      </div>

      <div className="rounded-[32px] bg-black p-8">
        <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
          Can I wear it in rain or humidity?
        </h3>
        <p className="mt-4 leading-8 text-white/75">
          Yes, but if the ponytail becomes damp, allow it to dry completely
          before storing to help preserve its quality and shape.
        </p>
      </div>

    </div>

  </div>

</section>

      {/* FINAL CTA */}

      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">

        <div className="mx-auto max-w-4xl">

          <h2 className="heading-font text-5xl uppercase md:text-7xl">
            Ready For
            <br />
            Your Next Competition?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-black/80">
            Shop premium handcrafted human hair cheer ponytails designed for
            athletes who want confidence, volume, and a flawless competition
            look. From custom color matching to team orders, LilyLocks is here
            to help you perform your best.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              href="https://lilylocksshop.square.site/"
              className="inline-flex items-center gap-3 rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition hover:scale-105"
            >
              Shop Ponytails
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border-2 border-black px-10 py-5 text-lg font-bold transition hover:bg-black hover:text-white"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}