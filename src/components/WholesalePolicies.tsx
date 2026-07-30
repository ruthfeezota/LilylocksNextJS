import {
  ClipboardList,
  CalendarClock,
  Palette,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

export default function WholesalePolicies() {
  const policies = [
    {
      icon: <ClipboardList size={32} />,
      title: "Minimum Order",
      text: "Bulk orders are designed for schools, gyms, and organizations. Minimum quantities may apply depending on the product and customization requested.",
    },
    {
      icon: <CalendarClock size={32} />,
      title: "Production Timeline",
      text: "Production time varies based on order size and customization. We recommend placing team orders as early as possible before competitions or the start of the season.",
    },
    {
      icon: <Palette size={32} />,
      title: "Color Matching",
      text: "We offer multiple standard shades and custom color matching for qualifying team orders. Color approval may be required before production begins.",
    },
    {
      icon: <PackageCheck size={32} />,
      title: "Quality Inspection",
      text: "Every LilyLocks ponytail is individually inspected before shipment to ensure consistent color, construction, and overall quality across your team's order.",
    },
    {
      icon: <RotateCcw size={32} />,
      title: "Returns & Cancellations",
      text: "Because wholesale ponytails are custom produced, team orders are generally non-refundable once production has begun. Please review your order carefully before approval.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Shipping",
      text: "Shipping timelines depend on production schedules and destination. Tracking information will be provided once your order ships.",
    },
  ];

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="mb-4 uppercase tracking-[0.25em] text-[#E8FF00]">
            Wholesale Information
          </p>

          <h2 className="heading-font text-5xl uppercase md:text-6xl">
            Wholesale Policies
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/75">
            We want every coach, gym owner, and team coordinator to know exactly
            what to expect before placing a bulk order. Our production process
            is built around consistency, communication, and delivering
            competition-ready products your athletes can rely on.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <div
              key={policy.title}
              className="rounded-[36px] border border-white/10 bg-[#141414] p-8 transition hover:-translate-y-1 hover:border-[#E8FF00]"
            >
              <div className="text-[#E8FF00]">
                {policy.icon}
              </div>

              <h3 className="heading-font mt-6 text-3xl uppercase">
                {policy.title}
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                {policy.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[40px] bg-[#0052cc] p-12 text-center">
          <h3 className="heading-font text-4xl uppercase">
            Need Something Custom?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90">
            Looking for custom team colors, special quantities, branded bows,
            or a unique production schedule? We'd love to work with you. Contact
            us before ordering and we'll help create the best solution for your
            program.
          </p>
        </div>
      </div>
    </section>
  );
}