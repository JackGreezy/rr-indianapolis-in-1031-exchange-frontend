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

const topNeighborhoods = [
  {
    id: "meridian-hills",
    name: "Meridian Hills",
    image: "/neighborhoods/meridian-hills/meridian-hills-in.avif",
  },
  {
    id: "geist",
    name: "Geist",
    image: "/neighborhoods/geist/geist-in.jpg",
  },
  {
    id: "carmel",
    name: "Carmel",
    image: "/neighborhoods/carmel/carmel-in.jpg",
  },
];

export default function NeighborhoodShowcase() {
  return (
    <section id="neighborhoods" className="py-24 bg-paper">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
          <h2 className="text-5xl md:text-6xl text-heading font-serif italic">
            Indianapolis Neighborhoods
          </h2>
        </div>

        {/* Three Arch Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
          {topNeighborhoods.map((neighborhood) => (
            <Link
              key={neighborhood.id}
              href={`/neighborhoods/${neighborhood.id}`}
              className="group text-center"
            >
              {/* Arch Image */}
              <div className="relative mb-6">
                {/* Soft gradient fade at top */}
                <div
                  className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(250,249,246,0.85) 0%, rgba(250,249,246,0.3) 50%, transparent 100%)",
                    borderRadius: "180px 180px 0 0",
                  }}
                />
                <div
                  className="relative overflow-hidden mx-auto"
                  style={{
                    borderRadius: "180px 180px 0 0",
                    aspectRatio: "3/4",
                    maxWidth: "280px",
                  }}
                >
                  <img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-2xl text-heading font-serif italic">
                {neighborhood.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/neighborhoods" className="btn btn-outline">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
