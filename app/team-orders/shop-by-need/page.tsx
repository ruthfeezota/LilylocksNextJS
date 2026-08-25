"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Sparkles,
  Users,
  Trophy,
  Package,
  Star,
  Crown,
} from "lucide-react";


/* =========================================================
   PRODUCTS
========================================================= */

const cheerBows = [
  {
    name: "Rhinestone Cheer Bow",
    price: "$19.99",
    image: "/bows/rhinestone-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/rhinestone-cheer-bow/MPLWWVMGMGGMCVJIZ5EXJAG6?cs=true&cst=custom",
  },
  {
    name: "Full Bling AB Crystal Cheer Bow",
    subtitle: "White Rainbow",
    price: "$23.99",
    image: "/bows/full-bling-ab-crystal-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/full-bling-ab-crystal-cheer-bow-white-rainbow-/VJ7YKMIUMCLLFY7SDCOKUEXC?cs=true&cst=custom",
  },
  {
    name: "Pointy Tail AB Crystal Cheer Bow",
    price: "$16.99",
    image: "/bows/pointy-tail-ab-crystal-cheer-bow.jpg",
    href: "https://lilylocksshop.square.site/product/pointy-tail-ab-crystal-cheer-bow-listing/GZJEAMC3RKCYGCXZVKP72PUQ?cs=true&cst=custom",
  },
];


const ponytails = [
  {
    name: "The Rookie",
    subtitle: "Starter Ponytail",
    tagline: "The gateway to big hair energy.",
    price: "$99.99",
    bundles: "150g Density",
    vibe:
      "Practice-ready but still cute. This is for girls stepping into bold hair without committing to full stadium hair.",
    why: [
      "Perfect for practice + younger athletes",
      "Easy everyday competition look",
      "Best entry-level price point",
      "Builds confidence before upgrading",
    ],
    specs: [
      "10 inches",
      "Light-medium density",
      "Soft wave or sleek straight",
      "Secure wrap + hidden comb",
      "Smooth finish with slight shine",
    ],
    color: "bg-[#0052cc]",
    icon: <Sparkles size={34} />,
    image: "/ponytails/rookie.jpg",
    href: "/shop/rookie",
  },
  {
    name: "The Varsity",
    subtitle: "Mid-Level Ponytail",
    tagline: "Competition-ready volume.",
    price: "$159.99",
    bundles: "200g Density",
    vibe:
      "This pony moves. You see it from the sidelines, on video, and under lights.",
    why: [
      "Perfect volume for competitions",
      "Big enough for layered bows",
      "High movement + bounce",
      "Likely bestseller for teams",
    ],
    specs: [
      "14 inches",
      "Medium-full density",
      "Defined waves or loose curls",
      "Reinforced wrap + double comb",
      "High shine finish",
    ],
    color: "bg-[#ff0a8a]",
    icon: <Star size={34} />,
    image: "/ponytails/varsity.jpg",
    href: "/shop/varsity",
  },
  {
    name: "The Elite",
    subtitle: "Big Hair Ponytail",
    tagline: "No blending in. Ever.",
    price: "$179.99",
    bundles: "300g Density",
    vibe:
      "This is for the girl who wants people to talk. The pony that turns stunts into slow-motion moments.",
    why: [
      "Statement piece energy",
      "Maximum fullness + drama",
      "Luxury stage-ready finish",
      "Built for visibility under lights",
    ],
    specs: [
      "18 inches",
      "Extra full dramatic density",
      "Bold curls or glam waves",
      "Heavy-duty wrap + anchor comb",
      "Glossy stage-ready finish",
    ],
    color: "bg-[#E8FF00]",
    icon: <Crown size={34} />,
    image: "/ponytails/elite.jpg",
    href: "/shop/elite",
  },
];


/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  name,
  subtitle,
  price,
  image,
  href,
  badge,
}: {
  name: string;
  subtitle?: string;
  price: string;
  image: string;
  href: string;
  badge?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group overflow-hidden rounded-[30px] bg-white text-black transition duration-300 hover:-translate-y-1"
    >

      <div className="relative aspect-square overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#E8FF00] px-3 py-1.5 text-xs font-bold uppercase text-black">
            {badge}
          </span>
        )}

      </div>

      <div className="p-6">

        {subtitle && (
          <p className="text-xs font-bold uppercase tracking-wider text-[#ff0a8a]">
            {subtitle}
          </p>
        )}

        <h3 className="heading-font mt-2 text-2xl uppercase">
          {name}
        </h3>

        <p className="mt-3 text-lg font-bold">
          {price}
        </p>

        <div className="mt-5 flex items-center gap-2 text-sm font-bold uppercase text-[#0052cc]">
          Shop Now
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>

      </div>

    </a>
  );
}


