"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function Logo() {
  return (
    <svg
      width="36"
      height="22"
      viewBox="0 0 36 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FTLOTG logo"
    >
      <circle cx="13" cy="11" r="10.5" stroke="currentColor" strokeWidth="4" fill="none" />
      <circle cx="23" cy="11" r="10.5" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <nav className="mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* Left: all four nav links (desktop only) */}
        <ul className="desktop:flex hidden gap-6 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base text-off-black supports-hover:hover:underline transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: hamburger (left side) */}
        <button
          className="tablet:flex hidden items-center justify-center w-8 h-8"
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-5 h-[1.5px] bg-off-black transition-transform origin-center ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-off-black transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-off-black transition-transform origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </div>
        </button>

        {/* Centre: Logo (always) */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-off-black"
          aria-label="Home"
        >
          <Logo />
        </Link>

        {/* Right: Search + Cart (always visible) */}
        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-base text-off-black supports-hover:hover:underline transition-colors"
          >
            Search
          </button>
          <button
            aria-label="Cart"
            className="text-base text-off-black supports-hover:hover:underline transition-colors"
          >
            Cart
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`tablet:block hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-200 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-4 flex flex-col gap-4 list-none m-0">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-base text-off-black"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
