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

const services = [
  { id: "delayed-exchange", name: "Delayed Exchange", description: "The most common 1031 exchange strategy" },
  { id: "reverse-exchange", name: "Reverse Exchange", description: "Acquire before selling your current property" },
  { id: "improvement-exchange", name: "Improvement Exchange", description: "Use exchange funds for property improvements" },
  { id: "build-to-suit", name: "Build-to-Suit", description: "Custom construction on replacement property" },
  { id: "qualified-intermediary", name: "Qualified Intermediary", description: "Secure handling of exchange funds" },
  { id: "dst-investments", name: "DST Investments", description: "Delaware Statutory Trust opportunities" },
  { id: "consultation", name: "Exchange Consultation", description: "Expert guidance for your exchange" },
  { id: "property-identification", name: "Property Identification", description: "Help finding replacement properties" },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Services" }]} />
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              Our Services
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Comprehensive 1031 exchange services tailored to your investment goals.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group text-center p-8 border border-gray-200 hover:border-teal transition-colors"
                >
                  <SparkleIcon className="w-6 h-6 mx-auto mb-4" />
                  <h3 className="text-2xl text-heading font-serif italic mb-2 group-hover:text-teal transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-ink text-sm">{service.description}</p>
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
