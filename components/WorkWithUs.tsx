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

export default function WorkWithUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left - Image */}
      <div className="relative min-h-[450px] lg:min-h-[500px]">
        <img
          src="/neighborhoods/meridian-hills/meridian-hills-in.avif"
          alt="Modern property"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Right - Teal Content */}
      <div className="bg-teal flex flex-col justify-center py-16 px-8 lg:px-16 text-center min-h-[450px]">
        <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
        <h2 className="text-4xl lg:text-5xl text-white mb-6 font-serif italic">
          Work With Us
        </h2>
        <p className="text-white/80 leading-relaxed max-w-md mx-auto mb-8">
          We&apos;ve been facilitating 1031 exchanges for investors throughout
          Central Indiana for over two decades. Our devoted team offers
          individualized attention, personalized service, and expert guidance.
        </p>
        <Link href="/contact" className="btn btn-outline-white mx-auto">
          Contact Us
        </Link>
      </div>
    </section>
  );
}
