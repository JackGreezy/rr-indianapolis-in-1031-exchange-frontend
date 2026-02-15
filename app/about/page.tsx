import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Indianapolis 1031 Exchange Experts",
  description: "Learn about Indianapolis 1031 Exchange, your trusted partner for tax-deferred real estate investments. Over 20 years of experience helping Central Indiana investors.",
  keywords: [
    "Indianapolis 1031 exchange company",
    "qualified intermediary Indianapolis",
    "1031 exchange experts Indiana",
    "tax deferred exchange specialists",
    "Indianapolis real estate advisors"
  ],
  openGraph: {
    title: "About Indianapolis 1031 Exchange",
    description: "Over 20 years of experience helping Central Indiana investors with tax-deferred exchanges.",
    type: "website",
  },
  alternates: {
    canonical: "https://indy1031exchange.com/about"
  }
};

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

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Indianapolis 1031 Exchange",
      "description": "Expert 1031 exchange services for Indianapolis real estate investors",
      "foundingDate": "2000",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "100 Monument Circle, Suite 500",
        "addressLocality": "Indianapolis",
        "addressRegion": "IN",
        "postalCode": "46204",
        "addressCountry": "US"
      },
      "telephone": "(317) 555-1031",
      "areaServed": {
        "@type": "State",
        "name": "Indiana"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "About" }]} />
        {/* Hero */}
        <section
          className="relative min-h-[500px] flex items-center"
          style={{
            backgroundImage: "url('/neighborhoods/downtown/downtown-in.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              About Us
            </h1>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-paper">
          <div className="container max-w-4xl">
            <h2 className="text-4xl text-heading font-serif italic mb-8 text-center">
              Our Story
            </h2>
            <p className="text-xl text-ink leading-relaxed mb-6">
              Founded with a commitment to excellence, Indianapolis 1031 Exchange represents a 
              trusted connection between investors and tax-advantaged opportunities throughout 
              the Indianapolis region. Our team of highly trained advisors specializes in helping 
              property owners defer capital gains through strategic like-kind exchanges.
            </p>
            <p className="text-xl text-ink leading-relaxed mb-6">
              With over two decades of experience facilitating exchanges across Central Indiana, 
              we&apos;ve helped thousands of investors preserve and grow their wealth through the 
              power of tax-deferred real estate investing.
            </p>
            <p className="text-xl text-ink leading-relaxed">
              Our focused mission is on serving the Indianapolis investment community with 
              personalized service, expert guidance, and deep local market knowledge that 
              ensures every exchange is executed with precision and care.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-teal">
          <div className="container">
            <div className="text-center mb-16">
              <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
              <h2 className="text-4xl text-white font-serif italic">
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl text-white font-serif italic mb-4">Integrity</h3>
                <p className="text-white/80">
                  We operate with complete transparency and always put our clients&apos; interests first.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-white font-serif italic mb-4">Expertise</h3>
                <p className="text-white/80">
                  Our team brings decades of combined experience in 1031 exchanges and real estate.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-white font-serif italic mb-4">Service</h3>
                <p className="text-white/80">
                  We provide personalized attention to ensure every client&apos;s unique needs are met.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-paper">
          <div className="container text-center">
            <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
            <h2 className="text-4xl text-heading font-serif italic mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-ink mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your 1031 exchange needs and discover how we can help 
              you achieve your investment goals.
            </p>
            <Link href="/contact" className="btn btn-solid">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
