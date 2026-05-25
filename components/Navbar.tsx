"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Team Orders", href: "/team-orders" },
  { label: "Color Match", href: "/color-match" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Hair Care Guide", href: "/hair-care-guide" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* GLOBAL NAV */}
      <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-[#0052cc]/85 backdrop-blur-md">
        <nav className="mx-auto flex h-[110px] max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-14">
          {/* Logo */}
          <Link
            href="/"
            className="relative h-[80px] w-[170px] shrink-0"
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
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[17px] font-semibold text-white transition hover:text-[#ff0a8a]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={34} />
          </button>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <div className="fixed inset-0 z-[120] bg-black/95 text-white">
          {/* Close */}
          <div className="flex justify-end p-8">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={36} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-8 pt-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="heading-font text-3xl uppercase hover:text-[#ff0a8a]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}