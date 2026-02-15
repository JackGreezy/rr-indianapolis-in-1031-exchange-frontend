"use client";

import { useState } from "react";
import Link from "next/link";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z"
        fill="#C9A065"
      />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

const services = [
  {
    id: "delayed-exchange",
    name: "Delayed Exchange",
    description:
      "The most common 1031 strategy where you sell your relinquished property first, then identify and acquire replacement properties within IRS timeframes.",
  },
  {
    id: "reverse-exchange",
    name: "Reverse Exchange",
    description:
      "Acquire your replacement property before selling your current property. Ideal when you've found the perfect investment opportunity.",
  },
  {
    id: "improvement-exchange",
    name: "Improvement Exchange",
    description:
      "Use exchange funds to improve or construct on the replacement property. Perfect for investors who want to develop or renovate.",
  },
  {
    id: "build-to-suit",
    name: "Build-to-Suit",
    description:
      "Custom construction on replacement property to meet your specific investment criteria and maximize returns.",
  },
  {
    id: "qualified-intermediary",
    name: "Qualified Intermediary",
    description:
      "Secure handling of exchange funds and documentation to ensure full IRS compliance throughout your exchange.",
  },
  {
    id: "dst-investments",
    name: "DST Investments",
    description:
      "Delaware Statutory Trust investments for passive 1031 exchange opportunities with institutional-quality properties.",
  },
];

export default function ServicesShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = services[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section id="services">
      {/* Section Title */}
      <div className="py-16 bg-paper text-center">
        <div className="container">
          <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl text-heading font-serif italic">
            Our Services
          </h2>
        </div>
      </div>

      {/* Service Content */}
      <div className="bg-teal">
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20"
            aria-label="Next service"
          >
            <div
              className="w-14 h-14 sm:w-20 sm:h-20 bg-paper flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              style={{
                borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
              }}
            >
              <svg
                className="w-5 h-5 text-heading"
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
            </div>
          </button>

          <div className="py-12 px-6 pr-20 sm:py-16 sm:px-8 sm:pr-28 lg:px-16 text-center max-w-3xl mx-auto">
            <h3 className="text-4xl lg:text-5xl text-white mb-6 font-serif italic">
              {current.name}
            </h3>
            <p className="text-white/80 leading-relaxed mb-8 text-lg">
              {current.description}
            </p>
            <Link
              href={`/services/${current.id}`}
              className="btn btn-outline-white"
            >
              Explore Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
