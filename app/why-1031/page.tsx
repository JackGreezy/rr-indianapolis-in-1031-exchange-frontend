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

const benefits = [
  {
    title: "Defer Capital Gains Taxes",
    description: "With a stepped-up basis at death, your heirs may never pay the deferred capital gains taxes, creating generational wealth that can transform your family's financial future.",
  },
  {
    title: "Accelerate Wealth Building",
    description: "By deferring taxes, you can reinvest 100% of your equity into larger properties, accelerating portfolio growth exponentially over time.",
  },
  {
    title: "Portfolio Diversification",
    description: "Exchange into different property types or geographic locations without triggering immediate tax consequences, allowing strategic rebalancing of your investments.",
  },
  {
    title: "Improved Cash Flow",
    description: "Trade into properties with better cap rates, stronger tenants, or lower management burden to optimize your returns and quality of life.",
  },
  {
    title: "Estate Planning Benefits",
    description: "Properties can be exchanged indefinitely during your lifetime, with heirs receiving a stepped-up basis that may eliminate all deferred gains.",
  },
  {
    title: "Leverage Appreciation",
    description: "Use the equity built through property appreciation to acquire larger, more valuable investments without paying taxes on those gains.",
  },
];

export default function Why1031Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Why 1031 Exchange" }]} />
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
              Why 1031 Exchange?
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Discover the powerful benefits of tax-deferred real estate investing
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-cream p-10">
                  <span className="text-gold text-6xl font-serif italic">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl text-heading font-serif italic mt-4 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-ink leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-teal">
          <div className="container">
            <div className="text-center mb-16">
              <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
              <h2 className="text-4xl text-white font-serif italic">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <span className="text-gold text-5xl font-serif italic">01</span>
                <h3 className="text-xl text-white font-serif italic mt-4 mb-2">Sell Property</h3>
                <p className="text-white/80 text-sm">List and sell your current investment property</p>
              </div>
              <div className="text-center">
                <span className="text-gold text-5xl font-serif italic">02</span>
                <h3 className="text-xl text-white font-serif italic mt-4 mb-2">Identify</h3>
                <p className="text-white/80 text-sm">Identify replacement properties within 45 days</p>
              </div>
              <div className="text-center">
                <span className="text-gold text-5xl font-serif italic">03</span>
                <h3 className="text-xl text-white font-serif italic mt-4 mb-2">Acquire</h3>
                <p className="text-white/80 text-sm">Close on replacement property within 180 days</p>
              </div>
              <div className="text-center">
                <span className="text-gold text-5xl font-serif italic">04</span>
                <h3 className="text-xl text-white font-serif italic mt-4 mb-2">Defer Taxes</h3>
                <p className="text-white/80 text-sm">Enjoy tax-deferred growth on your investment</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-paper">
          <div className="container text-center">
            <SparkleIcon className="w-8 h-8 mx-auto mb-6" />
            <h2 className="text-4xl text-heading font-serif italic mb-6">
              Start Your Exchange Today
            </h2>
            <p className="text-ink mb-10 max-w-2xl mx-auto">
              Our experienced team is ready to guide you through every step of your 1031 exchange.
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