/* =========================================================
   PAGE
========================================================= */

export default function ShopByNeedPage() {

  return (
    <main className="min-h-screen bg-black text-white">


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-black px-6 pb-24 pt-20 md:pb-32 md:pt-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr]">

            <div>

              <p className="heading-font text-sm uppercase tracking-[0.3em] text-[#ff0a8a]">
                Team Accessories Built For Your Program
              </p>

              <h1 className="heading-font mt-5 text-6xl uppercase leading-[0.88] md:text-8xl lg:text-9xl">
                Shop
                <br />
                By Need
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Whether you're getting ready for competition,
                outfitting a high school cheer team, or ordering
                accessories in bulk for your gym, LilyLocks has
                team-ready accessories designed to make your
                athletes stand out.
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                Explore our cheer bows and ponytails by the way
                you're actually shopping — because what a competition
                team needs isn't always the same as what a gym
                ordering for multiple teams needs.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href="#competition"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E8FF00] px-8 py-4 font-bold text-black transition hover:scale-[1.02]"
                >
                  Find Your Team
                  <ArrowRight size={18} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 font-bold text-white transition hover:border-[#ff0a8a] hover:text-[#ff0a8a]"
                >
                  Talk To LilyLocks
                </Link>

              </div>

            </div>


            {/* HERO IMAGE */}

            <div className="relative">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-white/10">

                <Image
                  src="/CheerbowsNew.jpg"
                  alt="LilyLocks cheer accessories"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">

                  <div className="inline-block rounded-full bg-[#E8FF00] px-4 py-2 text-xs font-bold uppercase tracking-wider text-black">
                    Built For Teams
                  </div>

                  <h2 className="heading-font mt-4 text-4xl uppercase md:text-5xl">
                    Your Team.
                    <br />
                    Your Look.
                  </h2>

                </div>

              </div>

            </div>

          </div>


          {/* QUICK NAVIGATION */}

          <div className="mt-20 grid gap-5 md:grid-cols-3">


            <a
              href="#competition"
              className="group rounded-[30px] border border-white/10 bg-white/5 p-7 transition hover:border-[#ff0a8a]"
            >

              <Trophy
                size={30}
                className="text-[#E8FF00]"
              />

              <h2 className="heading-font mt-6 text-3xl uppercase">
                Competition
              </h2>

              <p className="mt-3 text-white/65">
                Big bows, crystal details, and dramatic ponytails
                made to stand out on the competition floor.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ff0a8a]">
                Shop Competition
                <ArrowRight size={16} />
              </div>

            </a>


            <a
              href="#high-school"
              className="group rounded-[30px] border border-white/10 bg-white/5 p-7 transition hover:border-[#ff0a8a]"
            >

              <Users
                size={30}
                className="text-[#E8FF00]"
              />

              <h2 className="heading-font mt-6 text-3xl uppercase">
                High School Teams
              </h2>

              <p className="mt-3 text-white/65">
                Team accessories for game day, pep rallies,
                school events, and competition.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ff0a8a]">
                Shop School Teams
                <ArrowRight size={16} />
              </div>

            </a>


            <a
              href="#cheer-gyms"
              className="group rounded-[30px] border border-white/10 bg-white/5 p-7 transition hover:border-[#ff0a8a]"
            >

              <Package
                size={30}
                className="text-[#E8FF00]"
              />

              <h2 className="heading-font mt-6 text-3xl uppercase">
                Cheer Gyms
              </h2>

              <p className="mt-3 text-white/65">
                Bulk accessories and custom ordering solutions
                for gyms, coaches, and multi-team programs.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ff0a8a]">
                Shop Bulk
                <ArrowRight size={16} />
              </div>

            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPETITION
      ========================================================= */}

      <section
        id="competition"
        className="scroll-mt-24 bg-[#0052cc] px-6 py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#E8FF00]">
                For Competitive Cheer
              </p>

              <h2 className="heading-font mt-4 text-6xl uppercase leading-[0.9] md:text-8xl">
                Competition
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-white/90">
                Your competition look should be impossible to ignore.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Competition is where LilyLocks really gets to go
                big. Our rhinestone and crystal cheer bows add
                sparkle and personality, while our statement
                ponytails bring the volume needed to make your
                team's look pop under the lights.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Whether you're shopping for one athlete or looking
                for accessories for an entire team, you can choose
                the pieces that fit your team's style and budget.
              </p>

              <Link
                href="/competition"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#E8FF00] px-8 py-4 font-bold text-black transition hover:scale-[1.02]"
              >
                Build Your Competition Look
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="relative aspect-[16/10] overflow-hidden rounded-[40px]">

              <Image
                src="/gallery-2.jpg"
                alt="Competition cheer bow"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-sm font-bold uppercase tracking-widest text-[#E8FF00]">
                  Competition Ready
                </p>

                <p className="heading-font mt-2 text-4xl uppercase">
                  Big Hair.
                  <br />
                  Big Impact.
                </p>

              </div>

            </div>

          </div>


          {/* BOW PRODUCTS */}

          <div className="mt-20">

            <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
              Shop Cheer Bows
            </p>

            <h3 className="heading-font mt-2 text-4xl uppercase md:text-5xl">
              Competition Bows
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <ProductCard
                name="Rhinestone Cheer Bow"
                price="$19.99"
                image="/bows/rhinestone-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/rhinestone-cheer-bow/MPLWWVMGMGGMCVJIZ5EXJAG6?cs=true&cst=custom"
                badge="Best Seller"
              />

              <ProductCard
                name="Full Bling AB Crystal Cheer Bow"
                subtitle="White Rainbow"
                price="$23.99"
                image="/bows/full-bling-ab-crystal-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/full-bling-ab-crystal-cheer-bow-white-rainbow-/VJ7YKMIUMCLLFY7SDCOKUEXC?cs=true&cst=custom"
                badge="Full Bling"
              />

              <ProductCard
                name="Pointy Tail AB Crystal Cheer Bow"
                price="$16.99"
                image="/bows/pointy-tail-ab-crystal-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/pointy-tail-ab-crystal-cheer-bow-listing/GZJEAMC3RKCYGCXZVKP72PUQ?cs=true&cst=custom"
                badge="Crystal"
              />

            </div>

          </div>


          {/* PONYTAILS */}

          <div className="mt-20">

            <div className="flex items-end justify-between gap-5">

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
                  Add The Hair
                </p>

                <h3 className="heading-font mt-2 text-4xl uppercase md:text-5xl">
                  Competition Ponytails
                </h3>

              </div>

              <Link
                href="/shop"
                className="hidden items-center gap-2 text-sm font-bold uppercase text-white hover:text-[#E8FF00] md:flex"
              >
                View All
                <ArrowRight size={16} />
              </Link>

            </div>


            <div className="mt-8 grid gap-6 md:grid-cols-3">

              {ponytails.map((product) => (

                <Link
                  key={product.name}
                  href={product.href}
                  className="group overflow-hidden rounded-[30px] bg-black"
                >

                  <div className="relative aspect-square overflow-hidden">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="p-6">

                    <p className="text-xs font-bold uppercase tracking-wider text-[#ff0a8a]">
                      {product.subtitle}
                    </p>

                    <h4 className="heading-font mt-2 text-3xl uppercase">
                      {product.name}
                    </h4>

                    <p className="mt-2 text-white/60">
                      {product.tagline}
                    </p>

                    <p className="mt-4 text-lg font-bold">
                      {product.price}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold uppercase text-[#E8FF00]">
                      View Ponytail
                      <ArrowRight size={16} />
                    </div>

                  </div>

                </Link>

              ))}

            </div>

          </div>


          {/* BULK CTA */}

          <div className="mt-20 rounded-[40px] bg-black p-8 md:p-12">

            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">

              <div>

                <h3 className="heading-font text-4xl uppercase text-[#E8FF00]">
                  Shopping For A Whole Team?
                </h3>

                <p className="mt-4 max-w-2xl leading-relaxed text-white/65">
                  If you're ordering multiple bows or ponytails for
                  your team, we can help you with a bulk order.
                  Tell us your quantity, colors, personalization,
                  and deadline.
                </p>

              </div>

              <Link
                href="/team-orders#cheer-bows-team-orders"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold text-white"
              >
                Request A Bulk Order
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HIGH SCHOOL TEAMS
      ========================================================= */}

      <section
        id="high-school"
        className="scroll-mt-24 bg-black px-6 py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">

            <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-[40px] lg:order-1">

              <Image
                src="/HighSchoolCheerLilylocks.jpg"
                alt="High school cheer team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-sm font-bold uppercase tracking-widest text-[#ff0a8a]">
                  Game Day • Pep Rally • Competition
                </p>

                <p className="heading-font mt-2 text-4xl uppercase">
                  Rep Your School
                </p>

              </div>

            </div>


            <div className="order-1 lg:order-2">

              <p className="text-sm uppercase tracking-[0.3em] text-[#ff0a8a]">
                For School Cheer Programs
              </p>

              <h2 className="heading-font mt-4 text-6xl uppercase leading-[0.9] md:text-8xl">
                High School
                <br />
                Teams
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-white/85">
                Bring your school colors into every look.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                High school cheer teams need accessories that can
                work beyond competition. From Friday night football
                games and pep rallies to school events and
                competitions, LilyLocks gives your squad bold
                accessories that help your team look coordinated.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Choose crystal bows for a little extra sparkle,
                classic styles for everyday team wear, or pair your
                bows with one of our statement ponytails for a
                complete look.
              </p>

              <Link
                href="/shop"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#ff0a8a] px-8 py-4 font-bold text-white transition hover:scale-[1.02]"
              >
                Shop For Your Team
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>


          {/* SCHOOL BOWS */}

          <div className="mt-20">

            <p className="text-sm uppercase tracking-[0.2em] text-[#ff0a8a]">
              Team Favorites
            </p>

            <h3 className="heading-font mt-2 text-4xl uppercase md:text-5xl">
              High School Cheer Bows
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <ProductCard
                name="Rhinestone Cheer Bow"
                price="$19.99"
                image="/bows/rhinestone-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/rhinestone-cheer-bow/MPLWWVMGMGGMCVJIZ5EXJAG6?cs=true&cst=custom"
                badge="Team Favorite"
              />

              <ProductCard
                name="Pointy Tail AB Crystal Cheer Bow"
                price="$16.99"
                image="/bows/pointy-tail-ab-crystal-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/pointy-tail-ab-crystal-cheer-bow-listing/GZJEAMC3RKCYGCXZVKP72PUQ?cs=true&cst=custom"
              />

              <ProductCard
                name="Full Bling AB Crystal Cheer Bow"
                subtitle="White Rainbow"
                price="$23.99"
                image="/bows/full-bling-ab-crystal-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/full-bling-ab-crystal-cheer-bow-white-rainbow-/VJ7YKMIUMCLLFY7SDCOKUEXC?cs=true&cst=custom"
                badge="Statement"
              />

            </div>

          </div>


          {/* SCHOOL BENEFITS */}

          <div className="mt-20 grid gap-6 md:grid-cols-3">

            {[
              {
                title: "School Spirit",
                text: "Build a coordinated look around your school's colors and team identity.",
              },
              {
                title: "Game Day Ready",
                text: "Choose bold accessories that work for football games, pep rallies, and events.",
              },
              {
                title: "Competition Ready",
                text: "Upgrade the look when it's time to step onto the competition floor.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/5 p-8"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8FF00] text-black">
                  <Check size={18} />
                </div>

                <h4 className="heading-font mt-6 text-2xl uppercase text-[#E8FF00]">
                  {item.title}
                </h4>

                <p className="mt-3 leading-relaxed text-white/60">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CHEER GYMS & BULK ORDERS
      ========================================================= */}

      <section
        id="cheer-gyms"
        className="scroll-mt-24 bg-[#0052cc] px-6 py-24 md:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-[#E8FF00]">
                For Gyms, Coaches & Programs
              </p>

              <h2 className="heading-font mt-4 text-6xl uppercase leading-[0.9] md:text-8xl">
                Cheer Gyms
                <br />
                & Bulk Orders
              </h2>

              <p className="mt-8 text-xl leading-relaxed text-white/85">
                Ordering for a team? Let's make it easier.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                LilyLocks works with coaches, cheer gyms, teams,
                and program owners who need accessories in quantity.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Instead of shopping one athlete at a time, submit
                your team details and let us help you put together
                the right order. We can discuss quantities,
                personalization, team colors, and deadlines.
              </p>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Whether you're ordering bows for one squad or
                accessories across multiple teams, we're here to
                help you build an order that makes sense for your
                program.
              </p>

              <Link
                href="/team-orders#cheer-bows-team-orders"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#E8FF00] px-8 py-4 font-bold text-black transition hover:scale-[1.02]"
              >
                Request A Bulk Order
                <ArrowRight size={18} />
              </Link>

            </div>


            <div className="relative aspect-[16/10] overflow-hidden rounded-[40px]">

              <Image
                src="/CheerGymsLilylocks.jpg"
                alt="Cheer gym team"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-7 left-7">

                <p className="text-sm font-bold uppercase tracking-widest text-[#E8FF00]">
                  Built For Bulk
                </p>

                <p className="heading-font mt-2 text-4xl uppercase">
                  More Teams.
                  <br />
                  One Source.
                </p>

              </div>

            </div>

          </div>


          {/* BULK PRODUCTS */}

          <div className="mt-20">

            <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
              Available For Your Program
            </p>

            <h3 className="heading-font mt-2 text-4xl uppercase md:text-5xl">
              Team Accessories
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <ProductCard
                name="Rhinestone Cheer Bow"
                price="$19.99"
                image="/bows/rhinestone-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/rhinestone-cheer-bow/MPLWWVMGMGGMCVJIZ5EXJAG6?cs=true&cst=custom"
                badge="Bulk Favorite"
              />

              <ProductCard
                name="Full Bling AB Crystal Cheer Bow"
                subtitle="White Rainbow"
                price="$23.99"
                image="/bows/full-bling-ab-crystal-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/full-bling-ab-crystal-cheer-bow-white-rainbow-/VJ7YKMIUMCLLFY7SDCOKUEXC?cs=true&cst=custom"
                badge="Premium"
              />

              <ProductCard
                name="Pointy Tail AB Crystal Cheer Bow"
                price="$16.99"
                image="/bows/pointy-tail-ab-crystal-cheer-bow.jpg"
                href="https://lilylocksshop.square.site/product/pointy-tail-ab-crystal-cheer-bow-listing/GZJEAMC3RKCYGCXZVKP72PUQ?cs=true&cst=custom"
                badge="Team Favorite"
              />

            </div>

          </div>


          {/* BULK CAPABILITIES */}

          <div className="mt-20 rounded-[40px] bg-black p-8 md:p-12">

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

              <div>

                <p className="text-sm uppercase tracking-[0.2em] text-[#E8FF00]">
                  Bulk Ordering
                </p>

                <h3 className="heading-font mt-3 text-4xl uppercase md:text-5xl">
                  Built For Your Program
                </h3>

                <p className="mt-5 leading-relaxed text-white/60">
                  Tell us what you're ordering, how many athletes
                  you're outfitting, and when you need everything.
                  We'll help you determine the best way to move
                  forward.
                </p>

              </div>


              <div className="grid gap-5 sm:grid-cols-2">

                {[
                  "Team Bow Orders",
                  "Multiple-Team Orders",
                  "Custom Team Accessories",
                  "Team Color Coordination",
                  "Personalization",
                  "Deadline-Based Ordering",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >

                    <Check
                      size={18}
                      className="shrink-0 text-[#E8FF00]"
                    />

                    <span className="text-sm font-semibold">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="bg-black px-6 py-24 md:py-32">

        <div className="mx-auto max-w-5xl rounded-[40px] bg-[#E8FF00] px-8 py-16 text-center md:px-16 md:py-20">

          <Sparkles
            size={38}
            className="mx-auto text-black"
          />

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-black/60">
            Shopping For A Team?
          </p>

          <h2 className="heading-font mt-4 text-5xl uppercase leading-none text-black md:text-7xl">
            Let's Build
            <br />
            Your Team Look.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">
            Whether you need one bow or accessories for an entire
            program, LilyLocks is here to help you create a look
            your team will love.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/team-orders/#cheer-bows-team-orders"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:scale-[1.02]"
            >
              Request A Bulk Order
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 font-bold text-black transition hover:bg-black hover:text-white"
            >
              Shop All
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}