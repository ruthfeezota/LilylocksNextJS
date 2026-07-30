
"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Menu,
  X,
  ShoppingBag,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import TopBanner from "@/src/components/TopBanner";

const navLinks = [

    {
    label: "Ponytails",
    href: "/ponytails",
  },
  
    {
    label: "Cheer Bows",
    href: "/cheer-bows",
  },

    {
    label: "Custom Orders",
    href: "/team-orders",
  },
  {
    label: "Color Match",
    href: "/color-match",
  },
  { label: "About Us", href: "/about" },
  {
    label: "Hair Care Guide",
    href: "/hair-care-guide",
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] =
    useState(false);


  return (
    <>
      {/* GLOBAL NAV */}
      <TopBanner />

      <header
        className="
          sticky
          top-0
          z-[100]
          w-full
          border-b
          border-white/10
          bg-[#0052cc]/85
          backdrop-blur-md
        "
      >
        <nav
          className="
            mx-auto
            flex
            h-[110px]
            max-w-[1600px]
            items-center
            justify-between
            px-6
            md:px-10
            lg:px-14
          "
        >
          {/* Logo */}
          <Link
            href="/"
            className="
              relative
              h-[80px]
              w-[170px]
              shrink-0
            "
          >
            <Image
              src="/LilylocksLogo.png"
              alt="LilyLocks"
              fill
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div
            className="
              hidden
              items-center
              gap-8
              md:flex
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  text-[17px]
                  font-semibold
                  text-white
                  transition
                  hover:text-[#ff0a8a]
                "
              >
                {link.label}
              </Link>
            ))}

            

            {/* Bulk Orders Button */}
           <Link
  href="https://lilylocksshop.square.site/bulkorders"
  target="_blank"
  rel="noopener noreferrer"
  className="
    ml-2
    rounded-full
    bg-[#ff0a8a]
    px-6
    py-3
    text-[15px]
    font-bold
    text-white
    transition
    hover:bg-white
    hover:text-[#0052cc]
  "
>
  Start Bulk Order
</Link>
          </div>

          {/* Mobile Right Side */}
          <div
            className="
              flex
              items-center
              gap-5
              md:hidden
            "
          >
           

            {/* Mobile Menu */}
            <button
              onClick={() =>
                setMenuOpen(true)
              }
              className="text-white"
              aria-label="Open menu"
            >
              <Menu size={34} />
            </button>
          </div>
        </nav>
      </header>

     

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[120]
            bg-black/95
            text-white
          "
        >
          {/* Close */}
          <div
            className="
              flex
              justify-end
              p-8
            "
          >
            <button
              onClick={() =>
                setMenuOpen(false)
              }
              aria-label="Close menu"
            >
              <X size={36} />
            </button>
          </div>

          {/* Links */}
          <div
            className="
              flex
              flex-col
              items-center
              gap-8
              pt-10
            "
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  heading-font
                  text-3xl
                  uppercase
                  hover:text-[#ff0a8a]
                "
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Bulk Orders Button */}
            <Link
              href="https://lilylocksshop.square.site/bulkorders"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-4
                rounded-full
                bg-[#ff0a8a]
                px-8
                py-4
                text-lg
                font-bold
                text-white
                transition
                hover:bg-white
                hover:text-[#0052cc]
              "
            >
              Start Bulk Order
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
