
import Image from "next/image";

const featuredCards = [
  {
    image: "/Bulidforteams/Lilylocks_Teams2.jpg",
    imageAlt: "Cheer athlete wearing a LilyLocks competition ponytail",
    eyebrow: "COMPETITION HAIR",
    title: (
      <>
        The Ponytail
        <br />
        Your Team Will
        <br />
        Compete In.
      </>
    ),
    description:
      "Premium competition ponytails made for cheer teams, dancers & performance programs.",
    button: "Shop Ponytails",
    href: "/ponytails",
    theme: "dark",
    imagePosition: "object-[62%_center]",
  },
  {
    image: "/bows/full-bling-ab-crystal-cheer-bow.jpg",
    imageAlt: "LilyLocks rhinestone cheer bow",
    eyebrow: "CHEER BOWS",
    title: (
      <>
        Finish Your
        <br />
        Competition
        <br />
        Look.
      </>
    ),
    description:
      "Statement bows designed to bring your team's colors and personality to the mat.",
    button: "Shop Cheer Bows",
    href: "/cheer-bows",
    theme: "pink",
    imagePosition: "object-contain",
  },
  {
    image: "/Bulidforteams/Lilylocks_Teams6.jpg",
    imageAlt: "LilyLocks back to cheer collection",
    eyebrow: "BACK TO CHEER",
    title: (
      <>
        20% Off
        <br />
        Your Cheer
        <br />
        Essentials.
      </>
    ),
    description:
      "Get competition-ready for the new season with 20% off select LilyLocks styles.",
    button: "Shop the Sale",
    href: "https://lilylocksshop.square.site/sale",
    theme: "lime",
    imagePosition: "object-top",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-black px-3 py-3 sm:px-4 sm:py-4">
      <div className="mx-auto grid max-w-[1350px] grid-cols-1 gap-2.5 md:grid-cols-3">

        {featuredCards.map((card) => (
          <article
            key={card.eyebrow}
            className="group flex flex-col overflow-hidden rounded-[3px] bg-white"
          >
            {/* IMAGE */}
            <div className="relative h-[260px] w-full overflow-hidden bg-neutral-100 sm:h-[285px] md:h-[275px] lg:h-[295px]">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${card.imagePosition}`}
              />

              {/* LilyLocks Badge */}
              {/* <div className="absolute left-3 top-3">
                <span className="inline-flex items-center rounded-full bg-black px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-white">
                  LilyLocks
                </span>
              </div> */}

              {/* Sale Badge */}
              {card.theme === "lime" && (
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center rounded-full bg-[#ff0a8a] px-2.5 py-1 text-[18px] font-black uppercase tracking-[0.08em] text-white">
                    20% OFF
                  </span>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div
              className={`flex min-h-[210px] flex-1 flex-col justify-between px-5 py-5 sm:min-h-[215px] sm:px-6 sm:py-5 ${
                card.theme === "dark"
                  ? "bg-[#181818] text-white"
                  : card.theme === "pink"
                    ? "bg-[#ff0a8a] text-white"
                    : "bg-[#dfff00] text-black"
              }`}
            >
              <div>
                {/* Eyebrow */}
                <p
                  className={`mb-2 text-[8px] font-black uppercase tracking-[0.18em] ${
                    card.theme === "lime"
                      ? "text-black/60"
                      : "text-white/65"
                  }`}
                >
                  {card.eyebrow}
                </p>

                {/* Heading */}
                <h2 className="heading-font text-[25px] uppercase leading-[0.94] tracking-tight sm:text-[27px] lg:text-[29px]">
                  {card.title}
                </h2>

                {/* Description */}
                <p
                  className={`mt-3 max-w-[360px] text-[14px] leading-[1.45] sm:text-sm ${
                    card.theme === "lime"
                      ? "text-black/75"
                      : "text-white/80"
                  }`}
                >
                  {card.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-5">
                <a
                  href={card.href}
                  className={`inline-flex items-center gap-1.5 text-[14px] font-black uppercase tracking-[0.12em] transition-all duration-200 ${
                    card.theme === "dark"
                      ? "text-[#dfff00] hover:text-white"
                      : card.theme === "pink"
                        ? "text-white hover:text-black"
                        : "text-black hover:text-[#ff0a8a]"
                  }`}
                >
                  {card.button}
                  <span className="text-xs leading-none transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

