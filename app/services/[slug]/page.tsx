import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

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

const serviceData: Record<string, {
  name: string;
  description: string;
  details: string[];
  longDescription: string;
  benefits: string[];
  process: string[];
  faq: { question: string; answer: string; }[];
}> = {
  "delayed-exchange": {
    name: "Delayed Exchange",
    description: "The most common type of 1031 exchange, where you sell your relinquished property first and then acquire replacement property within the IRS-mandated timeframes.",
    details: ["45 days to identify replacement properties", "180 days to complete the exchange", "Must use a Qualified Intermediary", "Like-kind property requirements must be met"],

    longDescription: "A delayed 1031 exchange, also known as a forward or Starker exchange, is the most common form of tax-deferred exchange under IRC Section 1031. In a delayed exchange, the investor sells their relinquished property first and then acquires replacement property within strict IRS timelines. This structure allows Indianapolis real estate investors to defer capital gains taxes while upgrading their investment portfolio. Our qualified intermediary services ensure full compliance with all IRS requirements throughout the exchange process.",
    benefits: [
      "Defer 100% of capital gains taxes on investment property sale",
      "Upgrade to higher-value properties in Indianapolis market",
      "Consolidate multiple properties into single asset",
      "Diversify into different property types or locations",
      "Leverage tax-deferred funds for portfolio growth"
    ],
    process: [
      "Engage qualified intermediary before closing on relinquished property",
      "Close sale of relinquished property with funds held by intermediary",
      "Identify replacement properties within 45 days",
      "Close on replacement property within 180 days",
      "Complete exchange documentation and IRS reporting"
    ],
    faq: [
      {
        question: "What is the 45-day identification period?",
        answer: "You must identify potential replacement properties in writing to your qualified intermediary within 45 days of closing on your relinquished property. You can identify up to three properties of any value, or more using the 200% or 95% rules."
      },
      {
        question: "What is the 180-day exchange period?",
        answer: "You must close on your replacement property within 180 days of closing on your relinquished property, or by the due date of your tax return for that year, whichever comes first."
      }
    ]
  },
  "reverse-exchange": {
    name: "Reverse Exchange",
    description: "Acquire your replacement property before selling your current property. Ideal when you've found the perfect investment and don't want to risk losing it.",
    details: ["Replacement property acquired first", "Exchange Accommodation Titleholder (EAT) holds property", "Same 45/180 day timelines apply", "More complex but highly effective"],
    longDescription: "A reverse 1031 exchange allows Indianapolis investors to acquire replacement property before selling their relinquished property. This strategy is particularly valuable in competitive real estate markets where desirable properties move quickly. An Exchange Accommodation Titleholder (EAT) temporarily holds either the replacement or relinquished property while you complete the exchange. Reverse exchanges provide flexibility and competitive advantage but require careful planning and experienced intermediary services.",
    benefits: [
      "Secure ideal replacement property in competitive Indianapolis market",
      "No pressure to find replacement property after sale",
      "Time to properly market relinquished property for best price",
      "Avoid rushed decisions during 45-day identification period",
      "Strategic advantage in hot real estate markets"
    ],
    process: [
      "Consult with qualified intermediary to structure reverse exchange",
      "Establish Exchange Accommodation Titleholder (EAT)",
      "EAT acquires replacement property on your behalf",
      "Market and sell relinquished property within 180 days",
      "Transfer replacement property from EAT to complete exchange"
    ],
    faq: [
      {
        question: "How does a reverse exchange work?",
        answer: "In a reverse exchange, an Exchange Accommodation Titleholder (EAT) takes title to either your replacement property or relinquished property. This allows you to acquire the replacement property before selling your current property, providing flexibility in competitive markets."
      },
      {
        question: "What are the costs of a reverse exchange?",
        answer: "Reverse exchanges are more complex than delayed exchanges and typically have higher fees. Costs include EAT setup, holding costs, property insurance, and qualified intermediary fees. We provide detailed cost estimates during consultation."
      }
    ]
  },
  "improvement-exchange": {
    name: "Improvement Exchange",
    description: "Also known as a construction or build-to-suit exchange, this allows you to use exchange funds to improve or construct on the replacement property.",
    details: ["Improvements must be completed within 180 days", "Property held by EAT during construction", "Increases property value with deferred taxes", "Complex documentation requirements"],
    longDescription: "An improvement exchange, also called a construction or build-to-suit exchange, allows Indianapolis investors to use tax-deferred exchange funds to improve or construct on replacement property. This strategy enables you to increase property value during the exchange period while maintaining tax deferral benefits. The replacement property is held by an Exchange Accommodation Titleholder while improvements are completed, then transferred to you with increased value.",
    benefits: [
      "Use exchange funds for property improvements",
      "Increase replacement property value with deferred taxes",
      "Customize replacement property to investment objectives",
      "Maximize depreciation benefits on new improvements",
      "Create ideal investment property through construction"
    ],
    process: [
      "Identify property and planned improvements before exchange",
      "Structure improvement exchange with qualified intermediary",
      "EAT acquires property and oversees improvement completion",
      "Complete improvements within 180-day exchange period",
      "Transfer improved property to complete exchange"
    ],
    faq: [
      {
        question: "Can all improvement costs be included in the exchange?",
        answer: "Improvements must be completed and owned by the EAT before the end of the 180-day exchange period. Any improvements not completed within this timeframe may not qualify for tax deferral."
      },
      {
        question: "What types of improvements qualify?",
        answer: "Qualifying improvements include renovations, additions, new construction, and significant property upgrades. Soft costs like architectural and engineering fees may also qualify if properly structured."
      }
    ]
  },
  "build-to-suit": {
    name: "Build-to-Suit Exchange",
    description: "Custom construction on replacement property to meet your specific investment criteria. Work with developers to create purpose-built assets.",
    details: ["New construction on acquired land", "Tailored to your investment needs", "Maximize depreciation benefits", "Professional project management"],
    longDescription: "Build-to-suit exchanges allow Indianapolis investors to construct custom commercial or investment properties using tax-deferred 1031 exchange funds. This strategy is ideal for investors who want purpose-built properties tailored to specific tenant needs or investment strategies. By combining land acquisition with new construction, investors can create ideal assets while deferring capital gains taxes. Build-to-suit exchanges require careful planning and coordination with qualified intermediaries, developers, and contractors.",
    benefits: [
      "Create custom property matching investment objectives",
      "Attract premium tenants with purpose-built facilities",
      "Maximize depreciation through new construction",
      "Defer taxes while building portfolio value",
      "Position property for long-term appreciation"
    ],
    process: [
      "Acquire land or property for development",
      "Structure build-to-suit exchange with intermediary",
      "Plan construction to complete within 180 days",
      "EAT oversees construction and holds property",
      "Complete construction and finalize exchange"
    ],
    faq: [
      {
        question: "How long does construction have to be completed?",
        answer: "All construction must be completed within the 180-day exchange period. This tight timeline requires careful planning, pre-approved permits, and experienced contractors familiar with 1031 exchange requirements."
      },
      {
        question: "Can I use my own contractor?",
        answer: "Yes, but the Exchange Accommodation Titleholder must engage the contractor and oversee construction. We coordinate with your preferred contractors to ensure quality work within exchange timelines."
      }
    ]
  },
  "qualified-intermediary": {
    name: "Qualified Intermediary Services",
    description: "We provide secure handling of exchange funds and documentation to ensure full IRS compliance throughout your exchange.",
    details: ["Segregated exchange accounts", "Complete documentation management", "IRS compliance assurance", "Expert guidance throughout process"],
    longDescription: "A qualified intermediary is required for all 1031 exchanges to maintain tax-deferred status. Our Indianapolis-based qualified intermediary services provide secure handling of exchange funds, comprehensive documentation management, and expert guidance throughout the exchange process. We ensure full IRS compliance while protecting your exchange funds in segregated accounts. Our experienced team has facilitated thousands of successful 1031 exchanges for Indianapolis investors across all property types.",
    benefits: [
      "Secure, segregated exchange fund accounts",
      "Complete IRS compliance and documentation",
      "Expert guidance through exchange process",
      "Protection from constructive receipt of funds",
      "Decades of Indianapolis market experience"
    ],
    process: [
      "Execute exchange agreement before closing",
      "Hold exchange funds in segregated account",
      "Prepare identification and assignment documents",
      "Coordinate with closing agents and attorneys",
      "Complete final documentation and IRS reporting"
    ],
    faq: [
      {
        question: "Why do I need a qualified intermediary?",
        answer: "IRS regulations require a qualified intermediary to facilitate 1031 exchanges. The intermediary holds your exchange funds and prepares documentation to prevent constructive receipt, which would disqualify the exchange."
      },
      {
        question: "How are my exchange funds protected?",
        answer: "Exchange funds are held in segregated accounts, separate from our operating accounts. Accounts are typically held at major financial institutions with appropriate insurance coverage."
      }
    ]
  },
  "dst-investments": {
    name: "DST Investments",
    description: "Delaware Statutory Trust investments offer passive 1031 exchange opportunities with institutional-quality properties and professional management.",
    details: ["Fractional ownership of large properties", "Professional asset management", "Diversified property portfolios", "Passive income generation"],
    longDescription: "Delaware Statutory Trust (DST) investments provide Indianapolis 1031 exchange investors with passive ownership in institutional-quality commercial properties. DSTs allow fractional ownership in large assets like office buildings, retail centers, and multifamily properties that would be difficult to acquire individually. Professional asset managers handle all property operations, making DSTs ideal for investors seeking passive income without management responsibilities. DST investments qualify as replacement property for 1031 exchanges.",
    benefits: [
      "Access to institutional-quality commercial properties",
      "Passive ownership with no management duties",
      "Professional asset and property management",
      "Diversification across multiple properties",
      "Potential for stable monthly distributions"
    ],
    process: [
      "Consult on DST investment strategy and options",
      "Review available DST offerings and due diligence",
      "Identify DST properties within 45-day period",
      "Complete investment and exchange documentation",
      "Receive beneficial ownership and begin distributions"
    ],
    faq: [
      {
        question: "What is a Delaware Statutory Trust?",
        answer: "A DST is a legal entity that allows multiple investors to hold fractional ownership in commercial real estate. The IRS recognizes DST beneficial interests as direct property ownership, qualifying them for 1031 exchanges."
      },
      {
        question: "What are typical DST investment minimums?",
        answer: "Most DST investments have minimum investments ranging from $100,000 to $250,000, though this varies by offering. This allows investors to diversify across multiple properties."
      }
    ]
  },
  "consultation": {
    name: "Exchange Consultation",
    description: "Our expert advisors provide comprehensive consultation to help you navigate the complexities of 1031 exchanges and maximize your investment potential.",
    details: ["Personalized exchange strategy", "Tax implication analysis", "Timeline planning", "Ongoing support and guidance"],
    longDescription: "Our Indianapolis 1031 exchange consultation services provide investors with expert guidance to maximize tax deferral benefits and investment returns. We analyze your current property portfolio, investment objectives, and tax situation to develop customized exchange strategies. Our experienced advisors help you understand complex IRS regulations, evaluate replacement property options, and structure exchanges for optimal results. Whether you're completing your first 1031 exchange or managing a complex multi-property transaction, our consultation services ensure informed decision-making.",
    benefits: [
      "Personalized exchange strategy development",
      "Comprehensive tax implication analysis",
      "Expert guidance on IRS regulations",
      "Replacement property evaluation",
      "Ongoing support throughout exchange process"
    ],
    process: [
      "Initial consultation to review investment goals",
      "Analysis of current property and tax situation",
      "Development of customized exchange strategy",
      "Guidance on replacement property selection",
      "Ongoing support through exchange completion"
    ],
    faq: [
      {
        question: "When should I consult about a 1031 exchange?",
        answer: "Ideally, consultation should begin 6-12 months before selling your relinquished property. This allows time to develop strategy, prepare documentation, and identify potential replacement properties. However, we can assist with exchanges at any stage."
      },
      {
        question: "Do you work with my CPA and attorney?",
        answer: "Yes, we coordinate with your tax advisors and attorneys to ensure the exchange structure aligns with your overall tax and estate planning strategies. We recommend involving your CPA early in the exchange process."
      }
    ]
  },
  "property-identification": {
    name: "Property Identification",
    description: "We help you identify suitable replacement properties within the 45-day identification period, ensuring you find investments that meet your criteria.",
    details: ["Market analysis and research", "Property screening and evaluation", "Due diligence support", "Investment criteria matching"],

    longDescription: "Property identification is critical to successful 1031 exchanges, with only 45 days to identify potential replacement properties. Our Indianapolis market expertise helps investors efficiently identify properties matching their investment criteria. We provide comprehensive market analysis, property screening, financial analysis, and due diligence support to ensure you identify the right replacement properties within IRS timelines. Our extensive network of property owners, brokers, and developers provides access to both listed and off-market investment opportunities throughout the Indianapolis metropolitan area.",
    benefits: [
      "Expert Indianapolis market knowledge",
      "Access to listed and off-market properties",
      "Comprehensive financial analysis",
      "Professional due diligence support",
      "Efficient identification within 45-day deadline"
    ],
    process: [
      "Define investment criteria and objectives",
      "Research and screen potential properties",
      "Conduct financial analysis and projections",
      "Coordinate property tours and inspections",
      "Prepare formal identification documentation"
    ],
    faq: [
      {
        question: "What are the identification rules?",
        answer: "You can identify up to three properties of any value (Three Property Rule), or unlimited properties if their total value doesn't exceed 200% of relinquished property value (200% Rule), or acquire 95% of identified property value (95% Rule)."
      },
      {
        question: "Can I change my identified properties?",
        answer: "You can revoke and replace identified properties before the end of the 45-day identification period. After 45 days, your identification is locked and cannot be changed."
      }
    ]
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  
  if (!service) {
    return {
      title: "1031 Exchange Services | Indianapolis IN",
      description: "Expert 1031 exchange services for Indianapolis real estate investors."
    };
  }

  return {
    title: `${service.name} | Indianapolis 1031 Exchange Services`,
    description: `${service.description} Expert ${service.name.toLowerCase()} services for Indianapolis real estate investors seeking tax-deferred exchanges.`,
    keywords: [
      `${service.name} Indianapolis`,
      `1031 ${service.name.toLowerCase()}`,
      `${service.name} Indiana`,
      `Indianapolis ${service.name.toLowerCase()} services`,
      `tax deferred ${service.name.toLowerCase()}`,
      `${service.name} qualified intermediary`,
      `1031 exchange ${slug}`,
      `commercial real estate ${service.name.toLowerCase()}`
    ],
    openGraph: {
      title: `${service.name} | Indianapolis 1031 Exchange`,
      description: service.description,
      type: "website",
    },
    alternates: {
      canonical: `https://indy1031exchange.com/services/${slug}`
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    description: "Expert 1031 exchange services tailored to your investment needs.",
    details: ["Professional guidance", "IRS compliance", "Personalized service", "Expert support"],

    longDescription: "Expert 1031 exchange services for Indianapolis real estate investors.",
    benefits: ["Tax-deferred exchange", "Professional guidance", "IRS compliance"],
    process: ["Consultation", "Planning", "Execution", "Completion"],
    faq: []
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Indianapolis 1031 Exchange",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "100 Monument Circle, Suite 500",
        "addressLocality": "Indianapolis",
        "addressRegion": "IN",
        "postalCode": "46204",
        "addressCountry": "US"
      },
      "telephone": "(317) 555-1031"
    },
    "areaServed": {
      "@type": "State",
      "name": "Indiana"
    },
    "serviceType": "1031 Exchange Services"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-20">
        <Breadcrumb items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
        {/* Hero */}
        <section className="py-24 bg-teal">
          <div className="container text-center">
            <SparkleIcon className="w-10 h-10 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif italic mb-6">
              {service.name}
            </h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              Indianapolis 1031 Exchange Services
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24 bg-paper">
          <div className="container">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl text-heading font-serif italic mb-6">
                What is {service.name}?
              </h2>
              <p className="text-xl text-ink leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="prose prose-lg max-w-none">
                <p className="text-ink leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-ink">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl text-heading font-serif italic mb-6">
                  Our Process
                </h3>
                <ol className="space-y-4">
                  {service.process?.map((step, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </span>
                      <span className="text-ink pt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {service.faq && service.faq.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl text-heading font-serif italic mb-8 text-center">
                  Frequently Asked Questions
                </h3>
                <div className="max-w-3xl mx-auto space-y-6">
                  {service.faq.map((item, index) => (
                    <div key={index} className="bg-cream p-6">
                      <h4 className="text-lg text-heading font-semibold mb-3">
                        {item.question}
                      </h4>
                      <p className="text-ink leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn btn-solid">
                  Get Started
                </Link>
                <Link href="/services" className="btn btn-outline">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
