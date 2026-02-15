import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

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

const neighborhoods = [
  { id: "meridian-hills", name: "Meridian Hills", image: "/neighborhoods/meridian-hills/meridian-hills-in.avif" },
  { id: "geist", name: "Geist", image: "/neighborhoods/geist/geist-in.jpg" },
  { id: "carmel", name: "Carmel", image: "/neighborhoods/carmel/carmel-in.jpg" },
  { id: "zionsville", name: "Zionsville", image: "/neighborhoods/zionsville/zionsville-in.jpg" },
  { id: "fishers", name: "Fishers", image: "/neighborhoods/fishers/fishers-in.jpg" },
  { id: "noblesville", name: "Noblesville", image: "/neighborhoods/noblesville/noblesville-in.jpg" },
  { id: "westfield", name: "Westfield", image: "/neighborhoods/westfield/westfield-in.webp" },
  { id: "brownsburg", name: "Brownsburg", image: "/neighborhoods/brownsburg/brownsburg-in.jpeg" },
  { id: "avon", name: "Avon", image: "/neighborhoods/avon/avon-in.webp" },
  { id: "greenwood", name: "Greenwood", image: "/neighborhoods/greenwood/greenwood-in.jpg" },
  { id: "downtown", name: "Downtown Indianapolis", image: "/neighborhoods/downtown/downtown-in.jpg" },
  { id: "broad-ripple", name: "Broad Ripple", image: "/neighborhoods/broad-ripple/broad-ripple-in.jpeg" },
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Neighborhoods" }]} />
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Indianapolis Neighborhoods
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Explore the diverse neighborhoods of Indianapolis, each offering
              unique investment opportunities for your 1031 exchange.
            </p>
          </div>
        </section>

        {/* Neighborhoods Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.id}
                  href={`/neighborhoods/${neighborhood.id}`}
                  className="group text-center"
                >
                  <div className="relative mb-6">
                    <div
                      className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, rgba(250,249,246,0.85) 0%, rgba(250,249,246,0.3) 50%, transparent 100%)",
                        borderRadius: "180px 180px 0 0",
                      }}
                    />
                    <div
                      className="relative overflow-hidden mx-auto"
                      style={{ borderRadius: "180px 180px 0 0", aspectRatio: "3/4", maxWidth: "280px" }}
                    >
                      <img
                        src={neighborhood.image}
                        alt={neighborhood.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl text-heading font-serif italic">
                    {neighborhood.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
