"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, UserRound, ShoppingBag } from "lucide-react";
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
      <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-black">
        <nav
          className="
            mx-auto
            flex
            h-[100px]
            w-full
            max-w-[1600px]
            items-center
            px-5
            md:px-8
            lg:px-10
          "
        >
          {/* LOGO */}
          <Link
            href="/"
            className="
              relative
              mr-8
              h-[55px]
              w-[105px]
              shrink-0
              md:mr-10
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
          <div className="hidden flex-1 items-center justify-between md:flex">
            
            {/* Navigation Links */}
            <div className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="
                    whitespace-nowrap
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[-0.01em]
                    text-white
                    transition-colors
                    duration-200
                    hover:text-[#ff0a8a]
                    lg:text-[14px]
                  "
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="ml-6 flex shrink-0 items-center gap-4">
              
              {/* Search */}
              <Link
                href="/search"
                aria-label="Search"
                className="text-white transition hover:text-[#ff0a8a]"
              >
                <Search size={17} strokeWidth={1.8} />
              </Link>

              {/* Account */}
              <Link
                href="/account"
                aria-label="Account"
                className="text-white transition hover:text-[#ff0a8a]"
              >
                <UserRound size={17} strokeWidth={1.8} />
              </Link>

              {/* Shopping Bag */}
              <Link
                href="/cart"
                aria-label="Shopping bag"
                className="text-white transition hover:text-[#ff0a8a]"
              >
                <ShoppingBag size={17} strokeWidth={1.8} />
              </Link>

              {/* CTA */}
              <Link
                href="https://lilylocksshop.square.site/bulkorders"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ml-1
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
          </div>

          {/* MOBILE */}
          <div className="ml-auto flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white"
              aria-label="Open menu"
            >
              <Menu size={28} strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-[120] bg-black text-white">
          
          {/* Close */}
          <div className="flex h-[80px] items-center justify-end px-6">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-white transition hover:text-[#ff0a8a]"
            >
              <X size={30} strokeWidth={1.8} />
            </button>
          </div>

          {/* Mobile Logo */}
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

          {/* Links */}
          <div className="flex flex-col items-center gap-7 pt-14">
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

            {/* Mobile CTA */}
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