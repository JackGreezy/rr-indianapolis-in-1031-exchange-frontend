import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

function SparkleIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <path d="M20 4L22 16L34 20L22 24L20 36L18 24L6 20L18 16L20 4Z" fill="#C9A065" />
      <circle cx="10" cy="10" r="2" fill="#C9A065" />
      <circle cx="30" cy="10" r="2" fill="#C9A065" />
      <circle cx="10" cy="30" r="2" fill="#C9A065" />
      <circle cx="30" cy="30" r="2" fill="#C9A065" />
    </svg>
  );
}

const propertyTypes = [
  { id: "nnn", name: "NNN Properties", image: "/property-types/nnn/nnn-in.jpg" },
  { id: "retail", name: "Retail", image: "/property-types/retail/retail-in.jpg" },
  { id: "office", name: "Office Buildings", image: "/property-types/office/office-in.jpg" },
  { id: "industrial", name: "Industrial", image: "/property-types/industrial/industrial-in.webp" },
  { id: "multifamily", name: "Multifamily", image: "/property-types/multifamily/multifamily-in.jpg" },
  { id: "medical", name: "Medical Office", image: "/property-types/medical/medical-in.jpg" },
  { id: "hospitality", name: "Hospitality", image: "/property-types/hospitality/hospitality-in.jpg" },
  { id: "mixed-use", name: "Mixed-Use", image: "/property-types/mixed-use/mixed-use-in.webp" },
  { id: "self-storage", name: "Self-Storage", image: "/property-types/self-storage/self-storage-in.jpg" },
  { id: "land", name: "Land", image: "/property-types/land/land-in.avif" },
  { id: "net-lease", name: "Single-Tenant Net Lease", image: "/property-types/net-lease/net-lease-in.webp" },
  { id: "automotive", name: "Automotive & Service", image: "/property-types/automotive/automotive-in.webp" },
];

export default function PropertyTypesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Property Types" }]} />
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Property Types
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              We facilitate 1031 exchanges across all property types. Don&apos;t see yours?{" "}
              <Link href="/contact" className="underline">Contact us</Link> and we&apos;ll help.
            </p>
          </div>
        </section>

        {/* Property Types Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertyTypes.map((type) => (
                <Link
                  key={type.id}
                  href={`/property-types/${type.id}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl text-heading font-serif italic">
                    {type.name}
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
