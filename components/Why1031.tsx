"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const benefits = [
  {
    title: "Defer Capital Gains Taxes",
    description:
      "With a stepped-up basis at death, your heirs may never pay the deferred capital gains taxes, creating generational wealth.",
  },
  {
    title: "Accelerate Wealth Building",
    description:
      "By deferring taxes, you can reinvest 100% of your equity into larger properties, accelerating portfolio growth exponentially.",
  },
  {
    title: "Portfolio Diversification",
    description:
      "Exchange into different property types or geographic locations without triggering immediate tax consequences.",
  },
  {
    title: "Improved Cash Flow",
    description:
      "Trade into properties with better cap rates, stronger tenants, or lower management burden to optimize returns.",
  },
  {
    title: "Estate Planning Benefits",
    description:
      "Properties can be exchanged indefinitely, with heirs receiving stepped-up basis that may eliminate all deferred gains.",
  },
];

export default function Why1031() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = benefits[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  return (
    <section
      id="why-1031"
      className="relative min-h-[550px] flex items-center"
      style={{
        backgroundImage:
          "url('/neighborhoods/downtown/downtown-in.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left - Static Title */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif leading-tight mb-8">
              See Why 1031<br />
              Exchanges Work
            </h2>
            <Link href="/why-1031" className="btn btn-outline-white">
              View All
            </Link>
          </div>

          {/* Right - Rotating Benefit */}
          <div className="text-right">
            <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed mb-4 transition-all duration-500">
              {current.description}
            </p>
            <p className="text-gold text-sm tracking-widest uppercase mb-8">
              {current.title}
            </p>

            {/* Dots */}
            <div className="flex justify-end gap-2">
              {benefits.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? "bg-gold" : "bg-white/40"
                  }`}
                  aria-label={`Go to benefit ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute bottom-8 right-8 flex">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white flex items-center justify-center hover:bg-paper transition-colors"
            aria-label="Previous benefit"
          >
            <svg
              className="w-4 h-4 text-heading"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white flex items-center justify-center hover:bg-paper transition-colors"
            aria-label="Next benefit"
          >
            <svg
              className="w-4 h-4 text-heading"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
