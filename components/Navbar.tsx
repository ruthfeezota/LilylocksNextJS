"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import TopBanner from "@/src/components/TopBanner";

const navLinks = [
  {
    label: "Shop Ponytails",
    href: "/ponytails",
  },
  {
    label: "Team Orders",
    href: "/team-orders",
  },
  {
    label: "Team Accessories",
    href: "/cheer-bows",
  },
  {
    label: "Color Matching",
    href: "/color-match",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP ANNOUNCEMENT */}
      <TopBanner />

      {/* NAVBAR */}
      <header className="sticky top-0 z-[100] w-full overflow-x-hidden border-b border-white/10 bg-black">
        <nav
          className="
            mx-auto
            flex
            h-[100px]
            w-full
            min-w-0
            items-center
            px-5
            md:px-7
            lg:px-8
            xl:px-10
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            className="
              relative
              h-[55px]
              w-[105px]
              shrink-0
              md:h-[58px]
              md:w-[110px]
            "
          >
            <Image
              src="/LilylocksLogo.png"
              alt="LilyLocks"
              fill
              priority
              sizes="110px"
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="ml-auto hidden min-w-0 items-center gap-5 lg:flex xl:gap-7">

            {/* NAVIGATION LINKS */}
            <div className="flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    whitespace-nowrap
                    text-[14px]
                    font-bold
                    uppercase
                    tracking-[-0.01em]
                    text-white
                    transition-colors
                    duration-200
                    hover:text-[#ff0a8a]
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="https://lilylocksshop.square.site/bulkorders"
              target="_blank"
              rel="noopener noreferrer"
              className="
                shrink-0
                whitespace-nowrap
                rounded-full
                bg-[#ff0a8a]
                px-5
                py-2.5
                text-[14px]
                font-bold
                uppercase
                tracking-wide
                text-white
                transition-all
                duration-200
                hover:bg-white
                hover:text-black
              "
            >
              Start a Team Order
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="ml-auto flex items-center lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="
                text-white
                transition
                hover:text-[#ff0a8a]
              "
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-[120] overflow-y-auto bg-black text-white">

          {/* CLOSE BUTTON */}
          <div className="flex h-[80px] items-center justify-end px-6">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="
                text-white
                transition
                hover:text-[#ff0a8a]
              "
            >
              <X size={30} strokeWidth={1.8} />
            </button>
          </div>

          {/* MOBILE LOGO */}
          <div className="flex justify-center pt-4">
            <div className="relative h-[70px] w-[140px]">
              <Image
                src="/LilylocksLogo.png"
                alt="LilyLocks"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* MOBILE LINKS */}
          <div className="flex flex-col items-center gap-7 px-6 pb-12 pt-14">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  heading-font
                  text-2xl
                  uppercase
                  text-white
                  transition
                  hover:text-[#ff0a8a]
                "
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE CTA */}
            <Link
              href="https://lilylocksshop.square.site/bulkorders"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-5
                rounded-full
                bg-[#ff0a8a]
                px-8
                py-3.5
                text-sm
                font-bold
                uppercase
                tracking-wide
                text-white
                transition
                hover:bg-white
                hover:text-black
              "
            >
              Start a Team Order
            </Link>
          </div>
        </div>
      )}
    </>
  );
}