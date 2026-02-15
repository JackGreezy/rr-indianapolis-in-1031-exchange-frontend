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

const propertyTypes = [
  {
    id: "nnn",
    name: "NNN Properties",
    image: "/property-types/nnn/nnn-in.jpg",
  },
  {
    id: "retail",
    name: "Retail",
    image: "/property-types/retail/retail-in.jpg",
  },
  {
    id: "office",
    name: "Office Buildings",
    image: "/property-types/office/office-in.jpg",
  },
  {
    id: "industrial",
    name: "Industrial",
    image: "/property-types/industrial/industrial-in.webp",
  },
  {
    id: "multifamily",
    name: "Multifamily",
    image: "/property-types/multifamily/multifamily-in.jpg",
  },
  {
    id: "medical",
    name: "Medical Office",
    image: "/property-types/medical/medical-in.jpg",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    image: "/property-types/hospitality/hospitality-in.jpg",
  },
  {
    id: "mixed-use",
    name: "Mixed-Use",
    image: "/property-types/mixed-use/mixed-use-in.webp",
  },
  {
    id: "self-storage",
    name: "Self-Storage",
    image: "/property-types/self-storage/self-storage-in.jpg",
  },
  {
    id: "land",
    name: "Land",
    image: "/property-types/land/land-in.avif",
  },
  {
    id: "net-lease",
    name: "Single-Tenant Net Lease",
    image: "/property-types/net-lease/net-lease-in.webp",
  },
  {
    id: "automotive",
    name: "Automotive & Service",
    image: "/property-types/automotive/automotive-in.webp",
  },
];

const ITEMS_PER_PAGE = 3;

export default function PropertyTypesShowcase() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(propertyTypes.length / ITEMS_PER_PAGE);

  const currentItems = propertyTypes.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="property-types" className="py-24 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl text-heading font-serif italic mb-4">
            Property Types
          </h2>
          <p className="text-ink max-w-2xl mx-auto">
            We facilitate 1031 exchanges across all property types. Don&apos;t
            see yours listed? <Link href="/contact" className="text-teal underline">Contact us</Link> and
            we&apos;ll help you find the right solution.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {currentItems.map((property) => (
            <Link
              key={property.id}
              href={`/property-types/${property.id}`}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h3 className="text-2xl text-heading font-serif italic">
                {property.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            className="w-10 h-10 flex items-center justify-center text-heading disabled:opacity-30"
            aria-label="Previous page"
          >
            <svg
              className="w-4 h-4"
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

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-10 h-10 flex items-center justify-center text-sm font-serif ${
                i === currentPage
                  ? "border border-heading text-heading"
                  : "text-ink hover:text-heading"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            className="w-10 h-10 flex items-center justify-center text-heading disabled:opacity-30"
            aria-label="Next page"
          >
            <svg
              className="w-4 h-4"
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
