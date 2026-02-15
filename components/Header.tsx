"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-20">
          {/* Left - Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-3 text-heading hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className="block h-px w-full bg-heading" />
              <span className="block h-px w-full bg-heading" />
              <span className="block h-px w-full bg-heading" />
            </div>
            <span className="text-sm font-medium tracking-wide hidden sm:block">
              MENU
            </span>
          </button>

          {/* Center - Logo */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <span className="block text-lg sm:text-2xl md:text-3xl tracking-[0.15em] sm:tracking-[0.25em] text-heading font-serif">
              INDIANAPOLIS
            </span>
            <span className="block text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-ink -mt-0.5">
              1031 EXCHANGE
            </span>
          </Link>

          {/* Right - Search & Contact */}
          <div className="flex items-center gap-5">
            <button
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5 text-heading"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <Link
              href="/contact"
              className="hidden md:block px-6 py-2.5 border border-teal text-teal text-xs font-medium tracking-wider hover:bg-teal hover:text-white transition-all"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-10 text-heading hover:opacity-70"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="space-y-6">
            {[
              { href: "/property-types", label: "Property Types" },
              { href: "/neighborhoods", label: "Neighborhoods" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-2xl text-heading hover:text-teal transition-colors font-serif"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
