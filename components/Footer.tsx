export default function Footer() {
  return (
    <footer className="bg-[#0057d8] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top Row */}
        <div className="flex flex-col gap-10 border-b border-white/20 pb-12 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="max-w-md">
            <h2 className="heading-font text-4xl uppercase">
              LilyLocks
            </h2>

            <p className="mt-4 text-lg text-white/90 leading-relaxed">
              Premium ponytails built for elite cheer teams,
              athletes, and programs that want polished,
              competition-ready performance.
            </p>
          </div>

          {/* CTA */}
          <a href="/contact#contact-form">
          <button className="rounded-full bg-[#ff0a8a] px-8 py-4 font-bold text-white transition hover:scale-105">
            Ask A Question
          </button>
          </a>
        </div>

        {/* Middle Links */}
        <div className="grid gap-12 py-14 text-center md:grid-cols-3 md:text-left">
          {/* Programs */}
          <div>
            <h3 className="heading-font text-2xl uppercase">
              For Programs
            </h3>

            <ul className="mt-5 space-y-3 text-lg text-white/90">
            <a href="/team-orders">
              <li>Team Orders</li>
            </a>
            <a href="/team-orders#team-pricing">
              <li>Team Pricing</li>
            </a>
            <a href="/color-match">
              <li>Team Color Match</li>
              </a>
              <a href="/contact#contact-form">
              <li>Ask A Question</li>
              </a>
            </ul>
          </div>

          {/* Athletes */}
          <div>
            <h3 className="heading-font text-2xl uppercase">
              For Athletes
            </h3>

            <ul className="mt-5 space-y-3 text-lg text-white/90">
            <a href="/hair-care-guide">
              <li>Competition Care Guide</li>
              </a>

              {/* <li>How To Wear</li> */}
              <a href="/color-match">
              <li>Color Match Guide</li>
              </a>
            </ul>
          </div>

          {/* Story */}
          <div>
            <h3 className="heading-font text-2xl uppercase">
              Our Story
            </h3>

            <ul className="mt-5 space-y-3 text-lg text-white/90">
              <a href="/about">
                <li>Why LilyLocks</li>
              </a>
              <a href="/about#our-story">
                <li>From Handmade To Team Supplier</li>
              </a>
              <a href="/contact">
                <li>Contact Us</li>
              </a>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col gap-4 border-t border-white/20 pt-8 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 LilyLocks. All Rights Reserved.</p>

          <div className="flex gap-6">
            {/* <span>Instagram</span>
            <span>TikTok</span>
            <span>Pinterest</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}