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

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Arch Image with Light Gray Background */}
      <div className="relative bg-gray-light py-16 px-8 lg:px-16 flex items-center justify-center min-h-[550px]">
        {/* Arch Image */}
        <div className="relative w-full max-w-sm">
          {/* Soft gradient fade at top */}
          <div
            className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(229,226,219,0.9) 0%, rgba(229,226,219,0.3) 50%, transparent 100%)",
              borderRadius: "250px 250px 0 0",
            }}
          />
          <div
            className="relative overflow-hidden"
            style={{
              borderRadius: "250px 250px 0 0",
              aspectRatio: "3/4",
            }}
          >
            <img
              src="/neighborhoods/downtown/downtown-in.jpg"
              alt="Indianapolis architecture and downtown"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right - Teal Content */}
      <div className="bg-teal flex items-center py-16 px-8 lg:px-16 min-h-[550px]">
        <div className="max-w-lg mx-auto lg:mx-0">
          <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl text-white mb-8 font-serif italic">
            About Us
          </h2>
          <p className="text-white/80 leading-relaxed mb-6 text-lg">
            Founded with a commitment to excellence, Indianapolis 1031 Exchange
            represents a trusted connection between investors and tax-advantaged
            opportunities throughout the Indianapolis region through highly
            trained and cultivated advisors.
          </p>
          <p className="text-white/80 leading-relaxed mb-10 text-lg">
            Our focused mission is on serving the investment community now and
            into the future with personalized service and expert guidance.
          </p>
          <Link href="/about" className="btn btn-outline-white">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
