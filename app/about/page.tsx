import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image
          src="/about/aboutus.jpg"
          alt="LilyLocks Team"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
              About LilyLocks
            </p>

            <h1 className="heading-font text-5xl uppercase leading-tight md:text-7xl">
              Built For Teams.
              <br />
              Designed To Stand Out.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              LilyLocks creates premium cheer ponytails,
              bows, and team accessories built for
              performance, confidence, and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#0052cc] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 items-center">
          {/* Left */}
          <div>
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
  Our Story
</h2>

<p className="mt-8 text-lg leading-relaxed text-white/90">
  LilyLocks started with one mission:
  help athletes feel polished, confident,
  and competition-ready.
</p>

<p className="mt-6 text-lg leading-relaxed text-white/85">
  As a former All-Star competition cheerleader,
  our founder Ruth experienced firsthand how important
  it is to look and feel your best on the mat.
</p>

<p className="mt-6 text-lg leading-relaxed text-white/85">
  We saw how difficult it was for teams
  to find reliable ponytails that looked
  premium, matched consistently, and
  performed under pressure.
</p>

<p className="mt-6 text-lg leading-relaxed text-white/85">
  So we built LilyLocks — premium hair
  accessories designed for cheerleaders,
  gyms, coaches, and athletes who want
  to show up bold.
</p>

<p className="mt-6 text-lg leading-relaxed text-white/85">
  We are proud to be fully based in Dallas, Texas,
  and operated by a former All-Star competition
  cheerleader who understands the demands of the
  sport firsthand. Every LilyLocks product is
  designed to help athletes feel confident,
  polished, and performance-ready on competition day.
</p>
          </div>

          {/* Right */}
          <div className="relative h-[550px] overflow-hidden rounded-[40px]">
            <Image
              src="/about/aboutlilylockshair.png"
              alt="LilyLocks Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-font text-center text-4xl uppercase md:text-6xl">
            Why LilyLocks
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: <Sparkles size={30} />,
                title: "Premium Look",
                text: "Full, polished ponytails designed to stand out under lights and on stage.",
              },
              {
                icon: <ShieldCheck size={30} />,
                title: "Reliable Quality",
                text: "Consistency in color, fullness, and wear — made for repeat performance.",
              },
              {
                icon: <Users size={30} />,
                title: "Built For Teams",
                text: "Perfect for coaches, gyms, and athletes ordering individually or in bulk.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[36px] border border-white/10 bg-white/5 p-10"
              >
                <div className="text-[#E8FF00]">
                  {item.icon}
                </div>

                <h3 className="heading-font mt-6 text-3xl uppercase">
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

      {/* WHO WE SERVE */}
      <section className="bg-[#ff0a8a] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Who We Serve
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {[
              "Cheer Teams",
              "Gyms",
              "Coaches",
              "Athletes",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[30px] bg-black p-10"
              >
                <h3 className="heading-font text-2xl uppercase text-[#E8FF00]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND PROMISE */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#0052cc] p-12 text-center">
          <h2 className="heading-font text-4xl uppercase md:text-6xl">
            Our Promise
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-white/90">
            Every LilyLocks product is built to help
            athletes feel confident, teams stay
            consistent, and coaches simplify ordering
            without sacrificing quality.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#E8FF00] px-6 py-24 text-center text-black">
        <h2 className="heading-font text-4xl uppercase md:text-6xl">
          Ready To Elevate
          <br />
          Your Team Look?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/80">
          Explore premium ponytails, bows, and
          team accessories designed for
          performance-ready athletes.
        </p>

        <Link
          href="https://lilylocksshop.square.site/"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-10 py-4 text-lg font-bold text-white hover:scale-105 transition"
        >
          Shop LilyLocks Ponytails & Bows
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}